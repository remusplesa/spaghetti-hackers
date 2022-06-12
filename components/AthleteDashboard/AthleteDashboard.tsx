import { Container, Center, Indicator, Card, Text } from "@mantine/core"
import { Calendar } from "@mantine/dates";
import { useUser } from "../../hooks/useUser";
import ClientDetails from "../ClientDetails/ClientDetails";

const AthleteDashboard = () => {
  const [user] = useUser((state) => [state.user]);

  return (
    <Container>
      <Text p={5} size="xl" weight="bold">Hello {user?.username}</Text>
      <Card shadow="sm" p="md" mx={5} my={16}>
        <Calendar
          fullWidth
          // value={value}
          onChange={() => console.log('cliecked')}
          renderDay={(date) => {
            const day = date.getDate();
            return (
              <Indicator size={8} color="red" offset={8} disabled={day !== 16}>
                <div>{day}</div>
              </Indicator>
            );
          }}
        />
      </Card>
      <ClientDetails />

    </Container>
  )
}

export default AthleteDashboard;
