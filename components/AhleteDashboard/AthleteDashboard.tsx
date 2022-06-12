import { Container, Center } from "@mantine/core"
import { useUser } from "../../hooks/useUser";

const AthleteDashboard = () => {
  const [user] = useUser((state) => [state.user]);

  return (
    <Container>
      <Center>Hello there dashboard</Center>
    </Container>
  )
}

export default AthleteDashboard;
