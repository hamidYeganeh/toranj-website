// libs
import { useState } from "react";

export const useToggle = (initialValue?: boolean) => {
    const [toggled, setToggled] = useState<boolean>(initialValue || false);

    const toggle = () => setToggled(!toggled);

    return [toggled, toggle] as const;
};
