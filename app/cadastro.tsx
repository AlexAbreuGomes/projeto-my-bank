import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"
import { useForm, Controller } from "react-hook-form"
import { LoginFormData } from "../types/typeApps"


export default function cadastrar(){

    const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>();


    function singIn(data: LoginFormData) {
      console.log(data)
  
    }

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <View >
                <View style={styles.topScreen}>
                    <View>
                        <Image
                        source={require('../assets/speech-bubble (1).png')}
                        style={styles.logoChat}
                        />  
                    </View>
                    <View style={styles.titleCenterLogo}>
                        <Image
                        source={require('../assets/730d0f52-2f34-4f9b-bd30-6ec49a5a6880.png')}
                        style={styles.logo}
                        />
                        <Text style={styles.title}>
                            SICOOB
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.buttonExit}>
                            Sair
                        </Text>

                    </View>

                </View>
                <View style={styles.textTopBackground}>
                    <Text style={styles.textTop}>
                        Abertura de Conta
                    </Text>
                </View>
                
            </View>

            <View >
                <Text style={styles.textItroduction} >
                    Que bom ter você por aqui!
                </Text>
                <Text style={styles. textDescription}>
                    Vamos iniciar a abertura da sua conta. Primeiro, informe qual tipo de xonta você quer abrir:
                </Text>
            </View>

            <View style={styles.individuals}>
                <View>
                    <Text style={styles.accountText}>
                        conta 
                    </Text>
                    <Text style={styles.typeAccountText}>
                        pessoal
                    </Text>
                    <Text>
                        PF
                    </Text>
                </View>
                <View>
                    <Image
                    
                    />
                </View>
            </View>
            <View style={styles.individuals}>
                <View>
                    <Text style={styles.accountText}>
                        conta 
                    </Text>
                    <Text style={styles.typeAccountText}>
                        Juridica
                    </Text>
                    <Text>
                        PJ
                    </Text>
                </View>
                <View>
                    <Image
                    
                    />
                </View>
            </View>
            
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    safe:{
        backgroundColor:'#003641'
    },

    topScreen:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        padding: 10,
        height:50,
        backgroundColor: '#003641',
    },

    textTopBackground:{
        width: "100%",
        height: 30,
        textAlign:"center",
        justifyContent:'center',
        alignItems:'center',
        color: '#FFFFFF', // Texto branco,
        backgroundColor:'#014f5f',
        borderBottomWidth: 4,
        borderBottomColor: '#48ff00', 
    },

    textTop:{
        fontSize: 12,
        color: '#ffffff'


    },

    titleCenterLogo:{
        height: 50,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center', // Alinha verticalmente os elementos no centro
        marginLeft: -30,
    },

    title:{
        textAlign: 'center',
        fontSize:18,
        fontWeight:'bold',
        color: '#FFFFFF', // Texto branco,
        marginLeft: -14, // Remover esta margem se não quiser nenhum espaçamento
    },

    logoChat:{
        width: 30,
        height:30,
    },

    logo: {
        width: 50,
        height: 50,
        marginRight: 0, // Certifique-se que não haja margem aqui
      },

      buttonExit:{
        fontSize: 16,
        textAlign:'center',
        color: '#FFFFFF', // Texto branco,
      },

      textItroduction:{
        fontSize: 25,
        fontWeight:'bold',
        color:'#003641',
        marginLeft: 20,
        marginTop: 25,
        marginBottom: 20,

      },

      textDescription:{
        fontSize: 16,
        width: '90%',
        color:'#003641',
        marginLeft: 20,
      },

      individuals:{
        flexDirection:'row',
        width:'90%',
        height: 80,
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'center',
        alignSelf: 'center', // Centraliza a View no container principal
        marginTop: 20,       // Adiciona um pequeno espaçamento superior
        borderWidth: 2,
        color: 'black'
      },

      accountText:{
        fontSize: 16,
        color:'#003641',
      },


      typeAccountText:{
        fontSize: 16,
        color:'#003641',
        fontWeight:'bold'
      },
});
