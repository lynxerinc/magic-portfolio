import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Column, Grid, Card, Icon, Tag } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter, services } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
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

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="s">
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4} horizontal="start">
            <Button
              id="about"
              data-border="rounded"
              href="/about"
              variant="secondary"
              size="m"
              arrowIcon
            >
              <Flex gap="8" vertical="center">
                {about.avatar.display && (
                  <Avatar
                    style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <Column fillWidth gap="xl" paddingTop="xl" paddingBottom="xl">
        <Column
          fillWidth
          background="brand-alpha-weak"
          border="brand-alpha-medium"
          radius="l"
          padding="32"
          gap="l"
        >
          <Column gap="m" maxWidth="l">
            <Tag variant="brand" size="l" label="Services disponibles" />
            <Heading as="h2" variant="display-strong-l" wrap="balance">
              Besoin d'un développeur pour votre projet ?
            </Heading>
            <Text variant="heading-default-l" onBackground="brand-strong">
              Je développe des solutions web sur mesure, automatise vos processus et vous accompagne dans votre transformation digitale. Disponible dès maintenant pour vos projets.
            </Text>
          </Column>
          <Flex gap="16" vertical="center" wrap mobileDirection="column" fillWidth>
            <Flex gap="12" vertical="center" wrap>
              <Icon name="person" size="l" onBackground="brand-strong" />
              <Column gap="4">
                <Text variant="heading-strong-m" onBackground="brand-strong">
                  {person.name}
                </Text>
                <Text variant="body-default-m" onBackground="brand-medium">
                  Développeur Full-Stack & Entrepreneur
                </Text>
              </Column>
            </Flex>
            <Flex gap="12" vertical="center" wrap>
              <Icon name="email" size="l" onBackground="brand-strong" />
              <Column gap="4">
                <Text variant="heading-strong-m" onBackground="brand-strong">
                  lochegaylor@icloud.com
                </Text>
                <Text variant="body-default-m" onBackground="brand-medium">
                  Réponse sous 24h - Devis gratuit
                </Text>
              </Column>
            </Flex>
          </Flex>
          <Flex gap="12" wrap>
            <Button
              id="request-quote"
              href="mailto:lochegaylor@icloud.com?subject=Demande de devis"
              prefixIcon="email"
              variant="primary"
              size="l"
              arrowIcon
            >
              Demander un devis gratuit
            </Button>
            <Button
              id="view-services-detail"
              href="/services"
              variant="secondary"
              size="l"
              arrowIcon
            >
              Découvrir tous les services
            </Button>
          </Flex>
        </Column>
        <Column gap="l" fillWidth>
          <Heading as="h3" variant="display-strong-s" paddingX="l">
            🎯 Services proposés
          </Heading>
          <Grid columns="2" tabletColumns="1" mobileColumns="1" gap="m" fillWidth paddingX="l">
            {services.categories.slice(0, 4).map((category) => (
              <Card
                key={category.title}
                direction="column"
                gap="m"
                padding="24"
                fill
                border="brand-alpha-medium"
              >
                <Heading as="h4" variant="heading-strong-l">
                  {category.title}
                </Heading>
                <Text variant="body-default-l" onBackground="neutral-weak">
                  {category.description}
                </Text>
                <Column as="ul" gap="12" paddingLeft="0">
                  {category.items.map((item) => (
                    <Flex key={item} as="li" gap="12" vertical="start">
                      <Icon name="check" size="m" onBackground="brand-strong" />
                      <Text as="span" variant="body-default-m" onBackground="neutral-medium">
                        {item}
                      </Text>
                    </Flex>
                  ))}
                </Column>
              </Card>
            ))}
          </Grid>
        </Column>
        <Column
          fillWidth
          background="surface"
          border="neutral-medium"
          radius="l"
          padding="24"
          gap="m"
          horizontal="center"
        >
          <Heading as="h3" variant="heading-strong-l" align="center">
            💼 Prêt à démarrer votre projet ?
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center" maxWidth="m">
            Contactez-moi dès maintenant pour discuter de vos besoins. Je vous propose un devis personnalisé et adapté à votre budget.
          </Text>
          <Button
            id="contact-cta"
            href="mailto:lochegaylor@icloud.com?subject=Nouveau projet"
            prefixIcon="calendar"
            variant="primary"
            size="l"
            arrowIcon
          >
            Réserver un appel découverte
          </Button>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}
      <Projects range={[2]} />
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
