import Image from "next/image";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

const StepperFour: React.FunctionComponent = () => {
  // Router
  const router = useRouter();
  const handleEndRecovery = () => {
    signOut();
    router.push("/login");
  };
  return (
    <>
      <div className="my-[3rem]">
        <h2 className="text-lg font-bold mb-4">All Done!</h2>
        <p className="text-gray-600 mb-6 w-full lg:w-1/3">
          See? That was easy. You can now access your account using your new
          credentials
        </p>

        <div className="my-5">
          <button
            onClick={handleEndRecovery}
            type="button"
            className="text-[#050708] bg-transparent border border-[#050708] hover:bg-gray-300 hover:border-gray-300 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
          >
            <span className="flex items-center gap-2">
              <span>Go to login</span>
              <Image
                src="/icons/arrow-right-1.svg"
                height={20}
                width={20}
                alt="arrow-right"
              />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default StepperFour;
