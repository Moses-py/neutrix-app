import Image from "next/image";

interface BackgroundImageSelectorProps {
  background: string;
}

const BackgroundImageSelector: React.FunctionComponent<
  BackgroundImageSelectorProps
> = ({ background }) => {
  return (
    <>
      <Image
        height={40}
        width={40}
        src={`/backgrounds/${background}.webp`}
        alt="image"
        className="rounded-full cursor-pointer object-cover"
      />
    </>
  );
};
export default BackgroundImageSelector;
