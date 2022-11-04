import { createContext, FunctionComponent, ReactNode, useEffect, useState } from 'react';
import { z } from "zod";
import jwtDecode from 'jwt-decode';

const UserCredsObject = z.object({
  user_id: z.number({ required_error: "User id should be an integer" }),
  username: z.string({ required_error: "Username should be a string" }),
  names: z.string({ required_error: "Names should be a string" }),
  last_names: z.string({ required_error: "Last names should be a string" })
});

type UserCreds = z.infer<typeof UserCredsObject>

const base_user: UserCreds = {
  user_id: 0,
  username: "",
  names: "",
  last_names: ""
}

interface UserContext {
  token: string,
  user: UserCreds,
  setToken: (_: string) => void
}

export const UserContext = createContext<UserContext>({
  token: "",
  user: base_user,
  setToken: (_: string) => { }
});

const UserProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState<UserCreds>(base_user);

  useEffect(() => {
    if (token) {
      const stringValidation = z.string().safeParse(token);
      if (stringValidation.success) {
        try {
          const user_creds = jwtDecode<UserCreds>(token);

          try {
            UserCredsObject.parse(user_creds);
          } catch (error) {
            console.error(error);
            setUser(base_user);
            setToken("");
            return;
          }

          setUser(user_creds);
          setToken(token);
        } catch (error) {
          console.error(error);
          return;
        }
      } else {
        console.error(stringValidation.error);
      }
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ token, user, setToken }}>
      {children}
    </UserContext.Provider>
  )
};

export default UserProvider;
