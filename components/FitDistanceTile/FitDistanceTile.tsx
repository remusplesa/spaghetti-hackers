import { Card, Center, Container, Group, Image, Title } from "@mantine/core";

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
                    <Title order={6}>{distance} {unit}</Title>
                </Card.Section>
            </Card>
        </div>
    );
};

