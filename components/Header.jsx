import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  ChevronDown,
  FileText,
  GraduationCap,
  LayoutDashboard,
  LogIn,
  PenBox,
  StarIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { checkUser } from "@/lib/checkUser";

export const Header = async () => {
  await checkUser();
  return (
    <header className="fixed w-full top-0 border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            width={200}
            height={60}
            alt="VisionAI Logo"
            className="h-10 py-1 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button className="cursor-pointer" variant={"outline"}>
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:block text-sm">
                  Industry Insights
                </span>
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="cursor-pointer">
                  <StarIcon className="h-4 w-4" />
                  <span className="hidden md:block text-sm">Growth Tools</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Tools</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/resume" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span className="text-sm">Build Resume</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/ai_cover_letter"
                    className="flex items-center gap-2"
                  >
                    <PenBox className="h-4 w-4" />
                    <span className="text-sm">Cover Letter</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/interview" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span className="text-sm">Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: "40px",
                    height: "40px",
                  },
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant={"outline"} className={"cursor-pointer"}>
                <LogIn />
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};
