import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Tutorial216608Navigator from '../features/Tutorial216608/navigator';
import NotificationList216580Navigator from '../features/NotificationList216580/navigator';
import Settings216579Navigator from '../features/Settings216579/navigator';
import Settings216571Navigator from '../features/Settings216571/navigator';
import UserProfile216569Navigator from '../features/UserProfile216569/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Tutorial216608: { screen: Tutorial216608Navigator },
NotificationList216580: { screen: NotificationList216580Navigator },
Settings216579: { screen: Settings216579Navigator },
Settings216571: { screen: Settings216571Navigator },
UserProfile216569: { screen: UserProfile216569Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
