import React from "react";
import {View, StyleSheet} from 'react-native';
//Importando o componente criado
import Titulo from "@/components/Titulo";
import TextTDS241T from "@/components/TextTDS241T";
import TextInputTDS241T from "@/components/TextInputTDS241T";
import ImagemTDS241T from "@/components/ImagemTDS241T";
import ScrollViewTDS241T from "@/components/ScrollViewTDS241T";

export default function App(){
  return (
    <View style={style.container}>
      {/**Titulo da Tela */}
      <Titulo />
      <TextTDS241T />
      <TextInputTDS241T />
      <ImagemTDS241T />
      <ScrollViewTDS241T/>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#010101',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  }
})