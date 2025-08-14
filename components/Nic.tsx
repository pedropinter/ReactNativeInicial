import React from "react";
import { View,Text,StyleSheet } from 'react-native';

type ProdutoPros = {
    nome: string
    idade: string
    cidade: string
}

const Nic: React.FC<ProdutoPros> = ({nome,idade,cidade}) =>{
    return(
        <View style={styles.container}>
        <Text style={styles.texto}>Nome: {nome}</Text>
        <Text style={styles.texto}>Idade: {idade}</Text>
        <Text style={styles.texto}>Cidade: {cidade}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    texto:{
        fontSize: 18,
        color: '#000001',
        marginBottom: 20,
        textAlign: 'center'
    },
    container:{
        padding: 20,
    }
})

export default Nic;