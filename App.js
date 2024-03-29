import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import ProfileScreen from "./app/screens/ProfileScreen";
const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    
  );
};
export default App;
