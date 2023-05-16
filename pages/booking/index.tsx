import Calendly from "@/components/calendly/Calendly";
import { MainContext } from "@/context/Main";
import mongoConnect from "@/lib/mongo_connect";
import { authenticateUser } from "@/utils/auth/authenticateUser";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { useContext } from "react";

const CalendlyWindow = ({ user }) => {
  const { email } = user;
  const { storedCourseId } = useContext(MainContext);
  return (
    <>
      <Calendly user={email} courseID={storedCourseId} />
    </>
  );
};

export async function getServerSideProps(ctx: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  const session = await authenticateUser(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const token = await getToken({
    req: ctx.req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { db, client } = await mongoConnect();
  if (!db) throw new Error("Invalid connection");

  const found_user = await db
    .collection("users")
    .findOne({ email: token.email });

  if (!found_user) throw new Error("Request resource not found");

  const { email, first_name, last_name } = found_user;

  const updated_resource = {
    email,
    first_name,
    last_name,
  };

  client.close();

  return {
    props: {
      user: updated_resource,
    },
  };
}

export default CalendlyWindow;
