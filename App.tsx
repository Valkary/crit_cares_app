import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ServerProvider from "./contexts/ServerContext";
import UserProvider from "./contexts/UserContext";

const queryClient = new QueryClient();

import LoginScreen from "./components/pages/LoginScreen";

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <QueryClientProvider client={queryClient}>
      <ServerProvider>
        <UserProvider>
          <LoginScreen />
        </UserProvider>
      </ServerProvider>
    </QueryClientProvider>
  </ApplicationProvider>
);

