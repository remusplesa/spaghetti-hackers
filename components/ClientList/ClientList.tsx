import { Group, Avatar, Text, Accordion, ThemeIcon } from '@mantine/core';
import { MessageCircle, MessageCircleOff } from 'tabler-icons-react';
import { ClientDetails } from '..';

const clientList = [
  {
    id: 'fdjnsdjf',
    name: 'George O',
    isOnTrack: 3,
    hasFeedback: true,
  },

  {
    id: 'fdjnsfsdf',
    name: 'Nadina S',
    isOnTrack: 1,
    hasFeedback: true,
  },
  {
    id: 'fdjnsgfdgd',
    name: 'Andrei P',
    isOnTrack: 2,
    hasFeedback: false,
  },
]

interface AccordionLabelProps {
    id: string,
    name: string;
    isOnTrack: number;
    hasFeedback: boolean;
}

function AccordionLabel({ id, name, isOnTrack, hasFeedback }: AccordionLabelProps) {
    function showOnTrackColor(isOnTrack: number) {
        switch(isOnTrack) {
            case 1: return 'red'; break;
            case 2: return 'yellow'; break;
            case 3: return 'green'; break;
        }
    };

    return (
        <Group noWrap position="apart">
            <Text>{name}</Text>
            <Group>
                <ThemeIcon radius="lg" size="lg" color={showOnTrackColor(isOnTrack)}>
                </ThemeIcon>
                  {hasFeedback ?
                      <ThemeIcon  size="lg" radius="lg" color="indigo">
                          <MessageCircle/>
                      </ThemeIcon>
                      : 
                      <ThemeIcon size="lg" radius="lg" color="indigo" variant="light">
                          <MessageCircleOff/>
                      </ThemeIcon>
                  }
            </Group>
        </Group>
    );
}

function ClientList() {
    const items = clientList.map((client) => (
      <Accordion.Item label={<AccordionLabel {...client} />} key={client.id}>
        <ClientDetails/>
      </Accordion.Item>
    ));
  
    return (
      <Accordion initialItem={-1} iconPosition="right" >
        {items}
      </Accordion>
    );
  }

export default ClientList;