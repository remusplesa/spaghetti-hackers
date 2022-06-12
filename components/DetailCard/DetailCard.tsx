import { Card, Text, Group, RingProgress, Center } from "@mantine/core";

interface ClientDetailProp {
    currentWeek: number,
    totalWeeks: number,
}

const DetailCard = ({currentWeek, totalWeeks}: ClientDetailProp) => {
    return (
    <div style={{ width: 280, margin: 'auto' }}>
        <Card shadow="sm" p="lg">

            <Group style={{ marginBottom: 2, marginTop: 2, marginLeft: 2}}>
                <Text weight="bold" color="cyan" style={{fontSize: 27}}>Weeks</Text>
            </Group>

            <Center>
                <RingProgress
                    size={200}
                    thickness={20}
                    roundCaps
                    label={
                        <Group position="center" spacing={5}>
                            <Text style={{fontSize: 20}} color="cyan">
                                {currentWeek}/
                            </Text>
                            <Text style={{fontSize: 27}} color="cyan"weight="bold">
                                {totalWeeks}
                            </Text>
                        </Group>
                    }
                    sections={[
                        { value: completedWeeksPercentage, color: 'cyan' }
                    ]}
                />
            </Center>
        </Card>
    </div>)
}

export default DetailCard;