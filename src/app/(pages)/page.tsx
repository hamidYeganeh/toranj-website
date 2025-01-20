import {
    HomePageAdvantagesSection,
    HomePageContentSection,
    HomePageHeroSection,
    HomePagePriceSection,
    HomePageProductsSection,
} from "@/containers/sections";
import { HomePageContactsSection } from "@/containers/sections/HomePage/HomePageContactsSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HomePage() {
    return (
        <main className="w-full bg-bg-paper">
            <HomePageHeroSection />
            <HomePageProductsSection />
            {/* <HomePageAboutUsSection /> */}
            <HomePagePriceSection />
            <HomePageContentSection />
            <HomePageAdvantagesSection />
            <HomePageContactsSection />
        </main>
    );
}
