"use client";
import { Header } from "@/components/Layout/Header";
import { ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function MainPagesLayout(
    props: Readonly<{
        children: ReactNode;
    }>,
) {
    const { children } = props;

    return (
        <>
            {/* <Header /> */}
            {children}
        </>
    );
}
