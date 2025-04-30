import {useState} from 'react';
import { View, Button, Text} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-na";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
 
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
 
const Login = ({navigation, route})=>{
  return(
    <View>
      <Button onPress = {()=>route.params.funcLogar(true)} title='Logar'/>
      <Button onPress = {()=>navigation.navigate("Registrar")} title = 'Registrar'/>
    </View>
  )}
 
const Registrar = ()=>{return(<Text>Registrar</Text>)}
 
const Avisos = ()=>{return(<Text>Avisos</Text>)}
 
const Perfil = ()=>{return(<Text>Perfil</Text>)}
 
const Home = ({navigation, route})=>{
  return(
    <View>
      <Button onPress = {()=>route.params.funcLogar(false)} title='Deslogar'/>
      <Button onPress = {()=>navigation.navigate("Perfil")} title='Perfil'/>
    </View>
  )
}

const Home_stack = ({navigation, route})=>{
  return(
<Stack.Navigator>        						
  <Stack.Screen name="Home" options={{headerShown:false}} component={Home}  initialParams = {{funcLogar : route.params.funcLogar}}/>
  <Stack.Screen name="Perfil" component={Perfil} />      						
</Stack.Navigator>
  )
}


const Config = ()=>{return(<Text>Config</Text>)}
 
const Contatos = ()=>{return(<Text>Contatos</Text>)}

const Fotos = ()=>{return(<Text>Fotos</Text>)} 

const App = () => {
  const [EstaLogado, setLogado] = useState(false);
  return(    	
    EstaLogado?(
      <NavigationContainer>		
        <Drawer.Navigator>			
          <Drawer.Screen name="Home" component={()=>{return(				
            <Tab.Navigator>      					
	            <Tab.Screen name="Home_tab" options={{headerShown:false}} component={Home_stack}  initialParams = {{funcLogar : setLogado}}/>
              <Tab.Screen name="Avisos" component={Avisos} />
            </Tab.Navigator>)}} />			
          <Drawer.Screen name="Config" component={Config} />
          <Drawer.Screen name="Contatos" component={Contatos} />
          <Drawer.Screen name="Fotos" component={Fotos}/>
        </Drawer.Navigator>	
      </NavigationContainer>
      ):(     
      <NavigationContainer>	 		
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} initialParams = {{funcLogar : setLogado}}/>
          <Stack.Screen name="Registrar" component={Registrar}/>      	
        </Stack.Navigator>    
    </NavigationContainer>))
  };

  
 
export default App;