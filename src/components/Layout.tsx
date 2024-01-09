import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <section className="w-screen h-screen flex flex-col overflow-auto text-gray-800 bg-white">
      {children}
    </section>
  );
};

export default Layout;
