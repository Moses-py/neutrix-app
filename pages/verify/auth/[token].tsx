import mongoConnect from "@/lib/mongo_connect";
import Link from "next/link";

const VerifyEmailAddress = ({ email }) => {
  return (
    <>
      <div className="wrapper w-full h-full font-secondary p-5">
        <div className="container lg:w-[50%]">
          {/* Logo */}
          <div className="flex justify-between p-3 items-center">
            <h1 className="text-lg font-bold">Neutrix</h1>
            <p>
              <Link href="/login" className="text-green ">
                Login to neutrix
              </Link>
            </p>
          </div>
          <hr />
          {/* text */}
          <div className="info_text my-[2rem]">
            <h1 className="lg:text-2xl md:text-xl text-lg">Congratulations!</h1>
            <p className="my-[2rem]">
              Your E-mail account{" "}
              <span className="text-green font-bold">{email}</span> has been
              successfully verified!
            </p>
            <p className="my-[2rem]">
              Please visit your login page to get started!
            </p>
          </div>
          <div className="button divide-y">
            <button className="py-4 px-6 bg-green rounded-md text-xs text-white">
              <Link href="/login" className="text-white ">
                Login to Neutrix
              </Link>
            </button>
          </div>

          <div className="contact my-[3rem] md:w-[50%] leading-32">
            <p className="">
              Feel free to contact us should you have any issues on{" "}
              <a className="text-green">info@brandname.com</a>. We are always
              happy to help.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const { db, client } = await mongoConnect();
  const idList = await db
    .collection("users")
    .find()
    .project({ email_token: 1, _id: 0 })
    .toArray();

  const dynamicId = idList.map((id) => {
    return {
      params: {
        token: id.email_token,
      },
    };
  });

  client.close();

  return {
    paths: dynamicId,
    fallback: false,
  };
}

export async function getStaticProps(context: { params: { token: any } }) {
  const id = context.params.token;

  const { db, client } = await mongoConnect();
  if (!db) throw new Error("Error encountered");
  const verified_user = await db
    .collection("users")
    .findOne({ email_token: id });

  if (verified_user.isVerified || !verified_user) {
    return {
      notFound: true,
    };
  }

  await db
    .collection("users")
    .findOneAndUpdate(
      { email: verified_user.email },
      { $set: { isVerified: true } }
    );

  client.close();
  return {
    props: {
      email: verified_user.email,
    },
  };
}
export default VerifyEmailAddress;
