import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

import Produtos from '../Produtos'

export default function Footer() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR:</Text>
            <View style={{flexDirection: 'row'}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{marginHorizontal: 10}}>
                        <Produtos img={require('../../assets/khald.jpg')} coast="R$ 110,90">
                            Boneco de Ação Khal Drogo Game of Thrones
                        </Produtos>
                    </View>
                    <View style={{marginHorizontal: 10}}>
                        <Produtos img={require('../../assets/canecadead.jpg')} coast="R$ 99,90">
                            Caneca 3D Deadpool 
                        </Produtos>
                    </View><View style={{marginHorizontal: 10}}>
                        <Produtos img={require('../../assets/relogiomm.jpg')} coast="R$ 63,90">
                            Relógio de Parede Mulher Maravilha
                        </Produtos>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingBottom: 20
    },

    title:{
        fontSize: 20,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%',
    }
})
