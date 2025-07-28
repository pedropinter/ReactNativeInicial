import React from 'react';
import {View,Button,StyleSheet,Alert} from 'react-native';

export default function ButtonTDS241T() {
    const aoClicar = () => {
        Alert.alert('clique')
    }
    return(
        <View style={styles.container}>
            <Button title="clique" onPress={aoClicar} color='#2Ba745'/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
    }
})