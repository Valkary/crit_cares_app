import { FC, useContext } from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { UserContext } from '../../contexts/UserContext';
import BottomTabs from "./BottomTabs";
import LoginScreen from '../pages/LoginScreen';

const { Navigator, Screen } = createBottomTabNavigator();

const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>USERS</Text>
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>ORDERS</Text>
  </Layout>
);

const TabNavigator: FC = () => {
  const { token } = useContext(UserContext);

  return (
    <Navigator tabBar={props => !token ? <></> : <BottomTabs {...props} />}>
      {!token ?
        <Screen name='Login' component={LoginScreen} options={{ title: "Ingresar" }} /> :
        <>
          <Screen name='Users' component={UsersScreen} />
          <Screen name='Orders' component={OrdersScreen} />
        </>
      }
    </Navigator>
  );
}

export default TabNavigator;
