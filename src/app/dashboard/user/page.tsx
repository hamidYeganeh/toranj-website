import { RouterPaths } from "@/constants/router-config";
import { redirect } from "next/navigation";

export default function UsersRootPage() {
    redirect(RouterPaths.dashboard.user.list);
}
