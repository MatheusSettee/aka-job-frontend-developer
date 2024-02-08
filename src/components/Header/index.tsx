import { Box, Button, Group, SimpleGrid } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <SimpleGrid className={styles.header} cols={3} spacing="md">
      <Box>
        <Link href="/">
          <Image
            src="/img/akapay.svg"
            alt="logo"
            className={styles.logo}
            width={100}
            height={100}
          />
        </Link>
      </Box>
      <Group className={styles.header} gap={120}>
        <Link className={styles.linkCabecalho} href="/sobre">
          Sobre
        </Link>
        <Link className={styles.linkCabecalho} href="/preco">
          Preço
        </Link>
        <Link className={styles.linkCabecalho} href="/produto">
          Produto
        </Link>
      </Group>
      <aside className={styles.buttonContainer}>
        <Button className={styles.button} variant="outline" size="md">
          Entre
        </Button>
      </aside>
    </SimpleGrid>
  );
};
