import { useState, useEffect } from 'react';
import { View, Button, Text, TextInput, StyleSheet, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as ScreenOrientation from 'expo-screen-orientation';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Adicione isso
import './firebaseConfig'; // Certifique-se de importar sua configuração do Firebase


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Login = ({ navigation, route }) => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ImageBackground source={require('./assets/fundologin.jpg')} style={styles.background} resizeMode="cover">
      <View style={styles.logoContainer}>
        <Image source={require('./assets/estacio-logo-retangular.png')} style={styles.logo} />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.labelText}>E-mail: </Text>
        <TextInput  
          style={styles.inputBox}
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Digite seu e-mail"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.labelText}>Senha: </Text>
        <TextInput
          style={styles.inputBox}
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Digite sua senha"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={() => { if (email.trim() !== '' && password.trim() !== '') { route.params.funcLogar(true) }}} title="Logar" />
        <View style={{ width: 20 }} /> {/* Espaço entre os botões */}
        <Button onPress={() => navigation.navigate('Registrar')} title="Registrar" />
      </View>
    </ImageBackground>
  );
};

const Registrar = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  return (
    <ImageBackground source={require('./assets/fundologin.jpg')} style={styles.background} resizeMode="cover">
      <View style={styles.registroContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.labelText}>Nome de Usuário:</Text>
          <TextInput
            style={styles.inputBox}
            value={username}
            onChangeText={text => setUsername(text)}
            placeholder="Insira seu nome de usuário"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.labelText}>E-mail:</Text>
          <TextInput
            style={styles.inputBox}
            keyboardType="email-address"
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Insira seu e-mail"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.labelText}>Senha:</Text>
          <TextInput
            style={styles.inputBox}
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="Insira sua senha"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Registrar" onPress={() => {}} />
        </View>
      </View>
    </ImageBackground>
  );
};

const Avisos = () => {
  return (
  <View>
  <Text>Avisos</Text>
  </View>
  );
};

const Perfil = () => {
  return (
  <View>
  <Text>Perfil</Text>
  </View>
  );
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
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Config</Text>
    </View>
  );
};

const Contatos = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contatos</Text>
    </View>
  );
};

const Fotos = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Fotos</Text>
    </View>
  );
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
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Registrar" component={Registrar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 350,
    height: 140,
    resizeMode: 'contain',
  },
  logoContainer: {
    position: 'absolute',
    top: 60,
    width: '100%',
    alignItems: 'center',
    zIndex: 1,
  },

  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 150,
  },
  inputBox: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: '#000',
  },
  inputGroup: {
    width: '80%',
    marginBottom: 15,
    alignItems: 'center',
  },
  labelText: {
    alignSelf: 'flex-start',
    marginBottom: 5,      
    color: '#FFFFFF',          
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  registroContainer: {
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  paddingHorizontal: 20,
  paddingTop: 70,
  },
});


export default App;