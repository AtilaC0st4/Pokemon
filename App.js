
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {

  

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}> Pokemon </Text>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#f5f5f5'
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25
  },

  card: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 15,
    width: '100%'
  },

  imagem: {
    width: 180,
    height: 180
  },

  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  }

});
