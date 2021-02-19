import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Produtos from '../../component/Produtos';


export default function Home() {

const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                source={require('../../assets/avengerbaixa.jpg')}
                style={styles.image}
                />

                <View style={styles.textContainer}>
                    <Text style={styles.text}>CATEGORIAS</Text>
                    <Text style={[styles.text, { color: '#cececf'}]}>-</Text>
                    <Text style={[styles.text, { color: '#cececf'}]}>GERAL</Text>
                    <TouchableOpacity style={{position:'absolute', right: 0, alignItems: "center"}}>
                        <MaterialIcons 
                            name="filter-list"
                            size={24}
                            color="#000"
                        />

                    </TouchableOpacity>

                </View>
            </View>
            <View style={styles.line}/>

            <ScrollView>
               <Text style={styles.text}>Todos</Text> 
               
               <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
                    <Produtos img={require('../../assets/canecasi.jpg')} coast="R$ 80,90" onClick={() => navigation.navigate('Detail') }>Caneca Justiceiro Ultimate</Produtos>

                    <Produtos img={require('../../assets/canecasoco.jpeg')} coast="R$ 79,75" onClick={() => navigation.navigate('Detail')}>Caneca Justiceiro Soco Inglês</Produtos>
               </View>
               <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
                    <Produtos img={require('../../assets/canecadead.jpg')} coast="R$ 99,90" onClick={() => navigation.navigate('Detail')}>Caneca 3D Deadpool</Produtos>

                    <Produtos img={require('../../assets/chuck.jpg')} coast="R$ 79,75" onClick={() => navigation.navigate('Detail')}>Boneco de Ação Chuck</Produtos>
               </View>
               <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
                    <Produtos img={require('../../assets/frdy.jpg')} coast="R$ 125,90" onClick={() => navigation.navigate('Detail')}>Boneco de Ação Freddy Kruegger</Produtos>

                    <Produtos img={require('../../assets/gfreeza.jpg')} coast="R$ 79,75" onClick={() => navigation.navigate('Detail')}>Boneco de Ação Golden Freeza</Produtos>
               </View>
               <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
                    <Produtos img={require('../../assets/goku.jpg')} coast="R$ 109,90" onClick={() => navigation.navigate('Detail')}>Boneco de Ação Goku SSJ Blue</Produtos>

                    <Produtos img={require('../../assets/khald.jpg')} coast="R$ 65,75" onClick={() => navigation.navigate('Detail')}>Boneco de Ação Khal Drogo - Game of Thrones</Produtos>
               </View>
               <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
                    <Produtos img={require('../../assets/kylo.jpeg')} coast="R$ 81,90" onClick={() => navigation.navigate('Detail')}>Boneco de Ação Kylo Ren</Produtos>

                    <Produtos img={require('../../assets/predador.jpg')} coast="R$ 151,75" onClick={() => navigation.navigate('Detail')}>Boneco de Ação Predador</Produtos>
               </View>
               <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
                    <Produtos img={require('../../assets/relogiomm.jpg')} coast="R$ 63,90" onClick={() => navigation.navigate('Detail')}>Relogio de Parede Mulher Maravilha</Produtos>

                    <Produtos img={require('../../assets/vegeta.jpg')} coast="R$ 79,75" onClick={() => navigation.navigate('Detail')}>Boneco de Ação Vegeta</Produtos>
               </View>


               


            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    header:{
        marginBottom: 8,
    },
    image:{
        width: '100%'
    },
    textContainer:{
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    text:{
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%',
    },
    line:{
        borderBottomColor: '#D8d8d8',
        borderWidth: 2,
    }
    
})