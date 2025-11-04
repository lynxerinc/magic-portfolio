import {
  Button,
  Card,
  Column,
  Flex,
  Grid,
  Heading,
  Icon,
  Tag,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person, services } from "@/app/resources/content";

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

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: services.title,
    description: services.description,
    url: `https://${baseURL}/services`,
    provider: {
      "@type": "Person",
      name: person.name,
      jobTitle: person.role,
    },
    areaServed: ["France", "Europe"],
    serviceType: services.categories.map((category) => category.title),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: services.categoriesTitle,
      itemListElement: services.categories.map((category) => ({
        "@type": "Offer",
        description: "Tarification sur devis.",
        itemOffered: {
          "@type": "Service",
          name: category.title,
          description: category.description,
        },
        availability: "https://schema.org/InStock",
      })),
    },
  };

  return (
    <Column maxWidth="m" gap="xl">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Column fillWidth paddingX="l" paddingY="xl" gap="m">
        <Tag variant="brand" size="s" label={services.hero.eyebrow} />
        <Heading wrap="balance" variant="display-strong-l">
          {services.hero.title}
        </Heading>
        <Text wrap="balance" variant="heading-default-l" onBackground="neutral-weak">
          {services.hero.description}
        </Text>
        <Flex
          background="brand-alpha-weak"
          border="brand-alpha-medium"
          radius="l"
          padding="16"
          gap="8"
          vertical="center"
          mobileDirection="column"
        >
          <Icon name="infoCircle" size="m" onBackground="brand-strong" />
          <Text variant="body-default-m" onBackground="brand-strong">
            {services.note}
          </Text>
        </Flex>
        {services.hero.cta?.href && (
          <Button
            id="services-hero-cta"
            href={services.hero.cta.href}
            prefixIcon="email"
            variant="primary"
            size="m"
            arrowIcon
          >
            {services.hero.cta.label}
          </Button>
        )}
      </Column>
      <Column fillWidth paddingX="l" gap="l">
        <Heading as="h2" variant="display-strong-s">
          {services.categoriesTitle}
        </Heading>
        <Grid columns="3" tabletColumns="2" mobileColumns="1" gap="m" fillWidth>
          {services.categories.map((category) => (
            <Card
              key={category.title}
              direction="column"
              gap="m"
              padding="24"
              fill
            >
              <Heading as="h3" variant="heading-strong-m">
                {category.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {category.description}
              </Text>
              <Column as="ul" gap="8" paddingLeft="0">
                {category.items.map((item) => (
                  <Flex key={item} as="li" gap="8" vertical="center">
                    <Icon name="check" size="s" onBackground="brand-strong" />
                    <Text as="span" variant="body-default-s" onBackground="neutral-weak">
                      {item}
                    </Text>
                  </Flex>
                ))}
              </Column>
            </Card>
          ))}
        </Grid>
      </Column>
      <Column fillWidth paddingX="l" gap="l">
        <Heading as="h2" variant="display-strong-s">
          {services.process.title}
        </Heading>
        <Grid columns="3" tabletColumns="2" mobileColumns="1" gap="m" fillWidth>
          {services.process.steps.map((step, index) => (
            <Card
              key={step.title}
              direction="column"
              gap="m"
              padding="24"
              fill
            >
              <Tag variant="brand" size="s" label={`Étape ${index + 1}`} />
              <Heading as="h3" variant="heading-strong-s">
                {step.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {step.description}
              </Text>
            </Card>
          ))}
        </Grid>
      </Column>
      <Column fillWidth paddingX="l" paddingBottom="xl">
        <Column
          background="brand-alpha-weak"
          border="brand-alpha-medium"
          radius="l"
          padding="24"
          gap="m"
        >
          <Heading as="h2" variant="display-strong-s">
            {services.contact.title}
          </Heading>
          <Text variant="body-default-m" onBackground="brand-strong">
            {services.contact.description}
          </Text>
          {services.contact.action?.href && (
            <Button
              id="services-contact-cta"
              href={services.contact.action.href}
              prefixIcon="calendar"
              variant="secondary"
              size="m"
              arrowIcon
            >
              {services.contact.action.label}
            </Button>
          )}
        </Column>
      </Column>
    </Column>
  );
}
