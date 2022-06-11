import { Container, Title, Button, Group } from "@mantine/core";

const Navbar = ({ title }: NavbarProps) => {
  return (
    <Container fluid py={16} style={{display: 'flex', flexDirection: "row", alignItems: "center"}}>
      <Title order={1}>{title}</Title>
      <Group align="right" style={{marginLeft: 'auto'}}>
        <Button variant="outline" compact>Log in </Button>
      </Group>
    </Container>
  );
};

type NavbarProps = {
  title: string;
};

export default Navbar;
