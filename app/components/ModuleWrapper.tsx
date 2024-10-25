import { ReactNode } from "react";

import { auth } from "@/app/api/auth/authConfig";
import { headers } from "next/headers";
import { getModule, getModuleUserStatus } from "@/server/db/queries";
import NavigationLinks from "./NavigationLinks";

export default async function ModuleWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();
  if (!session?.user) return;

  const headerList = headers();
  const pathname = headerList.get("x-current-path"); // this is set in middleware

  const module_id = await getModule(pathname!);
  const status = await getModuleUserStatus(session?.user.id, module_id);

  return (
    <>
      {children}
      <NavigationLinks
        user_id={session.user.id}
        module_id={module_id}
        status={status}
        prevLesson={null}
        nextLesson={null}
      />
    </>
  );
}
