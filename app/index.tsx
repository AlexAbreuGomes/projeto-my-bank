import { router } from 'expo-router'; 
import { ImageBackground, SafeAreaView, StatusBar, Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import { Apps } from '../types/typeApps';
import { data } from '../data/data';
import { AppIndex } from '../components/app-index';
import AuthButton from '../components/button-index';
import { ButtonIndex } from '../types/typeApps';

// Adiciona a função onPress aos botões
const loginButton: ButtonIndex = { title: 'Já sou Sicoob', onPress: login };
const signupButton: ButtonIndex = { title: 'Criar Conta', onPress: cadastro };

export function login (){
    router.replace('/login');
}

export function cadastro (){
    router.navigate('/cadastro');
}

export default function App() { 
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />

            <ImageBackground
                source={{ uri: 'https://play-lh.googleusercontent.com/u6HoHwS_9Fac3CHsgAWWaN60nEw6n-xMiknoRQSy4FrnqHm86cs0R0d_mo5zq4M1bCU=w2560-h1440-rw' }}
                style={styles.image}
            >
                <View style={styles.containerButton}>
                    <View style={styles.backgroundAuthButtonContainer}>
                        <AuthButton button={loginButton} />
                        <AuthButton button={signupButton} />
                    </View>

                    <View style={styles.backgroundContainer}>
                        <View>
                            <Text style={styles.textApp}>Aplicativos do Sicob</Text>
                        </View>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled={true}
                            snapToAlignment="center"
                            decelerationRate="fast"
                        >
                            <View style={styles.appContainer}>
                                {data.map((app: Apps) => (
                                    <AppIndex key={app.id} app={app} />
                                ))}
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

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

    backgroundAuthButtonContainer:{
        flexDirection:'row',
        gap:3,

    },

    backgroundContainer: {
        flexDirection: 'column',
        width: '100%',
        height: 140,           
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
    },
});

