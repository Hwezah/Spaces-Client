"use server";
import { signIn } from "./auth.js";
import { signOut } from "./auth.js";
export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
