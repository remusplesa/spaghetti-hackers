import { useRouter } from "next/router";
import { Container, Title, Button, Group, Box } from "@mantine/core";
import {supabase} from '../../utils/supabase'

const Navbar = ({ title }: NavbarProps) => {
  const router = useRouter();
  return (
    <Container
      fluid
      py={16}
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Box onClick={() => router.push("/")} style={{cursor: "pointer"}}>
        <Title order={1}>{title}</Title>
      </Box>
      <Group align="right" style={{ marginLeft: "auto" }}>
        <Button variant="outline" compact onClick={() => router.push("/login")}>
          Log in{" "}
        </Button>
        <Button
          variant="outline"
          color={"red"}
          compact
          onClick={() => supabase.auth.signOut()}
        >
          Log out{" "}
        </Button>
      </Group>
    </Container>
  );
};

type NavbarProps = {
  title: string;
};

export default Navbar;
