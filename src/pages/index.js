import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Diario from "./Diario";
import Home from "./Home";
import Perfil from "./Perfil";
import Login from "./Login";
import DisplayInfos from "./DisplayInfos";
import TaskCreate from "./TaskCreate";
import { useAuth } from "../providers/auth";
import Register from "./Register";

const Tab = createBottomTabNavigator();

export default function Pages() {
  const [register, setRegister] = React.useState(false);

  const { isLogged } = useAuth();

  return (
    <>
      {isLogged ? (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeRoutes}
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
      ) : !register ? (
        <Login handleRegister={() => setRegister(true)} />
      ) : (
        <Register handleCancel={() => setRegister(false)} />
      )}
    </>
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

const HomeRoutes = () => {
  const RootStack = createNativeStackNavigator();
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen name="Aula" component={DisplayInfos} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
