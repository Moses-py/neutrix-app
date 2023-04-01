import Dashboard from "@/features/neuclasspage/Dashboard/Dashboard";
import Head from "next/head";

export default function Neuclass() {
  return (
    <>
      <Head>
        <title>Neutrix</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Dashboard />
    </>
  );
}
