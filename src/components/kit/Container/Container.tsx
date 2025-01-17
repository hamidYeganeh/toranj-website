// types
import type { FC } from "react";
import type { IContanier } from "./Container.types";
// libs
import { cn } from "@/lib/utils";
// variants
import { ContainerVariants } from "./Container.variants";

const Container: FC<IContanier> = (props) => {
    const { children, className } = props;

    return (
        <div className={cn(ContainerVariants({}), className)}>{children}</div>
    );
};
export default Container;
