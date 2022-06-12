import { Card, Text, Group, RingProgress, Center, Button, Input, Textarea, Slider } from "@mantine/core";
import { SetStateAction, useState } from "react";
import ExampleChart from '../ExampleChart/ExampleChart';

const runnerDetails = {
    currentWeek: 5,
    totalWeeks: 25,
    currentWeekKm: 55,
    totalWeekKm: 100,
    feedback: 'Felt good, muscles sore. Slight knee pain',
    overallSessionScore: 8,
    nextSessionType: 'Tempo Run',
    nextSessionDistance: 15
}


const ClientDetails = () => {
    const completedWeeksPercentage = (100 * runnerDetails.currentWeek) / runnerDetails.totalWeeks;
    const completedWeekKmPercentage = (100 * runnerDetails.currentWeekKm) / runnerDetails.totalWeekKm;
    const feelingColor = getFeelingColor(runnerDetails.overallSessionScore);
    const [feedback, setFeedback] = useState("")

    function getFeelingColor(overallSessionScore: number) {
        switch (overallSessionScore) {
            case 1:
            case 2:
            case 3: return 'red'; break;
            case 4:
            case 5:
            case 6: return 'yellow'; break;
            case 7:
            case 8:
            case 9:
            case 10: return 'green'; break;
        }
    };

    const handleFeedbackChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setFeedback(event.target.value)
    }

    console.log(completedWeeksPercentage);
    return (
        <Group position="center">
            <div style={{ width: 270, margin: 'auto' }}>
                <Card shadow="sm" p="lg">
                    <Group style={{ marginBottom: 2, marginTop: 2, marginLeft: 2 }}>
                        <Text color="cyan" style={{ fontSize: 25, fontWeight: 100 }} >Weeks</Text>
                    </Group>

                    <Center>
                        <RingProgress
                            size={200}
                            thickness={20}
                            roundCaps
                            label={
                                <Group position="center" spacing={2}>
                                    <Text style={{ fontSize: 20 }} color="cyan">
                                        {runnerDetails.currentWeek}/
                                    </Text>
                                    <Text style={{ fontSize: 33 }} color="cyan">
                                        {runnerDetails.totalWeeks}
                                    </Text>
                                </Group>
                            }
                            sections={[
                                { value: completedWeeksPercentage, color: 'cyan' }
                            ]}
                        />
                    </Center>
                </Card>
            </div>

            <div style={{ width: 280, margin: 'auto' }}>
                <Card shadow="sm" p="lg">

                    <Group style={{ marginBottom: 2, marginTop: 2, marginLeft: 2 }}>
                        <Text color="cyan" style={{ fontSize: 25, fontWeight: 100 }}>KM This Week</Text>
                    </Group>

                    <Center>
                        <RingProgress
                            size={200}
                            thickness={20}
                            roundCaps
                            label={
                                <Group position="center" spacing={2}>
                                    <Text style={{ fontSize: 20 }} color="cyan">
                                        {runnerDetails.currentWeekKm}/
                                    </Text>
                                    <Text style={{ fontSize: 30 }} color="cyan">
                                        {runnerDetails.totalWeekKm}
                                    </Text>
                                </Group>
                            }
                            sections={[
                                { value: completedWeeksPercentage, color: 'cyan' }
                            ]}
                        />
                    </Center>
                </Card>
            </div>

            <div style={{ width: 280, margin: 'auto' }}>
                <Card shadow="sm" p="lg">

                    <Group style={{ marginBottom: 2, marginTop: 2, marginLeft: 2 }}>
                        <Text color="cyan" style={{ fontSize: 25, fontWeight: 100 }}>Session Score</Text>
                    </Group>

                    <Center>
                        <RingProgress
                            size={200}
                            thickness={20}
                            roundCaps
                            label={
                                <Group position="center" spacing={5}>
                                    <Text style={{ fontSize: 30 }} color={feelingColor}>
                                        {runnerDetails.overallSessionScore}
                                    </Text>
                                </Group>
                            }
                            sections={[
                                { value: runnerDetails.overallSessionScore * 10, color: feelingColor! }
                            ]}
                        />
                    </Center>
                </Card>
            </div>

            <div style={{ width: 280, margin: 'auto' }}>
                <Card shadow="sm" p="lg" style={{ height: 280 }}>

                    <Group style={{ marginBottom: 10, marginTop: 2, marginLeft: 2 }}>
                        <Text color="cyan" style={{ fontSize: 25, fontWeight: 100 }}>Feedback</Text>
                    </Group>

                    <Text style={{ fontSize: 15 }}>
                        &quot;{runnerDetails.feedback}&quot;
                    </Text>
                </Card>
            </div>

            <div style={{ width: 280, margin: 'auto' }}>
                <Card shadow="sm" p="lg" style={{ height: 280 }}>

                    <Group style={{ marginBottom: 2, marginTop: 2, marginLeft: 2 }}>
                        <Text color="cyan" style={{ fontSize: 25, fontWeight: 100 }}>Next Session</Text>
                    </Group>

                    <Text style={{ fontSize: 35, color: "orange" }}>
                        {runnerDetails.nextSessionType} {runnerDetails.nextSessionDistance}K
                    </Text>
                </Card>
            </div>

            <div style={{ width: 280, margin: 'auto' }}>
                <Card shadow="sm" p="lg" style={{ height: 280 }}>

                    <Group style={{ marginBottom: 10, marginTop: 2, marginLeft: 2 }}>
                        <Text color="cyan" style={{ fontSize: 25, fontWeight: 100 }}>Metrics</Text>
                    </Group>

                    <ExampleChart></ExampleChart>
                    <Group position="right">
                        <Button color="cyan" radius="md">
                            Go To Metrics
                        </Button>
                    </Group>
                </Card>
            </div>
            <div style={{ width: 300 * 3, margin: 'auto' }}>
                <Card shadow="sm" p="lg" style={{ height: 280 }}>

                    <Group style={{ marginBottom: 10, marginTop: 2, marginLeft: 2 }}>
                        <Text color="cyan" style={{ fontSize: 25, fontWeight: 100 }}>Feedback</Text>
                    </Group>

                    <Textarea value={feedback} style={{ width: 860, marginBottom: 12 }} minRows={5} onChange={handleFeedbackChange} />
                    <Group>
                        <Text style={{ marginTop: 16 }}>Rate session</Text>
                        <Slider style={{ width: 500, marginTop: 12 }} marks={[
                            { value: 1, label: 1 },
                            { value: 20, label: 2 },
                            { value: 30, label: 3 },
                            { value: 40, label: 4 },
                            { value: 50, label: 5 },
                            { value: 60, label: 6 },
                            { value: 70, label: 7 },
                            { value: 80, label: 8 },
                            { value: 90, label: 9 },
                            { value: 100, label: 10 },
                        ]} />
                    </Group>
                    <Group position="right">
                        <Button color="cyan" radius="md">
                            Send Feedback
                        </Button>
                    </Group>
                </Card>
            </div>


        </Group>
    );
};

export default ClientDetails;