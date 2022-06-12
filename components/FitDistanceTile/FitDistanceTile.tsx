import { Card, Center, Container, Group, Image, Text, Title } from "@mantine/core";

type TileProps = {
    distance: string;
    unit: string;
};

export const FitDistanceTile = ({ distance, unit }: TileProps) => {
    return (
        <div>
            <Card shadow="sm" p="lg">
                <Card.Section>
                    <Title order={4}>Distance: </Title>
                    <Text>{distance} {unit}</Text>
                </Card.Section>
            </Card>
        </div>
    );
};

