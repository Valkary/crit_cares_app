import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import ServerProvider from "./contexts/ServerContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

import LoginScreen from "./components/pages/LoginScreen";

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <QueryClientProvider client={queryClient}>
      <ServerProvider>
        <LoginScreen />
      </ServerProvider>
    </QueryClientProvider>
  </ApplicationProvider>
);

