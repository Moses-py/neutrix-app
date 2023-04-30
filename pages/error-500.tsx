import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Error500 = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex h-[calc(100vh-80px)] items-center justify-center py-5 px-6 w-full bg-white font-secondary">
        <div className="text-center">
          <div className="inline-flex rounded-full bg-red-100 p-4">
            <div className="rounded-full stroke-red-600 bg-red-200 p-4">
              <Image
                src="/icons/error.webp"
                height={100}
                width={100}
                alt="error icon"
              />
            </div>
          </div>
          <h1 className="mt-3 text-[36px] font-bold text-slate-800 lg:text-[50px]">
            500 - Server error
          </h1>
          <p className="text-slate-600 mt-5 lg:text-sm">
            Oops something an error occured on our end and we are working hard
            to fix it. Please <br /> try again or check back later.
          </p>

          <div className="my-[2rem]">
            <button
              className="bg-black rounded-md py-2 px-8 text-white"
              onClick={() => router.back()}
            >
              Go back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error500;
