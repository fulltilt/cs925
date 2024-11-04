import { useEffect, useState, ReactNode } from "react";

import { getModule, getModuleUserStatus } from "@/server/db/queries";
import NavigationLinks from "./NavigationLinks";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";

export default function ModuleWrapper({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { data: session } = useSession();
  const isSubscribedUser = session?.user.stripeData !== "free";

  const [moduleId, setModuleId] = useState<string>();
  const [status, setStatus] = useState<boolean>();

  const pathname = usePathname();

  if (!pathname?.startsWith("/foundations") && !isSubscribedUser) {
    router.push("/subscribe?notSubbed=true");
  }

  const init = async () => {
    const moduleId = await getModule(pathname);
    setModuleId(moduleId);

    let status;
    if (!session) setStatus(false);
    else {
      status = await getModuleUserStatus(session?.user.id, moduleId);
      setStatus(status);
    }
  };

  useEffect(() => {
    if (session?.user) init();
  }, [session]);

  // if (!session?.user) return;

  return (
    <>
      {children}
      <NavigationLinks
        user_id={session?.user.id ?? ""}
        module_id={moduleId!}
        status={status!}
        prevLesson={null}
        nextLesson={null}
        isSubscribedUser={isSubscribedUser}
      />
    </>
  );
}
