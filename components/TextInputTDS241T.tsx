import React,{useState} from "react";
import { View, Text,TextInput, StyleSheet } from 'react-native';

export default function TextInputTDS241T() {
    const [nome,setNome] = useState('')
    return(
        <View style={styles.container}>
            <TextInput 
            style={styles.input}
            placeholder="Digite um nome"
            onChangeText={(texto) => setNome(texto)}
            />
            {/**Mostra oque foi digitado */}
            /<Text style={styles.resultado}>Voce digitou: {nome}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        padding: 20,
    },
    label:{
        fontSize: 18,
        marginBottom: 8
    },
    input: {
        borderWidth:1,
        borderColor: '#aaa',
        padding: 8,
        borderRadius: 5,
        marginBottom: 10,
    },
    resultado:{
        marginTop:10,
        fontStyle: 'italic',
    },  
    texto:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4a90e2',
        textAlign: 'center'
        }    
})