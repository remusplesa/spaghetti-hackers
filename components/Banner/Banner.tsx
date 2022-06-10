import { Center, Container, Title } from "@mantine/core";

export const Banner = ({imageSrc, title, text}: BannerProps) => {
  return (
    <Container fluid p={32} style={{backgroundImage: 'url(' + imageSrc + ')'}}>
      <Center>
        <Title>{title}</Title>
      </Center>
    </Container>
  );
};

type BannerProps = {
  imageSrc: string;
  title: string;
  text?: string;
};
