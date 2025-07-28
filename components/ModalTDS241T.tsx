import React, { useState } from "react";
import {Modal,View,Button,Text} from 'react-native';

export default function ModalTDS241T(){
    const[visible,setVisible] = useState(false)
    return(
        <View style={{margin: 10}}>
            <Button title="clique" onPress={() => setVisible(true)} />
            <Modal visible={visible} transparent animationType="slide">
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <View style={{backgroundColor:'white',padding: 20,borderRadius:10}}>
                        <Text style={{marginBottom:10}}>Esse é um Modal</Text>
                        <Button title="fecha" onPress={() => setVisible(false)}></Button>
                    </View>
                </View>
            </Modal>
        </View>
    )
}