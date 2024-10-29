import { ReactNode } from "react";

import { auth } from "@/app/api/auth/authConfig";
import { headers } from "next/headers";
import { getModule, getModuleUserStatus } from "@/server/db/queries";
import NavigationLinks from "./NavigationLinks";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export default async function ModuleWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();
  const isSubscribedUser = session?.user.stripeData !== "free";

  const headerList = headers();
  const pathname = headerList.get("x-current-path"); // this is set in middleware
  console.log(pathname, process.env.NEXT_BASE_URL);

  if (!pathname?.startsWith("/foundations") && !isSubscribedUser)
    redirect(`${process.env.NEXT_BASE_URL}/subscribe?notSubbed=true`);

  // if (!session?.user) return NextResponse.redirect(new URL("/", pathname!));

  const module_id = await getModule(pathname!);
  let status;
  if (!session) status = false;
  else status = await getModuleUserStatus(session?.user.id, module_id);

  return (
    <>
      {children}
      <NavigationLinks
        user_id={session?.user.id ?? ""}
        module_id={module_id}
        status={status}
        prevLesson={null}
        nextLesson={null}
        isSubscribedUser={isSubscribedUser}
      />
    </>
  );
}
