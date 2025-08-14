import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function ContadorBasico(): React.ReactElement{
    const [contador, setContador] = useState<number>(0)
    const [ativo, setAtivo] = useState<boolean>(true)

    useEffect(() =>{
        if(!ativo) return

        const timer = setInterval(() => {
            setContador ((c)=> c+1)
        },1000)
        return()=>clearInterval(timer)
    },[ativo])
    return(
        <View style={styles.container}>
            <Text style={styles.contador}>{contador}</Text>
            <View style={styles.botoes}>
                <TouchableOpacity style={[styles.botao,{backgroundColor: ativo ? "#010101" : "#111111"}]}
                onPress={() => setAtivo((a)=>!a)}>
                    <Text style={styles.textoBotao}>{ativo ? "Pausar" : "Continuar"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    contador:{
        fontSize: 80,
        fontWeight: 'bold',
        marginBottom: 30
    },
    botoes:{
        flexDirection: 'row',
    },
    botao:{
        paddingVertical:15,
        paddingHorizontal:30,
        marginHorizontal:10,
        borderRadius:10
    },
    textoBotao:{
        fontWeight: "bold",
        color:"fff",
        fontSize: 18,
    }
})
