import Link from "next/link";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Laptop } from "lucide-react";
import { auth } from "../api/auth/authConfig";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Hamburger() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

export async function NavBar() {
  const session = await auth();
  const user = session?.user;

  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between p-2 pl-4 pr-4 text-xl font-semibold bg-white dark:bg-slate-900">
      <div className="flex items-center gap-8">
        <Link
          className="flex items-center justify-center no-underline"
          href="/"
        >
          <Laptop className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-xl md:text-2xl font-bold ">CS 925</span>
        </Link>
        {user && user.stripeData && (
          <div className="hidden gap-8 sm:flex">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 no-underline"
              href="/dashboard"
            >
              Dashboard
            </Link>
          </div>
        )}
      </div>
      <div className="sm:hidden">
        <div className="flex gap-4">
          <ThemeSwitcher />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Hamburger />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {user && (
                <DropdownMenuItem>
                  <Link href="/dashboard" className="text-sm">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
              )}
              <DropdownMenuItem>
                <div className="mt-4 sm:mt-0">
                  {session?.user ? <SignOutButton /> : <SignInButton />}
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="mt-4 flex gap-4 sm:mt-0">
          <ThemeSwitcher />
          {session?.user ? <SignOutButton /> : <SignInButton />}
        </div>
      </div>
    </nav>
  );
}
