import React from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';
import BatmanImagem from '../images/batman1.jpeg';

export default function ImagemAssetsTDS241T() {
    return(
        <View style={styles.container}>
            {/** Imagem */}
            <Image source={BatmanImagem}
            style={styles.imagem} />
            {/** Texto */}
            <Text style={styles.legenda}>Batman Absoluto local</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        padding: 20,
        alignItems: 'center'
    },
    imagem:{
        width: 200,
        height: 100,
        marginBottom: 10
    },  
    legenda:{
        fontSize: 16,
        color: '#333',
        }    
})