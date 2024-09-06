import { router } from 'expo-router'; // Importa os componentes Stack e useNavigation do pacote 'expo-router'
import { ImageBackground, SafeAreaView, StatusBar, Text, View, StyleSheet, Button, ScrollView } from 'react-native'; // Importa os componentes Text e View do pacote 'react-native'
import { Apps } from '../types/typeApps';
import { data } from '../data/data';
import { AppIndex } from '../components/app-index';

export default function App() { 
    function login (){
        router.navigate('/login')
    }
    function cadastro (){
        router.navigate('/cadastro')
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />


            <ImageBackground
                source={{ uri: 'https://play-lh.googleusercontent.com/u6HoHwS_9Fac3CHsgAWWaN60nEw6n-xMiknoRQSy4FrnqHm86cs0R0d_mo5zq4M1bCU=w2560-h1440-rw' }}
                style={styles.image}
            >
                <View style={styles.containerButton}>
                    <View style={styles.backgroundAuthButtonContainer}>
                        <Button title="Login" onPress= { login } />
                        <Button title="Criar Conta" onPress={ cadastro } />
                    </View>


                    <View style={styles.backgroundContainer}>
                        <View>
                            <Text style={styles.textApp} >Aplicativos do Sicob</Text>
                        </View>
                        <ScrollView
                            horizontal={true} // Define que a lista será exibida horizontalmente
                            showsHorizontalScrollIndicator={false} // Oculta o indicador de rolagem horizontal
                            pagingEnabled={true} // Habilita o comportamento de "paging" para centralizar cada item
                            snapToAlignment="center" // Alinha o item centralizado após a rolagem
                            decelerationRate="fast" // Faz a rolagem parar rapidamente para uma experiência mais fluida
                        >
                            <View style={styles.appContainer}>
                                {data.map((app: Apps) => ( // Mapeia o array de aplicativos e renderiza cada um
                                    <AppIndex key={app.id} app={app} /> // Chama o componente AppIndex e passa o aplicativo como propriedade
                                ))}
                            </View>
                        </ScrollView>
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
        width: '100%',
        height: '100%',
    },
    containerButton: {
        justifyContent: "flex-end",
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    authButtonContainer: {
        flexDirection: 'row',
        gap: 3,
        justifyContent: 'center',
    },
    backgroundAuthButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: 40,
        gap: 3,
        marginBottom: 2,
        backgroundColor: 'rgba(0, 4, 0, 0.5)',
    },
    backgroundContainer: {
        flexDirection: 'column',
        width: '100%',
        height: 140,            // Aumente ligeiramente a altura para ajustar o conteúdo

        justifyContent: "flex-end",
        backgroundColor: 'rgba(0, 4, 0, 0.5)',
    },
    textApp: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: "400",
        color: 'white',
        margin: 5,
    },
    appContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // Aumenta o espaço entre os aplicativos

    },
});

