import { clearSession } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function LogoutPage() {
  await clearSession();
  redirect("/");
}