interface ButtonProps {
  type: string;
  children: React.ReactNode;
}
const Button: React.FunctionComponent<ButtonProps> = ({ type, children }) => {
  return (
    <>
      {type === "filled" && (
        <button className="bg-primary text-textDark rounded-full px-12 py-2 text-xs hover:scale-105">
          {children}
        </button>
      )}
      {type === "outlined" && (
        <button className="border border-primary text-textLight rounded-full px-12 py-2 text-xs  hover:scale-105">
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
