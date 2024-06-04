import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { QuestionContext } from '../context/QuestionContext';
import { Button } from '@rneui/base';

export default function Resultado() {

  const { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10 } = useContext(QuestionContext);
  const [resultado, setResultado] = useState("");
  const [resp, setResp] = useState(-1);

  function contarQuestoes() {
    let total = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10;
    setResp(total);
    if (total >= 0 && total <= 10) {
      setResultado(`Reflita seus hábitos alimentares, e lembre-se sempre que uma alimentação desregulada pode levar à obesidade, diabetes, hipertensão, problemas no coração, desnutrição, entre outros. Reveja sua dieta alimentar e tente melhorar, seu corpo e sua saúde agradecem.
      `);
    } else if (total >= 11 && total <= 20) {
      setResultado(`Sua alimentação está boa, mas ainda não é a ideal. Analise seus hábitos alimentares e verifique o que pode mudar.
      `);
    } else if (total >= 21 && total <= 30) {
      setResultado(`Parabéns, você mostrou que sabe cuidar de sua saúde fazendo escolhas inteligentes e equilibradas.
      `);
    } else {
      setResultado('Pontuação fora do intervalo esperado.');
    }
  }

  useEffect(() => {
    contarQuestoes();
  }, []);

  return (
    <View>
      <Text style={styles.feedback}>Resultado: {resp}</Text>
      <Text style={styles.feedback}>{resultado}</Text>
      <Button
        buttonStyle={styles.button}
        title='Voltar'
        onPress={() => nav.navigate("TelaInicio")}
      />
    </View>
  );
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