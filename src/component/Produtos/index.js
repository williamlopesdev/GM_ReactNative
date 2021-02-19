import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

export default function Produtos(props) {

    function filterDesc(desc){
        if (desc.length < 27){
           return desc; 
        }
        return `${desc.substring(0, 22)}...`;
    }

    return (
        <TouchableOpacity style={styles.container} onPress={props.onClick}>
            <Image
                source={props.img}
                style={styles.produtosImg}
            />
            <Text style={styles.produtosText}>
               {filterDesc(props.children)} 
            </Text>
                
            <View opacity={0.4}>
                <Text style={styles.produtosText}>
                    {props.coast}
                </Text>
            </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    produtosImg:{
        width: 175,
        height: 175
    },
    produtosText:{
        fontSize: 14,
    }
});