"use client";

import styles from "./page.module.css";
import React from "react";
import {
  Badge,
  Box,
  Button,
  Card,
  Group,
  SimpleGrid,
  Text,
} from "@mantine/core";
import Image from "next/image";

export default function Price() {
  return (
    <Box>
      <SimpleGrid className={styles.grid} cols={{ base: 1, sm: 2 }}>
        <Card
          className={styles.card}
          shadow="sm"
          padding="md"
          radius="md"
          withBorder
        >
          <Card.Section component="a" href="https://mantine.dev/">
            <Image
              src="/img/akapay.svg"
              height={160}
              alt="Norway"
              width={200}
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Norway Fjord Adventures</Text>
            <Badge color="pink">On Sale</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            NorwayWith Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            NorwayWith Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section component="a" href="https://mantine.dev/">
            <Image
              src="/img/akapay.svg"
              height={160}
              alt="Norway"
              width={200}
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Norway Fjord Adventures</Text>
            <Badge color="pink">On Sale</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            NorwayWith Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            NorwayWith Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            NorwayWith Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section component="a" href="https://mantine.dev/">
            <Image
              src="/img/akapay.svg"
              height={160}
              alt="Norway"
              width={200}
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Norway Fjord Adventures</Text>
            <Badge color="pink">On Sale</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            NorwayWith Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            NorwayWith Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
      </SimpleGrid>
    </Box>
  );
}
