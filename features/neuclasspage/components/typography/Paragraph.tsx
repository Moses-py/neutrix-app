interface ParagraphProps {
  children: React.ReactNode;
}

const Paragraph: React.FunctionComponent<ParagraphProps> = ({ children }) => {
  return (
    <>
      <p className="text-d_main leading-32 opacity-100">{children}</p>
    </>
  );
};
