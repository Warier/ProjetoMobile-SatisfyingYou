import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NovaConta from "./src/screens/NovaConta";
import AcoesPesquisa from "./src/screens/AcoesPesquisa";
import AgradecimentoParticipacao from "./src/screens/AgradecimentoParticipacao";

const Stack = createStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Nova Conta" screenOptions={{headerTintColor: '#FFFFFF', headerStyle: {backgroundColor: '#2B1D62'}}}>
                <Stack.Screen name="Nova Conta" component={NovaConta} />
                <Stack.Screen name="Carnaval" component={AcoesPesquisa} />
                <Stack.Screen name="Agradecimento" component={AgradecimentoParticipacao} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App