import React,{useState} from "react";
import { View,Text,Button } from 'react-native';

export default function PedidoCafe(){
    const[cafe,setCafe] = useState(1)
    return(
        <View style={{padding: 20}}>
            <Text style={{fontSize:18}}>Voce pediu {cafe} café</Text>
            {/**Botao para pedir mais café */}
            <Button title="Pedir mais um café" onPress={() => setCafe(cafe + 1)}/>
        </View>
    )
}