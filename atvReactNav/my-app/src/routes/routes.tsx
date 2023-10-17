import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/home";
import Config from "../screens/config";
import Detalhes from "../screens/details";

const Tab = createBottomTabNavigator();

export default function Rotas() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          
        }}
      />
      <Tab.Screen
        name="Detalhes"
        component={Detalhes}
        options={{
          
        }}
      />
      <Tab.Screen
        name="Configuração"
        component={Config}
      />
    </Tab.Navigator>
  );
}
