import AddIcon from "@mui/icons-material/Add";
import dynamic from "next/dynamic";

const SingleBankCard = dynamic(() => import("./SingleBankCard"));

const BankCard: React.FunctionComponent = () => {
  return (
    <>
      <div className="header pb-[2rem] flex justify-between items-center">
        <h1 className="text-d_main uppercase text-sm font-bold font-secondary">
          My Cards
        </h1>
        <button
          type="button"
          className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
        >
          <AddIcon />
          Add new card
        </button>
      </div>
      <div className="flex gap-6 flex-wrap">
        <SingleBankCard />
        <SingleBankCard />
      </div>
    </>
  );
};

export default BankCard;
