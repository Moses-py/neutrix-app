interface ParagraphTextProps {
  children: React.ReactNode;
}

const ParagraphText: React.FunctionComponent<ParagraphTextProps> = ({
  children,
}) => {
  return (
    <>
      <p className="text-slate leading-24 text-sm p-0 m-0 font-secondary font-light">
        {children}
      </p>
    </>
  );
};

export default ParagraphText;
