// components
import { Button, Container } from "@/components/kit";
// libs
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");

  return (
    <Container maxWidth={"xl"}>
      <Button href={"/"} variant={"contained"} color={"secondary"}>
        {t("title")}
      </Button>
    </Container>
  );
}
