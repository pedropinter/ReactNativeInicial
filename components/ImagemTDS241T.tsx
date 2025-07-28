import React from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';

export default function ImagemTDS241T() {
    return(
        <View style={styles.container}>
            {/** Imagem */}
            <Image source={{uri:'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Absolute_Batman%2C_October_2024.webp/250px-Absolute_Batman%2C_October_2024.webp.png'}}
            style={styles.imagem} />
            {/** Texto */}
            <Text style={styles.legenda}>Batman Absoluto</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        padding: 20,
        alignItems: 'center'
    },
    imagem:{
        width: 80,
        height: 80,
        marginBottom: 10
    },  
    legenda:{
        fontSize: 16,
        color: '#555',
        }    
})