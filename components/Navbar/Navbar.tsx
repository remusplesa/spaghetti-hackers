import { useRouter } from "next/router";
import { Container, Title, Button, Group, Box } from "@mantine/core";
import { supabase } from "../../utils/supabase";
import { useUser } from "../../hooks/useUser";
import { useEffect } from 'react';

const Navbar = ({ title }: NavbarProps) => {
  const router = useRouter();

  const [user, setUser] = useUser((state) => [state.user, state.setUser]);

  return (
    <Container
      fluid
      py={16}
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Box onClick={() => router.push("/")} style={{ cursor: "pointer" }}>
        <Title order={1}>{title}</Title>
      </Box>
      <Group align="right" style={{ marginLeft: "auto" }}>
        {user.id ?
        <Button
        variant="outline"
        color={"red"}
        compact
        onClick={ () => { supabase.auth.signOut(); setUser({}) } }
      >
        Log out{" "}
      </Button> :
          <Button
            variant="outline"
            compact
            onClick={() => router.push("/login")}
          >
            Log in{" "}
          </Button> }
          
      </Group>
    </Container>
  );
};

type NavbarProps = {
  title: string;
};

export default Navbar;
