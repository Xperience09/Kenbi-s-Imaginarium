interface Props {
  children: string;
}

const Heading = ({ children }: Props) => {
  return <div className="site-name">{children}</div>;
};

export default Heading;
