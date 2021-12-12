import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements';


export default function Curriculo({navigation}){
    return (
        <View>
            <Text style={styles.nome}>Marcel Jose Ribeiro</Text>

            <Text style={styles.sub}>Sobre mim:</Text>
            <Text style={styles.descricao}>Sou estudante da Universidade Católica de Pernambuco, onde curso Sistemas para Internt. 
                No momento estou 4°período.Estou estou estagiando como desenvolvedor backend na NTTDATA.</Text>

            <Text style={styles.sub}>Contato:</Text>
            <Text style={styles.descricao}>Celular: (XX)XXXXX-XXXX
                                           Email:mjrcel@gmail.com
                                           </Text>

            <Text style={styles.sub}>Conhecimentos:</Text>
            <Text style={styles.descricao}> -HTML </Text>
            <Text style={styles.descricao}> -CSS</Text>
            <Text style={styles.descricao}> -Git </Text>
            <Text style={styles.descricao}> -JavaScript </Text>
            <Text style={styles.descricao}> -C# </Text>


            <Text style={styles.sub}>Habilidades e Competências:</Text>
            <Text style={styles.descricao}> - Trabalho em equipe</Text>
            <Text style={styles.descricao}> - Esforçado</Text>
            <Text style={styles.descricao}> - Motivado e dedicado </Text>


            <View>
            <Button  style={styles.bt1}  onPress={() => navigation.navigate('Hobbies')}
             title="Hobbies" 
             type='clear'              

             />
            </View>


        </View>
    );
}


const styles = StyleSheet.create ({
   
nome: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',

  },

  sub: {
    fontWeight: 'bold',
    fontSize: 15,
    position: 'relative',
    padding:15,


  },

  bt1: {
    position: 'relative',
    justifyContent:'center',
    alignItems:'center',
    margin:30,
    backgroundColor:'#FFE4C4',
    padding:15,
    borderRadius:20,
  }

})