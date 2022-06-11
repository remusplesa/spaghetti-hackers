import { useRouter } from "next/router";
import { Container, Title, Text, Space, Button, Group } from "@mantine/core";

const Banner = ({ height, imageSrc, title, text, cta }: BannerProps) => {
  const router = useRouter();

  return (
    <Container
      fluid
      p={32}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundPosition: "center",
        minHeight: height || 300,
      }}
    >
      <Title align="left">{title}</Title>
      <Space h="lg" />
      {text && (
        <Text style={{ maxWidth: "50%" }} lineClamp={8}>
          {text}
        </Text>
      )}
      <Space h="xl" />
      {cta && (
        <Group position="right">
          <Button
            size="lg"
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
            onClick={() => router.push(cta.url)}
          >
            {cta.text}
          </Button>
        </Group>
      )}
    </Container>
  );
};

type BannerProps = {
  imageSrc?: string;
  title: string;
  text?: string;
  cta?: {
    text: string;
    url: string;
  };
  height?: number
};

export default Banner;
