
import { Pressable, Text, StyleSheet, Button } from 'react-native';
import { ButtonIndex } from '../types/typeApps'


type Props = { 
    button: ButtonIndex;
   
}


export default function AuthButton({ button }: Props) {
    return (
        <Pressable
            onPress={button.onPress}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed
                     ? '#48ff00' 
                     : 'rgba(0, 0, 0, 0)', 
                },
                styles.backgroundAuthButtonContainer,
            ]}
        >
            <Text style={styles.buttonText}>{button.title}</Text> {/* Exibe o título do botão */}
        </Pressable>
    );
}

const styles = StyleSheet.create({

    backgroundAuthButtonContainer: {
        width:'50%',
        flexDirection: 'row',
        justifyContent: 'center', // Centraliza o conteúdo horizontalmente
        alignItems: 'center', // Centraliza o conteúdo verticalmente
        height: 40,
        gap: 3,
        marginBottom: 2,
        borderRadius: 5, // Arredondando as bordas
        paddingHorizontal: 20, // Adiciona algum padding horizontal para melhorar o visual
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center', // Centraliza o texto dentro do Text
    },
});





