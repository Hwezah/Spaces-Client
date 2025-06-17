import React from "react";
import { auth } from "../_lib/auth";
import { MainNav } from "./main-nav";
export default async function Navigation() {
  const session = await auth();
  return <MainNav session={session} />;
}
