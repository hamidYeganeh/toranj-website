// libs
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
// variants
import { SkeletonVariants } from "./Skeleton.variants";
// types
import type { ISkeleton } from "./Skeleton.types";

const Skeleton = forwardRef<HTMLDivElement, ISkeleton>((props, ref) => {
    const { className, shape } = props;
    return (
        <div ref={ref} className={cn(SkeletonVariants({ shape }), className)} />
    );
});

Skeleton.displayName = "Skeleton";

export default Skeleton;
