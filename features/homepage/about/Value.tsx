import dynamic from "next/dynamic";

const Subheading = dynamic(() => import("@/components/typography/Subheading"));

interface ValueCardProps {
  title: string;
  children: React.ReactNode;
}

const ValueCard: React.FunctionComponent<ValueCardProps> = ({
  title,
  children,
}) => {
  return (
    <>
      <div className="">
        <div className="title my-4">
          <Subheading>{title}</Subheading>
        </div>
        <div className="content my-4 text-slate">{children}</div>
      </div>
    </>
  );
};

export default ValueCard;
