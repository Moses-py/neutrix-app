import Dashboard from "@/features/neuclasspage/Dashboard/Dashboard";
import DashboardMain from "@/features/neuclasspage/Dashboard/DashboardMain";
import Head from "next/head";

const MyCourses = () => {
  return (
    <>
      <Head>
        <title>Neutrix | My Courses</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Dashboard>
        <DashboardMain component="My courses" />
      </Dashboard>
    </>
  );
};

export default MyCourses;
