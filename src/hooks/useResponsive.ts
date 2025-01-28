import { useEffect, useState } from "react";

type IMediaQuery = "xs" | "sm" | "md" | "lg" | "xl";

// export const useResponsive = () => {
//     const [currentMediaQuery, setCurrentMediaQuery] = useState<IMediaQuery>();

//     const isMobile = currentMediaQuery === "sm";
//     const isTablet = currentMediaQuery === "md";
//     const isLaptop = currentMediaQuery === "lg";
//     const isDesktop = currentMediaQuery === "xl";

//     useEffect(() => {
//         function handleResize() {
//             const windowSize = window.innerWidth;
//             if (windowSize < 375) {
//                 setCurrentMediaQuery("xs");
//             } else if (windowSize < 575) {
//                 setCurrentMediaQuery("sm");
//             } else if (windowSize < 768) {
//                 setCurrentMediaQuery("md");
//             } else if (windowSize < 1024) {
//                 setCurrentMediaQuery("lg");
//             } else if (windowSize < 1400) {
//                 setCurrentMediaQuery("xl");
//             }
//         }
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     return {
//         currentMediaQuery,
//         isMobile,
//         isTablet,
//         isLaptop,
//         isDesktop,
//     };
// };

export const useResponsive = () => {
    const [state, setState] = useState({
        isMobile: false,
        isTablet: false,
        isDesktop: false,
    });

    useEffect(() => {
        onResizeHandler();

        Setup();

        return () => {
            Cleanup();
        };
    }, []);

    const onResizeHandler = () => {
        const isMobile = window.innerWidth <= 575;
        const isTablet = window.innerWidth <= 768;
        const isDesktop = window.innerWidth > 1024;

        setState({ isMobile, isTablet, isDesktop });
    };

    const Setup = () => {
        window.addEventListener("resize", onResizeHandler, false);
    };
    const Cleanup = () => {
        window.removeEventListener("resize", onResizeHandler, false);
    };

    return state;
};
