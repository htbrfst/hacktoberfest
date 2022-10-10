import Head from "next/head";
import Image from "next/image";
import { Checkbox, Container, Title } from "@mantine/core";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Checklist</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container pt={50}>
        <Title>Checklist</Title>
        <div>
          <Checkbox color="pink" pt={30} label="Fuel airplane" />
          <Checkbox color="pink" pt={8} label="Do walkaround" />
          <Checkbox color="pink" pt={8} label="Pull flihgt tags" />
          <Checkbox color="pink" pt={8} label="Power on GPU" />
          <Checkbox color="pink" pt={8} label="Power on APU" />
          <Checkbox color="pink" pt={8} label="Power on plane" />
          <Checkbox color="pink" pt={8} label="Fly!" />
        </div>
      </Container>
    </div>
  );
}
