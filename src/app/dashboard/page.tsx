import { IconButton } from "@/components/kit";
import { Pencil } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="m-auto flex w-full max-w-sm flex-col items-center justify-center gap-2">
            <IconButton
                variant={"contained"}
                color="primary"
                size={"lg"}
                shadow
            >
                <Pencil />
            </IconButton>
            <IconButton variant={"contained"} color="secondary" size={"md"}>
                <Pencil />
            </IconButton>
            <IconButton variant={"contained"} color="tertiary" size={"sm"}>
                <Pencil />
            </IconButton>
            <IconButton variant={"contained"} color="success">
                <Pencil />
            </IconButton>
            <IconButton variant={"contained"} color="warning">
                <Pencil />
            </IconButton>
            <IconButton variant={"contained"} color="error">
                <Pencil />
            </IconButton>
            <IconButton variant={"contained"} color="info">
                <Pencil />
            </IconButton>
        </div>
    );
}
