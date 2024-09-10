import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Heading = ({ children }: Props) => {
  return <div className="site-name">{children}</div>;
};

export default Heading;
