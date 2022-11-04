import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import ServerProvider from "./contexts/ServerContext";
import UserProvider from "./contexts/UserContext";
import TabNavigator from "./components/organisms/TabNavigator";

const queryClient = new QueryClient();

export default () => {

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <ServerProvider>
            <UserProvider>
              <TabNavigator />
            </UserProvider>
          </ServerProvider>
        </NavigationContainer>
      </QueryClientProvider>
    </ApplicationProvider>
  );
}

