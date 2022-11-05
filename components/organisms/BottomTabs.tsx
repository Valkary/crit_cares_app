import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

const BottomTabs = ({ navigation, state }: any) => {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title='PACIENTES' />
      <BottomNavigationTab title='CITAS' />
    </BottomNavigation>
  );
}

export default BottomTabs;
