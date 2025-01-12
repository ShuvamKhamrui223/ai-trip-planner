import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return <div className="px-5 md:px-[4%] mx-auto">{children}</div>;
};

export default Container;
