import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AutenticationContext';
import { Button } from '@rneui/themed';


export default function Tela3() {

  const nav = useNavigation();
  const { pontuacao, setPontuacao } = useContext(AuthContext);

  const getFeedbackMessage = () => {
    const total = pontuacao.total;
    if (total >= 0 && total <= 10) {
      return `
Reflita seus hábitos alimentares, e lembre-se sempre que uma alimentação desregulada pode levar à obesidade, diabetes, hipertensão, problemas no coração, desnutrição, entre outros. Reveja sua dieta alimentar e tente melhorar, seu corpo e sua saúde agradecem.`;
    } else if (total >= 11 && total <= 20) {
      return `
Sua alimentação está boa, mas ainda não é a ideal. Analise seus hábitos alimentares e verifique o que pode mudar.`;
    } else if (total >= 21 && total <= 30) {
      return `Parabéns, você mostrou que sabe cuidar de sua saúde fazendo escolhas inteligentes e equilibradas.`;
    } else {
      return 'Pontuação fora do intervalo esperado.';
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.pontuacao}>Sua pontuação total é: {pontuacao.total}</Text>
      <Text style={styles.feedback}>{getFeedbackMessage()}</Text>
      <Button
        buttonStyle={styles.button}
        title='Voltar'
        onPress={() => nav.navigate("TelaInicio")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  pontuacao: {
    marginTop: 100,
    fontSize: 30,
  },
  feedback: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 20,
    margin: 20,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#c02f1e',
    borderRadius: 25,
    marginRight: 30,
    marginLeft: 30,
  },
});