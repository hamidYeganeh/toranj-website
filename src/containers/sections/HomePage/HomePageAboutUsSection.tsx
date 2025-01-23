"use client";

import { AboutUs } from "@/constants/dummy";
import { MEDIAS } from "@/constants/layout-config";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useTranslations } from "next-intl";
import Image from "next/image";
// import { useRef } from "react";

export const HomePageAboutUsSection = () => {
    const t = useTranslations("HomePage");
    // const containerRef = useRef(null);

    useGSAP(() => {
        // const container = gsap.timeline();
        const bgTimeline = gsap.timeline();
        // const panelsContainer = gsap.timeline();
        const card = gsap.timeline();

        // let sections = gsap.utils.toArray(".panel");

        // gsap.to(sections, {
        //     xPercent: -100 * (sections.length - 1),
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: "#panels-container",
        //         pin: true,
        //         markers: false,
        //         scrub: 1,
        //         // @ts-ignore
        //         // end: `+=${document.querySelector("#panels-container").offsetWidth}`,
        //         end: "+=" + window.innerWidth * 3,
        //     },
        // });

        bgTimeline.to("#about-us-bg", {
            margin: 0,
        });

        // panelsContainer.to("#panels-container", {
        //     backgroundColor: "red",
        // });

        card.to("#about-us-card", {
            x: -500,
        });

        const cardAction = gsap.to("#about-us-card", {
            position: "fixed",
            left: `${4 * 16}px`,
            top: 0,
        });
        // const panel1Action = gsap.to("#panel-1", {
        //     position: "fixed",
        //     left: 0,
        //     bottom: 0,
        //     right: 0,
        // });

        ScrollTrigger.create({
            trigger: "#about-us-container",
            start: "top top",
            end: "max",
            markers: false,
            pin: true,
            pinSpacing: false,
            animation: cardAction,
            toggleActions: "play reverse play reverse",
        });

        ScrollTrigger.create({
            trigger: "#about-us-container",
            start: "top",
            end: "+=500",
            markers: false,
            scrub: 1,
            animation: bgTimeline,
        });
        ScrollTrigger.create({
            trigger: "#panels-container",
            start: "top",
            end: "+=400px",
            markers: false,
            scrub: 1,
            animation: card,
        });
        // ScrollTrigger.create({
        //     id: "panel-1",
        //     trigger: "#panel-1",
        //     start: "center top",
        //     end: "+=1000",
        //     markers: false,
        //     pin: true,
        //     anticipatePin: 1,
        //     toggleActions: "play reverse play reverse",
        //     // animation: panel1Action,
        // });

        // const panels = gsap.utils.toArray(".panel");

        // gsap.to(panels, {
        //     xPercent: -100 * (panels.length - 1),
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: "#panels-container",
        //         pin: true,
        //         scrub: 1,
        //         markers: false,
        //         end: "+=" + panels.length * window.innerHeight,
        //     },
        // });
    });

    return (
        <div id="about-us-container" className="relative w-full bg-text-dark">
            <div id="about-us-bg" className="absolute inset-0 mx-8 mb-0 w-full">
                <div
                    className="sticky top-0 -z-0 h-dvh w-full"
                    style={{
                        backgroundAttachment: "fixed",
                        backgroundImage: `url(${MEDIAS.aboutUsImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></div>
            </div>
            <div className="relative z-10 flex h-full w-full justify-between">
                <div
                    id="about-us-card"
                    className="flex h-screen w-fit items-end pb-8"
                >
                    <div className="flex h-60 w-full max-w-md flex-col justify-between bg-white p-4">
                        <p className="w-full max-w-60 text-xs font-medium text-text-dark">
                            {t("about-us-section.card.title")}
                        </p>
                        <p className="w-full max-w-sm text-xs font-medium text-text-dark">
                            {t("about-us-section.card.description")}
                        </p>
                    </div>
                </div>
                <div />
                <div className="mt-[150dvh] h-full overflow-hidden pe-8">
                    <div className="mb-8 w-full max-w-96">
                        <p className="text-5xl text-text-secondary">
                            {t("about-us-section.text")}
                        </p>
                    </div>
                </div>
            </div>
            <div
                id="panels-container"
                className="x-[100dvw] z-10 flex h-dvh w-[200dvw] flex-row"
            >
                <div className="panel h-dvh w-[50dvw] opacity-0"></div>
                <div id="panel-1" className="panel h-dvh w-[100dvw]">
                    <div className="grid h-full w-full grid-cols-2">
                        <div className="relative col-span-1 flex h-full items-center justify-center">
                            <h2 className="absolute top-[calc(50%-300px)] mx-auto max-w-md text-center font-sequencia text-7xl text-white">
                                {AboutUs[0].title}
                            </h2>
                            <Image
                                src={AboutUs[0].image}
                                alt="About us image"
                                width={300}
                                height={300}
                                className="section-image aspect-square w-72"
                            />
                        </div>
                        <div className="col-span-1 h-full bg-white"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// <div
//     ref={containerRef}
//     id="about-us-container"
//     className="relative z-0 h-[800dvh] w-full pb-0"
// >
//     <div className="w-full">
//         <div
//             id="about-us-bg"
//             className="sticky top-0 z-0 h-dvh w-full bg-cover bg-center bg-no-repeat"
//             style={{ backgroundImage: `url(${MEDIAS.aboutUsImage})` }}
//         ></div>

//         <div
//             id="about-us-card"
//             className="sticky left-16 top-0 flex h-screen w-fit items-end pb-8"
//         >
//             <div className="flex h-60 w-full max-w-md flex-col justify-between bg-white p-4">
//                 <p className="w-full max-w-60 text-xs font-medium text-text-dark">
//                     {t("about-us-section.card.title")}
//                 </p>
//                 <p className="w-full max-w-sm text-xs font-medium text-text-dark">
//                     {t("about-us-section.card.description")}
//                 </p>
//             </div>
//         </div>

//         <div className="absolute right-0 top-0 w-fit px-8">
//             <div className="h-dvh w-full"></div>

//             <div className="flex h-full w-full flex-row justify-between pe-8">
//                 <div className="mt-[100dvh] w-full max-w-96">
//                     <p className="text-5xl text-text-secondary">
//                         {t("about-us-section.text")}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div
//         ref={sliderRef}
//         // className="absolute bottom-[100dvh] z-30 flex h-dvh flex-row ps-[40dvw]"
//         className="absolute z-30 hidden h-dvh flex-row"
//     >
//         <div className="section h-full w-dvw">
//             <div className="grid h-full w-full grid-cols-2">
//                 <div className="relative col-span-1 flex h-full items-center justify-center">
//                     <div className="section-title absolute top-[20%] mx-auto w-full max-w-[470px] text-center">
//                         <h2 className="font-sequencia text-7xl text-text-secondary">
//                             {AboutUs[0].title}
//                         </h2>
//                     </div>
//                     <Image
//                         src={AboutUs[0].image}
//                         alt="About us image"
//                         width={300}
//                         height={300}
//                         className="section-image aspect-square w-72"
//                     />
//                 </div>
//                 <div className="col-span-1 flex h-full justify-end bg-white">
//                     <div
//                         className="h-full w-48 bg-cover bg-center"
//                         style={{
//                             backgroundImage: `url(${AboutUs[0].image})`,
//                         }}
//                     ></div>
//                 </div>
//             </div>
//         </div>
//         {/* <div className="section h-full w-dvw">
//             <div className="grid h-full w-full grid-cols-2">
//                 <div className="relative col-span-1 flex h-full items-center justify-center">
//                     <div className="section-title absolute top-[20%] mx-auto w-full max-w-[470px] text-center">
//                         <h2 className="font-sequencia text-7xl text-text-secondary mix-blend-screen">
//                             {AboutUs[1].title}
//                         </h2>
//                     </div>
//                     <Image
//                         src={AboutUs[1].image}
//                         alt="About us image"
//                         width={300}
//                         height={300}
//                         className="section-image aspect-square w-72"
//                     />
//                 </div>
//                 <div className="col-span-1 flex h-full justify-end bg-white">
//                     <div
//                         className="h-full w-48 bg-cover bg-center"
//                         style={{
//                             backgroundImage: `url(${AboutUs[1].image})`,
//                         }}
//                     ></div>
//                 </div>
//             </div>
//         </div> */}
//     </div>
// </div>
