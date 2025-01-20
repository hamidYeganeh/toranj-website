// libs
import { VariantProps } from "class-variance-authority";
// variants
import { SkeletonVariants } from "./Skeleton.variants";

// export interface ISkeletonVariants
//     extends VariantProps<typeof SkeletonVariants> {}
export type ISkeletonVariants = VariantProps<typeof SkeletonVariants>

export interface ISkeleton extends ISkeletonVariants {
    className?: HTMLDivElement["className"];
}
