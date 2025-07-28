import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function TextTDS241T() {
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>TextTDS241T</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        padding: 20,
    },  
    texto:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4a90e2',
        textAlign: 'center'
        }    
})