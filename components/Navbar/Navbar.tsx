import { Container, Title, Button } from "@mantine/core";

export const Navbar = ({ title }: NavbarProps) => {
  return (
    <Container fluid p={16}>
        <Title order={1}>{title}</Title>
    </Container>
  )
};

type NavbarProps = {
  title: string;
};
