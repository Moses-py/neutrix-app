interface HeaderTextProps {
  children: React.ReactNode;
}

const Headertext: React.FunctionComponent<HeaderTextProps> = ({ children }) => {
  return (
    <>
      <h1 className="text-textLight leading-48 md:leading-64 p-0 m-0 text-fallback sm:text-[40px] md:text-xl lg:text-2xl font-bold font-primary">
        {children}
      </h1>
    </>
  );
};

export default Headertext;
