import React,{useState} from "react";
import { View,Text,StyleSheet } from 'react-native';

type Props = {
    nome:string
    classificacao: string
}
const AnimeCard: React.FC<Props> = ({nome,classificacao}) => {
    let corFundo = '#9E9E9E'
    if(classificacao === 'legal'){
        corFundo = '#4CAF50'
    }else if(classificacao === 'intermediario'){
        corFundo = '#FFC107'
    }else if(classificacao === 'ruim'){
        corFundo = '#F44336'
    }
    return(
        <View style={[styles.card,{backgroundColor:corFundo}]}>
            {/**Container*/}
            <Text style={styles.nome}>{nome}</Text>
            <Text style={styles.classificacao}>{classificacao}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        width:'80%',
        padding: 20,
        borderRadius:10,
        marginVertical:10,
        alignItems: 'center',
        elevation: 5
    },
    nome:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'fff'
    },
    classificacao:{
        fontSize: 16,
        color: 'fff'
    }
})
export default AnimeCard;