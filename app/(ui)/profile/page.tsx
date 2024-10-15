"use client";

import { SessionProvider } from "next-auth/react";
import ProfileComponent from "@/app/components/ProfileComponent";

export default function ProfilePage() {
  return (
    <SessionProvider>
      <ProfileComponent />
    </SessionProvider>
  );
}
