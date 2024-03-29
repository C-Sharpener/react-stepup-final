import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";

import { User } from "../types/api/user";

type LoginUser = User & { isAdmin: boolean };

// type LoginUserContextType = {
export type LoginUserContextType = {
  // loginUser: User | null;
  // loginUser: (User & { isAdmin: boolean }) | null;
  loginUser: LoginUser | null;
  // setLoginUser: Dispatch<SetStateAction<User | null>>;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  // const [loginUser, setLoginUser] = useState<User | null>(null);
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
