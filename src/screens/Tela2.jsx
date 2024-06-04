import {View, Text, ScrollView, Alert, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {CheckBox} from '@rneui/themed';
import {Button} from '@rneui/base';
import {QuestionContext} from '../context/QuestionContext';

export default function Questoes({navigation}) {
  const {
    q1,
    setQ1,
    q2,
    setQ2,
    q3,
    setQ3,
    q4,
    setQ4,
    q5,
    setQ5,
    q6,
    setQ6,
    q7,
    setQ7,
    q8,
    setQ8,
    q9,
    setQ9,
    q10,
    setQ10,
  } = useContext(QuestionContext);

  function validarQuestoes() {
    let ok = true;
    if (
      q1 < 0 ||
      q2 < 0 ||
      q3 < 0 ||
      q4 < 0 ||
      q5 < 0 ||
      q6 < 0 ||
      q7 < 0 ||
      q8 < 0 ||
      q9 < 0 ||
      q10 < 0
    ) {
      Alert.alert('É necessário responder a todas as questões!!!');
      ok = false;
    }

    if (ok) {
      navigation.navigate('TelaResultado');
    }
  }

  return (
    <ScrollView>
      <View>
        <Text>Questão1 - Quantos copos de água você bebe por dia?</Text>
        <View row align="center" spacing={4}>
          <CheckBox
            title="Não bebo muita água"
            checked={q1 === 0}
            onPress={() => setQ1(0)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
          <CheckBox
            title="Menos de quatro copos"
            checked={q1 === 1}
            onPress={() => setQ1(1)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
          <CheckBox
            title="Mais de cinco copos"
            checked={q1 === 3}
            onPress={() => setQ1(3)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
        </View>
      </View>
      <View>
        <Text>Questão2 - Quantas vezes por dia você come? </Text>
        <View row align="center" spacing={4}>
          <CheckBox
            title="Uma ou duas vezes por dia"
            checked={q2 === 0}
            onPress={() => setQ2(0)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
          <CheckBox
            title="De três a quatro vezes por dia"
            checked={q2 === 1}
            onPress={() => setQ2(1)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
          <CheckBox
            title="Mais de cinco vezes por dia"
            checked={q2 === 3}
            onPress={() => setQ2(3)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
        </View>
      </View>
      <View>
        <Text>Questão3 - Como costuma ser seu café da manhã?</Text>
        <View row align="center" spacing={4}>
          <CheckBox
            title="Café preto e no máximo um biscoitinho"
            checked={q3 === 0}
            onPress={() => setQ3(0)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
          <CheckBox
            title="Café com leite, pão branco, margarina, queijo e presunto"
            checked={q3 === 2}
            onPress={() => setQ3(2)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
          <CheckBox
            title="Frutas e sucos naturais, cereais integrais, tapioca, pão integral"
            checked={q3 === 3}
            onPress={() => setQ3(3)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
        </View>
      </View>
      <View>
        <Text>
          Questão4 - Qual é, em média, a quantidade de frutas que você consome
          por dia?
        </Text>
        <View row align="center" spacing={4}>
          <CheckBox
            title="Não como frutas nem bebo suco natural de frutas todos os dias"
            checked={q4 === 0}
            onPress={() => setQ4(0)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
          <CheckBox
            title="Três unidades"
            checked={q4 === 3}
            onPress={() => setQ4(3)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
          <CheckBox
            title="Duas ou menos unidades"
            checked={q4 === 1}
            onPress={() => setQ4(1)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
        </View>
      </View>
      <View>
        <Text>
          Questão5 - O que você leva de lanche para a escola/trabalho?
        </Text>
        <View row align="center" spacing={4}>
          <CheckBox
            title="Não levo nenhum tipo de lanche"
            checked={q5 === 0}
            onPress={() => setQ5(0)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
          <CheckBox
            title="Chocolates, pães, bolachas recheadas, salgadinhos, refrigerante"
            checked={q5 === 1}
            onPress={() => setQ5(1)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
          <CheckBox
            title="Frutas, iogurte, barrinha de cereal, sanduíche de pão integral"
            checked={q5 === 3}
            onPress={() => setQ5(3)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
        </View>
        <View>
          <Text>
            {
              'Questão 6: Você consome algum tipo de verdura ou legume todos os dias:'
            }
          </Text>
          <View row align="center" spacing={4}>
            <CheckBox
              title="Não consumo verdura nem legumes"
              checked={q6 === 0}
              onPress={() => setQ6(0)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
            <CheckBox
              title="Duas ou menos vezes por semana"
              checked={q6 === 2}
              onPress={() => setQ6(2)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
            <CheckBox
              title="Todos os dias"
              checked={q6 === 3}
              onPress={() => setQ6(3)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </View>
        </View>
        <View>
          <Text>
            {'Questão 7: Quantas vezes por semana você come carne vermelha?'}
          </Text>
          <View row align="center" spacing={4}>
            <CheckBox
              title="Todos os dias"
              checked={q7 === 3}
              onPress={() => setQ7(3)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
            <CheckBox
              title="Não consumo carne vermelha"
              checked={q7 === 0}
              onPress={() => setQ7(0)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
            <CheckBox
              title="Duas vezes ou mais"
              checked={q7 === 2}
              onPress={() => setQ7(2)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </View>
        </View>
        <View>
          <Text>
            {
              'Questão 8: Quantas vezes por semana você pratica atividades físicas?'
            }
          </Text>
          <View row align="center" spacing={4}>
            <CheckBox
              title="Todos os dias"
              checked={q8 === 3}
              onPress={() => setQ8(3)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
            <CheckBox
              title="Duas vezes ou mais"
              checked={q8 === 2}
              onPress={() => setQ8(2)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
            <CheckBox
              title="Não pratico nenhuma atividade física"
              checked={q8 === 0}
              onPress={() => setQ8(0)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </View>
        </View>
        <View>
          <Text>
            {
              'Questão 9: Qual tipo de gordura é mais utilizado na sua casa para cozinhar os alimentos?'
            }
          </Text>
          <View row align="center" spacing={4}>
            <CheckBox
              title="Gordura animal ou manteiga"
              checked={q9 === 0}
              onPress={() => setQ9(0)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
            <CheckBox
              title="Óleos vegetais (óleo de soja, girassol, algodão, canola)"
              checked={q9 === 3}
              onPress={() => setQ9(3)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
            <CheckBox
              title="Margarina ou gordura vegetal"
              checked={q9 === 1}
              onPress={() => setQ9(1)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </View>
        </View>
        <View>
          <Text>
            {
              'Questão 10: Você costuma tomar refrigerantes com qual frequência?'
            }
          </Text>
          <View row align="center" spacing={4}>
            <CheckBox
              title="Não tomo refrigerantes"
              checked={q10 === 3}
              onPress={() => setQ10(3)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
            <CheckBox
              title="Três ou menos vezes por semana"
              checked={q10 === 1}
              onPress={() => setQ10(1)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
            <CheckBox
              title="Todos os dias"
              checked={q10 === 0}
              onPress={() => setQ10(0)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </View>
          <Button
            buttonStyle={styles.button}
            title="Finalizar pesquisa"
            onPress={() => validarQuestoes()}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: '#c02f1e',
    borderRadius: 25,
    marginRight: 30,
    marginLeft: 30,
  },
});
