import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

const BottomTabs = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='USERS' />
    <BottomNavigationTab title='ORDERS' />
  </BottomNavigation>
);

export default BottomTabs;
