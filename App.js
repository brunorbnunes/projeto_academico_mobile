/* 
02/05/2025
No SQL - Mongo.DB
O banco de dados clássico:
-apresenta um problema de consumo de memória desnecessário  
-Upgrade Horizontal
-Otimização

Dai vem o Mongo.DB:
-Ele ocupa o espaço que está sendo utilizado
-Upgrade Vertical 
-Dados mais pesados são salvos como objetos, como imagens, vídeos, pdf
-Arquitetura Descentralizada

Tecnologias utilizadas:
-Mongo.DB??
-JavaScript
-Expo.Snack
-ExpoGo

Não funciona pelo Expo.Snack, melhor tentar pelo vs-code, a princípio ideal é configurar o ambiente,
mas dá vários erros

import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, View, StyleSheet, Alert } from 'react-native';
import { JSHash, CONSTANTS } from 'react-native-hash';

export default function App() {
  const [cadastro, setCadastro] = useState('');
  const [login, setLogin] = useState('');
  const [hashCadastro, setHashCadastro] = useState('');
  const [hashLogin, setHashLogin] = useState('');

  const gerarHashCadastro = () => {
    JSHash(cadastro, CONSTANTS.HashAlgorithms.sha256)
      .then(hash => setHashCadastro(hash));
  };

  const gerarHashLogin = () => {
    JSHash(login, CONSTANTS.HashAlgorithms.sha256)
      .then(hash => setHashLogin(hash));
  };

  return (
    <SafeAreaView>
      <Text>Cadastro:</Text>
      <TextInput
        value={cadastro}
        onChangeText={setCadastro}
      />
      <Button title="teste" onPress={gerarHashCadastro} />
      <Text>{hashCadastro}</Text>

      <Text>Login:</Text>
      <TextInput
        value={login}
        onChangeText={setLogin}
      />
      <Button title="teste" onPress={gerarHashLogin} />
      <Text>{hashLogin}</Text>
    </SafeAreaView>
  );
}

09/05/2025

Relatório:
1.1 - Relata a existência da parte interessada.
1.2 - Relata a problemática encontrada e como o problema vai ser solucionado.
1.4 - Relata as tecnologias utilizadas para resolver a problemática.
-> 1.5 - Referencial teórico, escrever sobre a matéria e como ela contribui para o desenvolvimento do projeto, com referências a autores, por questões de referência e bom usar o google academy.
2.1 - Tabela do que foi feito, um cronograma do projeto.
2.2 - Forma de comunicação com a parte interessada, mas focar essencialmente na evidência, explicar sobre a dinâmica, da competição.
2.3 - Explicar a contribuição de cada aluno no projeto.
2.4 - Os objetivos previstos, que basicamente é o funcionamento do app
2.5 - Descrever softwares e bibliotecas utilizadas. 
-> 2.6 - Link do github e um desenho de como as páginas interagem entre si
3.1 - Opinião do grupo sobre a execução do projeto.
3.1.1 - Reação da parte interessada
3.1.2 - Experiência vivida durante o projeto
3.1.3 - Experiência vivenciada no projeto
-> 3.2.3 - Resultados e discussões, aqui onde entram as prints do projeto.

*/

import { useState } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
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
      <text>Senha: </text>
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
        <Drawer.Screen name="Consulta de extrato" component={consulta_extrato} />
        <Drawer.Screen name="Pagamento de contas" component={Pagamento_contas} />
        <Drawer.Screen name="Transferência bancária" component={transferencia_bancaria} />
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