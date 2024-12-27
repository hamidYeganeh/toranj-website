import { Button } from "@/components/kit/Button";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage");
  return (
    <>
      <h1>{t("title")}</h1>
      <Button variant={"contained"}></Button>
    </>
  );
}
