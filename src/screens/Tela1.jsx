import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'
import { Text } from '@rneui/base'

export default function Tela1({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Teste de Alimentação</Text>
        <Image
        source={require('../../assents/img/fruit.png')} 
        style={styles.imgLogo}
        />
        <View style={styles.buttonContainer}>
        <Button
          title="Iniciar"
          onPress={() => navigation.navigate('TelaQuiz')}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          containerStyle={styles.buttonInnerContainer}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        padding: 20,
      },
      titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
      },
      imgLogo: {
        width: 250,
        height: 350,
        resizeMode: 'contain',
        marginBottom: 20,
      },
      button: {
        backgroundColor: '#c02f1e',
        borderRadius: 25,
      },
      buttonTitle: {
        fontWeight: 'bold',
        fontSize: 23,
      },
      buttonInnerContainer: {
        height: 50,
        width: 200,
      },
})