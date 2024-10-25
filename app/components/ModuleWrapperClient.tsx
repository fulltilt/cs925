import { useEffect, useState, ReactNode } from "react";

import { getModule, getModuleUserStatus } from "@/server/db/queries";
import NavigationLinks from "./NavigationLinks";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

export default function ModuleWrapper({ children }: { children: ReactNode }) {
  const { data: session } = useSession();

  const [moduleId, setModuleId] = useState<string>();
  const [status, setStatus] = useState<boolean>();

  const pathname = usePathname();

  const init = async () => {
    const moduleId = await getModule(pathname);
    setModuleId(moduleId);
    const status = await getModuleUserStatus(session.user.id, moduleId);
    setStatus(status);
  };

  useEffect(() => {
    if (session?.user) init();
  }, [session]);

  if (!session?.user) return;

  return (
    <>
      {children}
      <NavigationLinks
        user_id={session.user.id}
        module_id={moduleId!}
        status={status!}
        prevLesson={null}
        nextLesson={null}
      />
    </>
  );
}
