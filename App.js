import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Diario from "./src/pages/Diario";
import Home from "./src/pages/Home";
import Perfil from "./src/pages/Perfil";
import Login from "./src/pages/Login";
import { Provider } from "./src/providers";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DisplayInfos from "./src/pages/DisplayInfos";
import TaskCreate from "./src/pages/TaskCreate";

const Tab = createBottomTabNavigator();

export default function App() {
  const [state, setState] = React.useState(false);

  const handleLogin = React.useCallback(() => {
    setState(true);
  }, []);
  const handleLogout = React.useCallback(() => {
    setState(false);
  }, []);

  return (
    <Provider>
      {state ? (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="home-variant-outline"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Diario"
            component={DiarioRoutes}
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="calendar"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Perfil"
            component={Perfil}
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </Provider>
  );
}

const DiarioRoutes = () => {
  const RootStack = createNativeStackNavigator();
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen
          name="Diario"
          component={Diario}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen name="Aula" component={DisplayInfos} />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen name="Cadastrar Diario" component={TaskCreate} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
