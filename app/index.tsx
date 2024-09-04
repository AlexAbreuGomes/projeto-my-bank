import { useNavigation } from 'expo-router'; // Importa os componentes Stack e useNavigation do pacote 'expo-router'
import { ImageBackground, SafeAreaView, StatusBar, Text, View, StyleSheet, Button, ScrollView } from 'react-native'; // Importa os componentes Text e View do pacote 'react-native'
import { useEffect } from 'react'; // Importa o hook useEffect do pacote 'react'

export default function Home() { // Declaração da função Home como export default
    const navigation = useNavigation(); // Atribui o valor retornado pelo hook useNavigation à constante navigation

    useEffect(() => { // Inicia o hook useEffect
        navigation.setOptions({ headerShown: false }); // Configura a opção headerShown como false na navegação
    }, [navigation]); // Define a dependência do useEffect como a constante navigation

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            
            <ImageBackground
                source={{ uri: 'https://play-lh.googleusercontent.com/u6HoHwS_9Fac3CHsgAWWaN60nEw6n-xMiknoRQSy4FrnqHm86cs0R0d_mo5zq4M1bCU=w2560-h1440-rw' }}
                style={styles.image}
            >
                <View style={styles.containerButton}>
                    <View style={styles.authButtonContainer}>
                        <Button title="Login" onPress={() => {}} />
                        <Button title="Criar Conta" onPress={() => {}} />
                    </View>
                
                    
                    <View style={styles.backgroundContainer}>
                        <View style={styles.appRedirectContainer}>
                            <Text style={styles.textApp}>Aplicativos Sicob</Text>
                        </View>
                        <View>
                            <Button title="App" onPress={() => {}} />
                            <Button title="App" onPress={() => {}} />
                            <Button title="App" onPress={() => {}} />
                            <Button title="App" onPress={() => {}} />
                            <Button title="App" onPress={() => {}} />
                        </View>
                    </View>
               </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

// A função Home é exportada como padrão
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerButton: {
        justifyContent:"flex-end",
    },

    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        
    },

    appRedirectContainer: {
        flexDirection: 'column',
        
       
    },

    authButtonContainer: {
        flexDirection: 'row',
        gap: 3,
        justifyContent: 'center',
        
    },

    backgroundContainer: {        
        flexDirection: 'column',
        width: '100%',
        height: 100,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
       
    },

    textApp: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },

    


});
