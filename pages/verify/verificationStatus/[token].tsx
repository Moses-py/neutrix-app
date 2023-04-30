import mongoConnect from "@/lib/mongo_connect";
import { ObjectId } from "mongodb";
import Link from "next/link";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import AlertFeedback from "@/components/alerts/Success";
import { BeatLoader } from "react-spinners";
import { useRouter } from "next/router";

const Verify = ({ email, username }) => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  async function resendLink() {
    setIsLoading(true);
    await axios({
      method: "POST",
      url: "/api/verification/resendEmail",
      data: { email, username },
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        setMessage(res.data.message);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err instanceof AxiosError) {
          router.push("/error-500");
        }
      });
  }

  return (
    <>
      <div className="wrapper w-full h-full font-secondary p-5">
        <div className="container lg:w-[50%]">
          {message && (
            <AlertFeedback
              open={true}
              setOpen={() => setMessage("")}
              message={message}
              status="success"
            />
          )}
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
            <h1 className="lg:text-2xl md:text-xl text-lg">
              Verify your email to finish signing up to Neutrix
            </h1>
            <p className="my-[2rem]">
              Thank you for choosing to join Neutrix. We bid you a pleasant
              journey with us.
            </p>
            <p className="leading-32">
              A link has been sent to the e-mail address{" "}
              <span className="text-green font-bold">{email}</span> you provided
              to us, please visit that link within the next 48 hours to verify
              your account and use our services.
            </p>
          </div>

          <div className="mt-8">
            <button
              type="button"
              disabled={isLoading}
              onClick={resendLink}
              className={`w-full py-4 px-6 bg-green rounded-md text-xs text-white ${
                isLoading && "cursor-not-allowed"
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <BeatLoader size={10} color="#fff" />
                </div>
              ) : (
                <span>Did not recieve a link? Resend</span>
              )}
            </button>
          </div>

          <div className="contact my-[3rem] md:w-[50%] mx-auto leading-32">
            <p className="text-center">
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

export async function getServerSideProps(context: { params: { token: any } }) {
  const id = context.params.token;

  const { db, client } = await mongoConnect();
  if (!db) throw new Error("Error encountered");
  const verified_user = await db
    .collection("users")
    .findOne({ _id: new ObjectId(id) });

  if (verified_user.isVerified) {
    return {
      notFound: true,
    };
  }

  client.close();
  return {
    props: {
      email: verified_user.email,
      username: `${verified_user.first_name} ${verified_user.last_name}`,
    },
  };
}

export default Verify;
