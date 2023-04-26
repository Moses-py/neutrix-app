import Head from "next/head";

import dynamic from "next/dynamic";

const Dashboard = dynamic(
  () => import("@/features/neuclasspage/Dashboard/Dashboard")
);

const DashboardMain = dynamic(
  () => import("@/features/neuclasspage/Dashboard/DashboardMain")
);

const Profile = () => {
  return (
    <>
      <Head>
        <title>Neutrix | Profile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Dashboard>
        <DashboardMain component="Profile" />
      </Dashboard>
    </>
  );
};

export default Profile;