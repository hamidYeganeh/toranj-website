import { Button, Skeleton } from "@/components/kit";

export const DashboardAside = () => {
    return (
        <aside className="bg-bg-paper flex w-96 p-2">
            <div className="sticky top-2 h-96 w-full rounded bg-secondary-400 p-2">
                <Button>ASIDE</Button>

                <Skeleton className="w-full h-20" />
            </div>
        </aside>
    );
};
