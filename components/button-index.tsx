
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
                        backgroundColor:pressed 
                        ? '#48ff00' 
                        : 'rgba(0, 54, 65, 0.7)'
                    },
                styles.backgroundAuthButtonContainer,
            ]}
        >
            <Text style={styles.buttonText}>
                {button.title}
            </Text> 
        </Pressable>
    );
}

const styles = StyleSheet.create({

    backgroundAuthButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        width: '50%',
        height: 40,
        gap: 10,
        marginBottom: 2,
        
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center', // Centraliza o texto dentro do Text
    },
});





