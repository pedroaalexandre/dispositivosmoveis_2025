import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Produtos from "./components/Produtos";
import Detalhes from "./components/Detalhes";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Produtos" component={Produtos}/>
        <Stack.Screen name="Detalhes" component={Detalhes}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;