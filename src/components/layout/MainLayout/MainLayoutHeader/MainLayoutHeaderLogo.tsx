// configs
import { MAIN_HEADER_LOGO_CONFIG } from "@/constants/layout-config";
// components
import Image from "next/image";

export const MainLayoutHeaderLogo = () => {
  return (
    <div className="w-fit">
      <Image
        src={MAIN_HEADER_LOGO_CONFIG.path}
        alt="Header Logo"
        width={MAIN_HEADER_LOGO_CONFIG.size.width}
        height={MAIN_HEADER_LOGO_CONFIG.size.height}
      />
    </div>
  );
};
