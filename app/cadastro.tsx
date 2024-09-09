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
                    Vamos iniciar a abertura da sua conta. Primeiro, informe qual tipo de conta você quer abrir:
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
                    <Text style={styles.typeText}>
                        PF
                    </Text>
                </View>
                <View>
                    <Image
                    source={require('../assets/profilePf.png')}
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
                    <Text style={styles.typeText}>
                        PJ
                    </Text>
                </View>
                <View>
                    <Image
                     source={require('../assets/profilePj.png')}
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
        width:'90%',
        alignSelf:'center',
        color:'#003641',
        marginTop: 25,
        marginBottom: 20,
        
      },

      textDescription:{
        fontSize: 12,
        width:'90%',
        alignSelf:'center',
        color:'#003641',
        marginBottom:10,
      },

      individuals:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        alignSelf:'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        padding: 15,
        marginVertical: 10, // Gap vertical entre os itens
        width: '90%', // Largura do item (ajuste conforme necessário)
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

      typeText:{
        marginTop: 5,
        color:'#48ff00'
      }


});
