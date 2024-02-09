"use client";

import styles from "./page.module.css";
import React from "react";
import { Box, Button, Grid, Paper, Text, Title } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Box>
      <Grid className={styles.grid}>
        <Grid.Col span={{base: 12, lg: 6, md: 6, sm: 12}}>
          <Paper className={styles.paper} p="xl">
            <Text className={styles.textcomeco}>
              COMECE DIMINUINDO SUA INADIMPLÊNCIA
            </Text>
            <Title className={styles.title}>
              Pagamentos de Tributos Nunca foram tão Fáceis
            </Title>
            <Text className={styles.textmeio}>
              Ullamcorper sagittis semper donec ex iaculis sapien luctus morbi,
              ac orci aliquam duis etiam platea bibendum eu, id tristique quis
              augue urna class nisi. Adipiscing.
            </Text>
            <Button variant="filled" radius="xl" size="md">
              Fale conosco
            </Button>
            <Text className={styles.textfim}>
              Conheça nosso produto de pagamentos{" "}
              <Link href="" className={styles.linkTexto}>
                aqui
              </Link>
              .
            </Text>
          </Paper>
        </Grid.Col>
        <Grid.Col className={styles.imgContainer} span={{base: 12, lg: 6, md: 6, sm: 12}}>
          <Image className={styles.fadeIn} src="/img/cards.png" alt="cards" width={617} height={700} />
        </Grid.Col>
      </Grid>
    </Box>
  );
}
