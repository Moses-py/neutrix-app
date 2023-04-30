import Image from "next/image";
import { useRouter } from "next/router";

const Error404 = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="inline-flex rounded-full bg-red-100 p-4">
            <div className="rounded-full stroke-red-600 bg-red-200 p-4">
              <Image
                src="/icons/404.svg"
                height={200}
                width={200}
                alt="error icon"
              />
            </div>
          </div>
          <h1 className="mt-3 text-[36px] font-bold text-slate-800 lg:text-[50px]">
            404 - Resource not found
          </h1>
          <p className="text-slate-600 mt-5 lg:text-sm">
            Oops Looks like the page you are looking for cannot be found or no
            longer exists
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
export default Error404;
