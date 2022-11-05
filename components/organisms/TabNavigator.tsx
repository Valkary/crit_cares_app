import { FC, useContext } from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { UserContext } from '../../contexts/UserContext';
import BottomTabs from "./BottomTabs";
import LoginScreen from '../pages/LoginScreen';

const { Navigator, Screen } = createBottomTabNavigator();

const PatientsScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>PATIENTS</Text>
  </Layout>
);

const AppointmentsScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>APPOINTMENTS</Text>
  </Layout>
);

const TabNavigator: FC = () => {
  const { token } = useContext(UserContext);

  return (
    <Navigator tabBar={props => !token ? <></> : <BottomTabs {...props} />}>
      {!token ?
        <Screen name='Login' component={LoginScreen} options={{ title: "Ingresar" }} /> :
        <>
          <Screen name='Pacientes' component={PatientsScreen} />
          <Screen name='Citas' component={AppointmentsScreen} />
        </>
      }
    </Navigator>
  );
}

export default TabNavigator;
