type VariableProps = {
  emphasize?: boolean;
  wrap?: boolean;
  children?: React.ReactNode;
};


const Variable: React.FC<VariableProps> = ({children = null, emphasize, wrap}) => (
  <><wbr /><span className={`${emphasize ? 'font-bold' : ''} ${wrap ? '' : 'whitespace-nowrap'}`}>{children}</span><wbr /></>
);

export default Variable
