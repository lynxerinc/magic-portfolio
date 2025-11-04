import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Column, Card, Icon, Grid, Tag } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter, services, social } from "@/app/resources/content";
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
      <Column fillWidth gap="l" paddingTop="l">
        <Flex fillWidth paddingX="l" paddingTop="xl" paddingBottom="m" direction="column" gap="m">
          <Tag variant="brand" size="s" label="Services" />
          <Heading as="h2" variant="display-strong-l" wrap="balance">
            Solutions digitales sur mesure
          </Heading>
          <Text variant="heading-default-l" onBackground="neutral-weak">
            {person.name} vous accompagne dans tous vos projets numériques
          </Text>
          <Flex gap="12" wrap="true" vertical="center">
            <Button
              id="contact-services"
              href={`mailto:${social.find(s => s.name === "Email")?.link.replace("mailto:", "")}`}
              prefixIcon="email"
              variant="primary"
              size="m"
            >
              {social.find(s => s.name === "Email")?.link.replace("mailto:", "")}
            </Button>
          </Flex>
        </Flex>
        <Grid columns="2" mobileColumns="1" gap="m" fillWidth paddingX="l">
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
                {category.items.slice(0, 2).map((item) => (
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
        <Flex fillWidth paddingX="l" horizontal="center" paddingTop="m">
          <Button
            id="services-page"
            href="/services"
            variant="secondary"
            size="m"
            arrowIcon
          >
            Découvrir tous les services
          </Button>
        </Flex>
      </Column>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
