import {
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person, services, social } from "@/app/resources/content";

export async function generateMetadata() {
  const title = services.title;
  const description = services.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/services`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Services() {
  const contactEmail = social.find((item) => item.name === "Email")?.link || "mailto:example@example.com";

  return (
    <Column maxWidth="m" fillWidth>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Professional Development Services",
            provider: {
              "@type": "Person",
              name: person.name,
              jobTitle: person.role,
            },
            areaServed: "Worldwide",
            description: services.description,
          }),
        }}
      />

      <Flex
        fillWidth
        minHeight="160"
        vertical="center"
        marginBottom="xl"
        paddingY="l"
        gap="m"
      >
        <Heading variant="display-strong-xl" align="center">
          {services.headline}
        </Heading>
        <Text
          variant="display-default-xs"
          onBackground="neutral-weak"
          align="center"
          maxWidth="32"
        >
          {services.subline}
        </Text>
      </Flex>

      <Column fillWidth gap="xl" marginBottom="40">
        {services.categories.map((category, index) => (
          <Column
            key={`${category.title}-${index}`}
            fillWidth
            padding="24"
            border="neutral-medium"
            radius="l"
            background="surface"
          >
            <Flex fillWidth gap="12" marginBottom="m" vertical="center">
              <Icon
                name={category.icon}
                onBackground="brand-weak"
                size="l"
              />
              <Heading as="h2" variant="heading-strong-xl">
                {category.title}
              </Heading>
            </Flex>

            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              marginBottom="l"
            >
              {category.description}
            </Text>

            <Column as="ul" gap="12" paddingLeft="20">
              {category.services.map((service, serviceIndex) => (
                <Flex
                  key={`${category.title}-service-${serviceIndex}`}
                  as="li"
                  gap="8"
                  vertical="start"
                >
                  <Icon
                    name="check"
                    onBackground="accent-weak"
                    size="xs"
                    style={{ marginTop: "4px" }}
                  />
                  <Text variant="body-default-m">{service}</Text>
                </Flex>
              ))}
            </Column>

            <Flex
              fillWidth
              marginTop="l"
              paddingTop="m"
              border="neutral-alpha-weak"
              style={{ borderTop: "1px solid var(--neutral-alpha-weak)" }}
            >
              <Text
                variant="body-default-s"
                onBackground="brand-weak"
                style={{ fontWeight: 500 }}
              >
                Prix sur devis personnalisé
              </Text>
            </Flex>
          </Column>
        ))}
      </Column>

      <Column
        fillWidth
        padding="32"
        border="brand-medium"
        radius="l"
        background="brand-alpha-weak"
        marginBottom="xl"
        gap="l"
        horizontal="center"
      >
        <Heading as="h2" variant="heading-strong-xl" align="center">
          {services.cta.title}
        </Heading>
        <Text
          variant="body-default-l"
          onBackground="neutral-weak"
          align="center"
          maxWidth="24"
        >
          {services.cta.description}
        </Text>
        <Button
          href={contactEmail}
          size="l"
          variant="primary"
          prefixIcon="email"
        >
          {services.cta.buttonText}
        </Button>
      </Column>
    </Column>
  );
}
