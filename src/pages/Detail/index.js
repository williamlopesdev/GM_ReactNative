import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Button from '../../component/Button';
import Footer from '../../component/Footer'

export default function Detail({ navigation }) {

    navigation.setOptions({
        headerTitle: 'Caneca Justiceiro Ultimate'
    })

    return (
        <ScrollView style={styles.container}>
            <Image
                source={require('../../assets/canecasi2.jpg')}
                style={styles.image}
                resizeMode="cover"
            />
            <View>
                <View>
                    <Text style={[styles.title, { fontSize: 24} ]}>R$ 280,90</Text>
                </View>
                <View opacity={0.4}>
                    <Text style={[styles.title, { fontSize: 30} ]}>Caneca Justiceiro Ultimate</Text>
                </View>
                <View style={styles.textContent}>
                    <Text style={styles.textTitle}>
                        Caneca Justiceiro Ultimate
                    </Text>
                    <Text style={styles.textContent}>
                    Caneca formato justiceiro. bela caneca em formato justiceiro, feita de porcelana perfeita para dar de presente.
                    </Text>
                    <Text style={styles.textList}>
                    Altura: 11cm | Diâmetro: 9cm | Capacidade: 400ml | Peso: 460gr | Material: cerâmica
                    </Text>
                </View>

                

                <Button/>
                <View style={styles.line} />

                <Footer/>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%', 
        backgroundColor: '#fff'
    },
    image:{
        width: '100%'

    },
    title:{
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: '2%'
    },
    textContent:{
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%'
    },
    textTitle:{
        fontSize: 22,
        marginVertical: '2%'
    },
    textList:{
        fontSize: 16,
        lineHeight: 25,
    },
    line:{
        borderWidth: 1,
        borderBottomColor: '#DDD',
        marginVertical: '2%',
    }
    
});