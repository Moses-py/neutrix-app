interface SubheaderProps {
  children: React.ReactNode;
}

const Subheader: React.FunctionComponent<SubheaderProps> = ({ children }) => {
  return (
    <>
      <h2 className="text-d_main leading-32 uppercase opacity-60 font-bold my-3">
        {children}
      </h2>
    </>
  );
};

export default Subheader;
