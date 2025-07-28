import React from "react";
import { Text, StyleSheet } from 'react-native';

type Props = {
    texto: string
}

export default function Mensagem({texto}: Props) {
    return(
        <Text style={styles.texto}>{texto}</Text>
    )
}
const styles = StyleSheet.create({
    texto:{
        fontSize: 18,
        color: '#000001',
        marginBottom: 20,
        textAlign: 'center'
    }
})