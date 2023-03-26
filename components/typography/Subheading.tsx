interface SubheadingProps {
  children: React.ReactNode;
}

const Subheading: React.FunctionComponent<SubheadingProps> = ({ children }) => {
  return (
    <>
      <h1 className="text-textLight leading-32 p-0 m-0 text-lg font-light font-primary">
        {children}
      </h1>
    </>
  );
};

export default Subheading;
