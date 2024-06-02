import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, SectionList, Alert, TouchableOpacity } from 'react-native';
import { Button } from '@rneui/themed';

import { AuthContext } from '../../context/AutenticationContext';
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
        title: 'Questão 1: Quantos copos de água você bebe por dia?',
        data: [
            { ponto: 0, opcao: 'a) Não bebo muita água;' },
            { ponto: 1, opcao: 'b) Menos de quatro copos;' },
            { ponto: 3, opcao: 'c) Mais de cinco copos.' },
        ],
    },
    {
        title: 'Questão 2: Quantas vezes por dia você come? (conte também os lanches da manhã e da tarde)',
        data: [
            { ponto: 0, opcao: 'a) Uma ou duas vezes por dia;' },
            { ponto: 1, opcao: 'b) De três a quatro vezes por dia;' },
            { ponto: 3, opcao: 'c) Mais de cinco vezes por dia.' },
        ],
    },
    {
        title: 'Questão 3: Como costuma ser seu café da manhã?',
        data: [
            { ponto: 0, opcao: 'a) Café preto e no máximo um biscoitinho;' },
            { ponto: 2, opcao: 'b) Café com leite, pão branco, margarina, queijo e presunto;' },
            { ponto: 3, opcao: 'c) Frutas e sucos naturais, cereais integrais, tapioca, pão integral.' },
        ],
    },
    {
        title: 'Questão 4: Qual é, em média, a quantidade de frutas que você consome por dia?',
        data: [
            { ponto: 0, opcao: 'a) Não como frutas nem bebo suco natural de frutas todos os dias;' },
            { ponto: 3, opcao: 'b) Três unidades;' },
            { ponto: 1, opcao: 'c) Duas ou menos unidades.' },
        ],
    },
    {
        title: 'Questão 5: O que você leva de lanche para a escola/trabalho?',
        data: [
            { ponto: 0, opcao: 'a) Não levo nenhum tipo de lanche;' },
            { ponto: 1, opcao: 'b) Chocolates, pães, bolachas recheadas, salgadinhos, refrigerante;' },
            { ponto: 3, opcao: 'c) Frutas, iogurte, barrinha de cereal, sanduíche de pão integral.' },
        ],
    },
    {
        title: 'Questão 6: Você consome algum tipo de verdura ou legume todos os dias:',
        data: [
            { ponto: 0, opcao: 'a) Não consumo verdura nem legumes;' },
            { ponto: 2, opcao: 'b) Duas ou menos vezes por semana;' },
            { ponto: 3, opcao: 'c) Todos os dias.' },
        ],
    },
    {
        title: 'Questão 7: Quantas vezes por semana você come carne vermelha?',
        data: [
            { ponto: 1, opcao: 'a) Todos os dias;' },
            { ponto: 0, opcao: 'b) Não consumo carne vermelha;' },
            { ponto: 3, opcao: 'c) Duas vezes ou mais.' },
        ],
    },
    {
        title: 'Questão 8: Quantas vezes por semana você pratica atividades físicas?',
        data: [
            { ponto: 3, opcao: 'a) Todos os dias;' },
            { ponto: 2, opcao: 'b) Duas vezes ou mais;' },
            { ponto: 0, opcao: 'c) Não pratico nenhuma atividade física.' },
        ],
    },
    {
        title: 'Questão 9: Qual tipo de gordura é mais utilizado na sua casa para cozinhar os alimentos?',
        data: [
            { ponto: 0, opcao: 'a) Gordura animal ou manteiga;' },
            { ponto: 3, opcao: 'b) Óleos vegetais (óleo de soja, girassol, algodão, canola);' },
            { ponto: 1, opcao: 'c) Margarina ou gordura vegetal.' },
        ],
    },
    {
        title: 'Questão 10: Você costuma tomar refrigerantes com qual frequência?',
        data: [
            { ponto: 3, opcao: 'a) Não tomo refrigerantes;' },
            { ponto: 1, opcao: 'b) Três ou menos vezes por semana;' },
            { ponto: 0, opcao: 'c) Todos os dias.' },
        ],
    },
];

export default function Tela2() {

    const nav = useNavigation();
    const { pontuacao, setPontuacao } = useContext(AuthContext);

    const [respostas, setRespostas] = useState(Array(DATA.length).fill(null));
    const handlePress = (sectionIndex, item) => {
        const novasRespostas = [...respostas];
        novasRespostas[sectionIndex] = item.ponto;
        setRespostas(novasRespostas);
    };

    const calcularPontuacaoTotal = () => {
        return respostas.reduce((total, ponto) => total + (ponto || 0), 0);
    };

    return (
        <View style={styles.container}>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item.opcao + index}
                renderItem={({ item, section, index }) => (
                    <View
                        style={[
                            styles.item,
                            respostas[DATA.indexOf(section)] === item.ponto ? styles.itemSelecionado : null,
                        ]}
                    >
                        <Text
                            style={styles.title}
                            onPress={() => handlePress(DATA.indexOf(section), item)}
                        >
                            {item.opcao}
                        </Text>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
            <Button
                buttonStyle={styles.button}
                title='Finalizar'
                onPress={() => {
                    if (respostas.includes(null)) {
                        Alert.alert('Erro', 'Por favor, selecione todas as opções.');
                        return;
                    }
                    setPontuacao({ total: calcularPontuacaoTotal() });
                    nav.navigate('TelaResultado');
                }}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        fontSize: 22,
        backgroundColor: '#f0f0f0',
        padding: 10,
        fontWeight: 'bold',
    },
    item: {
        marginVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        padding: 20,
        borderStyle: 'solid',
        backgroundColor: '#f0d58f',

    },
    itemSelecionado: {
        backgroundColor: '#c9a216',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 18,
    },
    button: {
        marginTop: 10,
        backgroundColor: '#c02f1e',
        borderRadius: 25,
        marginRight: 30,
        marginLeft: 30,
    },
});