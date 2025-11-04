import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Column, Card, Icon, Grid, Tag } from "@/once-ui/components";
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
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>

      {/* Section Services */}
      <Column fillWidth gap="l" paddingTop="xl">
        <Flex fillWidth gap="24" mobileDirection="column" paddingX="l">
          <Flex flex={1}>
            <Column gap="m">
              <Tag variant="brand" size="s" label={services.hero.eyebrow} />
              <Heading as="h2" variant="display-strong-s" wrap="balance">
                {services.categoriesTitle}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {services.description}
              </Text>
              <Button
                id="services-cta"
                href="/services"
                variant="primary"
                size="m"
                arrowIcon
              >
                Découvrir tous les services
              </Button>
            </Column>
          </Flex>
          <Flex flex={2}>
            <Grid columns="2" mobileColumns="1" gap="m" fillWidth>
              {services.categories.slice(0, 4).map((category) => (
                <Card
                  key={category.title}
                  direction="column"
                  gap="m"
                  padding="20"
                  fill
                >
                  <Heading as="h3" variant="heading-strong-s">
                    {category.title}
                  </Heading>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {category.description}
                  </Text>
                  <Column as="ul" gap="4" paddingLeft="0">
                    {category.items.slice(0, 2).map((item) => (
                      <Flex key={item} as="li" gap="8" vertical="center">
                        <Icon name="check" size="xs" onBackground="brand-strong" />
                        <Text as="span" variant="body-default-xs" onBackground="neutral-weak">
                          {item}
                        </Text>
                      </Flex>
                    ))}
                  </Column>
                </Card>
              ))}
            </Grid>
          </Flex>
        </Flex>
      </Column>

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
