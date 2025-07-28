import React from "react";
import { Text, StyleSheet } from 'react-native';

//Este componente mostra o titulo na tela
export default function Titulo() {
    return(
        <Text style={styles.texto}>Bem vindo ao App!</Text>
    )
}
const styles = StyleSheet.create({
    texto:{
        fontSize: 26,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 20,
        textAlign: 'center'
    }
})