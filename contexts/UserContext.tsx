import { createContext, FunctionComponent, ReactNode, useState } from 'react';
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
  changeUser: (_: string) => void
}

export const UserContext = createContext<UserContext>({
  token: "",
  user: base_user,
  changeUser: (_: string) => { }
});

const UserProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState<UserCreds>(base_user);

  const changeUser = (token: string) => {
    const user_creds: UserCreds = jwtDecode(token);

    try {
      UserCredsObject.parse(user_creds);
    } catch(error) {
      setUser(base_user);
      setToken("");
      return;
    }
    
    setUser(user_creds);
    setToken(token);
    console.log("NEW CONTEXT:", token, user);
    return;
  }

  return (
    <UserContext.Provider value={{ token, user, changeUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;
