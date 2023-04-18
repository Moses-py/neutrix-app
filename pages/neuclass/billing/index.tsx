import Head from "next/head";
import dynamic from "next/dynamic";

const Dashboard = dynamic(
  () => import("@/features/neuclasspage/Dashboard/Dashboard")
);

const DashboardMain = dynamic(
  () => import("@/features/neuclasspage/Dashboard/DashboardMain")
);

const Billing = () => {
  return (
    <>
      <Head>
        <title>Neutrix | Billing</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Dashboard>
        <DashboardMain component="Billing" />
      </Dashboard>
    </>
  );
};

export default Billing;
