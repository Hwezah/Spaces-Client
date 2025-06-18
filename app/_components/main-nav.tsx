"use client"; // Required for Next.js App Router if using client components

import * as React from "react";
import Link from "next/link"; // Or your router's Link component
import Image from "next/image"; // For user avatar
import Logo from "@/app/_components/Logo";
import { AlignJustify } from "lucide-react";
import { cn } from "@/lib/utils"; // Import cn utility
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"; // Adjust path if your ui components are elsewhere
import { Button } from "@/components/ui/button"; // Adjust path
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose, // To close the sheet from within
} from "@/components/ui/sheet"; // Adjust path

// Define a type for the session prop, compatible with what `auth()` returns
// This is a general example; adjust it based on your actual session structure from `../_lib/auth`
interface SessionUser {
  name?: string | null;
  image?: string | null;
}
interface Session {
  user?: SessionUser | null;
}

interface MainNavProps {
  session: Session | null;
}

// Define your base navigation links
// The "About" link was in both, ensure href is consistent or choose one.
// Added "Explore" from the original Navigation.tsx
const staticNavLinks = [
  //   { href: "/", label: "Spaces" },
  { href: "/spaces", label: "Explore" },
  { href: "/about", label: "About" },
  { href: "/account", label: "account" },
  { href: "/contact", label: "Contact" },
];

export function MainNav({ session }: MainNavProps) {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      // Tailwind's default 'md' breakpoint is 768px
      if (window.innerWidth >= 768 && isSheetOpen) {
        setIsSheetOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSheetOpen]);
  return (
    <nav className="relative flex items-center mx-auto justify-between pt-4 pb-4 text-foreground z-50">
      {/* Logo or Brand Name - Logo component is already a Link */}
      <Logo />

      {/* Desktop Navigation & Account: Hidden on small screens, visible on medium screens and up */}
      <div className="hidden md:flex items-center gap-4">
        <NavigationMenu>
          <NavigationMenuList>
            {staticNavLinks.map((link) => {
              if (link.href === "/account") {
                return (
                  <NavigationMenuItem key={link.href}>
                    {session?.user?.image ? (
                      <Link href="/account" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(), // Base styles
                            "md:text-base md:py-3 ", // Larger text and padding on md screens and up
                            "flex items-center gap-2 "
                          )}
                        >
                          <div className="w-6 h-6 md:w-8 md:h-8 relative rounded-full overflow-hidden">
                            <Image
                              fill
                              src={session.user.image}
                              alt={session.user.name ?? "User avatar"}
                              referrerPolicy="no-referrer"
                              className="object-cover"
                            />
                          </div>
                          {/* Optional: You can add user name here if desired */}
                          {/* <span className="text-sm">{session.user.name}</span> */}
                        </NavigationMenuLink>
                      </Link>
                    ) : (
                      <Link href="/account" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "md:text-base md:pt-3 pb-2 hover:border-b-2 border-gray-700 dark:border-white transition-all duration-200" // Larger text and padding on md screens and up
                          )}
                        >
                          Guest area
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                );
              }
              return (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "md:text-base md:pl-5 md:pt-3 pb-2 hover:border-b-2 border-gray-700 transition-all dark:border-white duration-200" // Larger text and padding on md screens and up
                      )}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
        {/* The separate Desktop Account Link div is removed as its logic is now part of the loop above */}
      </div>

      {/* Mobile Navigation: Visible on small screens, hidden on medium screens and up */}
      <div className="md:hidden">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild onClick={() => setIsSheetOpen(true)}>
            <Button size="icon">
              <AlignJustify className="!w-6 !h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className=" border-l-0 w-[12rem]  bg-white dark:bg-background"
          >
            {/* Or "left", "top", "bottom" */}
            <SheetHeader>
              <SheetTitle>
                {/* Logo component is already a Link, SheetClose will pass props to it */}
                <SheetClose asChild>
                  <Logo />
                </SheetClose>
              </SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-6">
              {staticNavLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="flex w-full items-center py-2 text-lg font-semibold hover:scale-105 transition-all" // NOSONAR
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
              {/* Mobile Account Link */}
              <SheetClose asChild>
                {session?.user?.image ? (
                  <Link
                    href="/account"
                    className="flex w-full items-center gap-3 py-2 text-lg font-semibold hover:scale-105 transition-all" // NOSONAR
                  >
                    <div className="w-8 h-8 relative rounded-full overflow-hidden">
                      <Image
                        fill
                        src={session.user.image}
                        alt={session.user.name ?? "User avatar"}
                        referrerPolicy="no-referrer"
                        className="object-cover"
                      />
                    </div>
                    <span>
                      {session.user?.name?.split(" ")[0] ?? "Account"}
                    </span>
                  </Link>
                ) : (
                  <Link
                    href="/account"
                    className="flex w-full items-center py-2 text-lg font-semibold hover:scale-105 transition-all" // NOSONAR
                  >
                    Guest area
                  </Link>
                )}
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
