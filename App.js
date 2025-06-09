import { useState } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {auth} from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Login = ({ navigation, route }) => {
  const [email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  return (
    <View>
      <Text>E-mail: </Text>
      <TextInput
        keyboardType="email-address"
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Digite seu e-mail"
      />
      <Text>Senha: </Text>
      <TextInput
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Digite sua senha"

      />
      
      <Button onPress={() => route.params.funcLogar(true)} title="Logar" />
      <Button
        onPress={() => navigation.navigate('Registrar')}
        title="Registrar"
      />
    </View>
  );
};

const Registrar = () => {
  return <Text>Registrar</Text>;
};

const Avisos = () => {
  return <Text>Avisos</Text>;
};

const Perfil = () => {
  return <Text>Perfil</Text>;
};

const Home = ({ navigation, route }) => {
  return (
    <View>
      <Button onPress={() => route.params.funcLogar(false)} title="Deslogar" />
      <Button onPress={() => navigation.navigate('Perfil')} title="Perfil" />
    </View>
  );
};

/* Logomarca da instituição; textos; títulos(label); banner publicitário rotativo - Kayky */
const Home_stack = ({ navigation, route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
        initialParams={{ funcLogar: route.params.funcLogar }}
      />
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  );
};

const Config = () => {
  return <Text>Config</Text>;
};

const Contatos = () => {
  return <Text>Contatos</Text>;
};

const Fotos = () => {
  return <Text>Fotos</Text>;
};

const App = () => {
  const [EstaLogado, setLogado] = useState(false);
  return EstaLogado ? (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={() => {
            return (
              <Tab.Navigator>
                <Tab.Screen
                  name="Home_tab"
                  options={{ headerShown: false }}
                  component={Home_stack}
                  initialParams={{ funcLogar: setLogado }}
                />
                <Tab.Screen name="Avisos" component={Avisos} />
              </Tab.Navigator>
            );
          }}
        />
        <Drawer.Screen name="Configurações" component={Config} />
        <Drawer.Screen name="Contatos" component={Contatos} />
        <Drawer.Screen name="Fotos" component={Fotos} />
      </Drawer.Navigator>
    </NavigationContainer>
  ) : (

  /* Elementos visuais (Kayky) - Logomarca da instituição; banner publicitário rotativo; canais de comunicação Elementos Interativos (Isabelle) - input de dados; botão de ação */
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Sistema para curso de alfabetização de jovens e adultos"
          component={Login}
          initialParams={{ funcLogar: setLogado }}
        />
        <Stack.Screen name="Registrar" component={Registrar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;