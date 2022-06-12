import { Card, Group, Title, Text } from "@mantine/core";
import { useEffect } from "react";
import { Package } from "../../types/Package";
import { supabase } from "../../utils/supabase";

// type TileProps = {
//     distance: string;
//     unit: string;
// };

export const PackagePicker = () => {
    // export const PackagePicker = (props: Package) => {
    let coachName = ''

    useEffect(() => {
        // getCoachNameById()
    }, [])

    const getCoachNameById = async () => {
        // const coachId = props.coach_id
        // const { data, error } = await supabase
        //     .from('coach_profile')
        //     .select(`
        //         profile_id: profile (
        //             username
        //         )
        // `)
        // console.log("🛫", data)
        // return data
    }

    return (
        // <div>
        //     <Card shadow="sm" p="lg">
        //         <Card.Section>
        //             <div>
        //                 <Title order={4}>Target Distance: </Title>
        //                 <Title order={6}>{props.target_distance} km</Title>
        //             </div>
        //             <div>
        //                 <Title order={4}>Location: </Title>
        //                 <Title order={6}>{props.location}</Title>
        //             </div>
        //             <div>
        //                 <Title order={4}>Target Distance: </Title>
        //                 <Title order={6}>{coachName}</Title>
        //             </div>
        //         </Card.Section>
        //     </Card>
        // </div>
        <div style={{ width: 280, margin: 'auto' }}>
            <Card shadow="sm" p="lg" style={{ height: 280 }}>

                <Group style={{ marginBottom: 10, marginTop: 2, marginLeft: 2 }}>
                    <Text color="cyan" style={{ fontSize: 25, fontWeight: 100 }}>Package</Text>
                </Group>

                <Text style={{ fontSize: 15 }}>
                    lorem ipsum
                </Text>
            </Card>
        </div>
    );
};

