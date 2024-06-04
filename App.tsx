import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator();

import Tela1 from './src/screens/Tela1';
import Tela2 from './src/screens/Tela2';
import Tela3 from './src/screens/Tela3';

import { NavigationContainer } from '@react-navigation/native';
import QuestionProvider from './src/context/QuestionContext';

export default function App() {
  return (
    <NavigationContainer>
      <QuestionProvider>
        <Stack.Navigator>
          <Stack.Screen
            name='TelaInicio'
            component={Tela1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TelaQuiz"
            component={Tela2}
            options={{
              title: "Responda as perguntas"
            }}
          />
          <Stack.Screen
            name="TelaResultado"
            component={Tela3}
            options={{
              title: "Seu Resultado"
            }}
          />
        </Stack.Navigator>
      </QuestionProvider>
    </NavigationContainer>
  )
}

//morrom #f0d58f
//verde #4e7111
//vermelho #c02f1e
//amarelo #c9a216
//rosa #f0d6d3