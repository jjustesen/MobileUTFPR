import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Diario from "./src/pages/Diario";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Perfil from "./src/pages/Perfil";
import { Provider } from "./src/providers";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Diario" component={Diario} />
        <Tab.Screen name="Perfil" component={Perfil} />
        {/* <Tab.Screen name="Login" component={Login} /> */}
      </Tab.Navigator>
    </Provider>
  );
}
