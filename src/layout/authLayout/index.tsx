import { ClerkProvider } from "@clerk/nextjs";
import { FC, PropsWithChildren } from "react";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default AuthLayout;
