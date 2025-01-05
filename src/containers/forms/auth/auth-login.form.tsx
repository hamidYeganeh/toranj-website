import { Button, Container, Input } from "@/components/kit";
import { Loader } from "lucide-react";

export const AuthLoginForm = () => {
    return (
        <Container className="my-11 flex flex-col gap-4">
            <Input size={"sm"} />
            <Input size={"lg"} label="HELLo" startAdornment={<Loader />} />
        </Container>
    );
};
