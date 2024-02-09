"use client";

import styles from "./page.module.css";
import React from "react";
import { Box, Text, Title } from "@mantine/core";

export default function AboutUs() {
  return (
    <Box>
      <Title className={styles.title}>Quem somos nós?</Title>
      <Text className={styles.text}>
        AkaPay é uma plataforma de pagamentos online projetada para simplificar
        e agilizar as transações financeiras na internet. Com uma abordagem
        centrada no usuário, a AkaPay oferece uma experiência de pagamento
        segura, rápida e conveniente para consumidores e empresas. Com uma
        variedade de recursos e soluções personalizadas, a AkaPay capacita os
        usuários a efetuarem pagamentos de forma transparente e eficiente, seja
        para compras online, assinaturas de serviços, transferências entre
        contas ou qualquer outra transação financeira. Com um compromisso com a
        segurança e a confiabilidade, a AkaPay está transformando a maneira como
        as pessoas lidam com o dinheiro online, proporcionando tranquilidade e
        praticidade em cada transação.
      </Text>
    </Box>
  );
}
