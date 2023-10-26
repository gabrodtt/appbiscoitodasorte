import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [img, setImg] = useState(require('./assets/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
    'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
    'Siga os bons e aprenda com eles.',
  ];

  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextoFrase(frases[numeroAleatorio]);
    setImg(require('./assets/biscoitoAberto.png'));
  }

  function reiniciar(){
    setTextoFrase('');
    setImg(require('./assets/biscoito.png'));
  }

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />

      <Text style={styles.textoFrase}> {textoFrase} </Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}> QUEBRAR BISCOITO </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.botao,
          { marginTop: 20, borderColor: 'black', backgroundColor: '#5e2129'},
        ]} onPress={reiniciar}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: 'white' }]}> REINICIAR </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dac8b3',
  },

  img: {
    width: 230,
    height: 230,
  },

  botao: {
    width: 230,
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 25,
    backgroundColor: 'white',
  },

  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnTexto: {
    color: '#5e2129',
    fontSize: 18,
    fontWeight: 'bold',
  },

  textoFrase: {
    fontSize: 20,
    color: '#5e2129',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
