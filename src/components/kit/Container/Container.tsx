// types
import type { FC } from "react";
import type { IContanier } from "./Container.types";
// libs
import { cn } from "@/lib/utils";
// variants
import { ContainerVariants } from "./Container.variants";

const Container: FC<IContanier> = (props) => {
  const { children, className, maxWidth } = props;

  return (
    <div className={cn(ContainerVariants({ maxWidth }), className)}>
      {children}
    </div>
  );
};
export default Container;
