import { View, Text, Linking, TouchableOpacity,Image, StyleSheet } from "react-native";
import { Apps } from "../types/typeApps";

type Props = {
    app : Apps;
}

export const AppIndex = (props: Props) => {
    const link = () => {
        const url = props.app.link;
        Linking.openURL(url);
    }
    return (
        <View style={styles.containerApp}>
            <TouchableOpacity onPress={link} style={styles.touchable}>
                <Image
                    source={{ uri: props.app.icon }}
                    style={styles.image}
                    resizeMode="cover"
                />
            </TouchableOpacity>

            <View style={styles.appInfo}>
                <Text style={styles.appIndex}>{props.app.name}</Text>
                </View>
                </View>
    );
}



const styles = StyleSheet.create({
    containerApp: {
        width: 70,           
        height: 90,          
        alignItems: 'center',
       
    
        
       
                 
       
        
    },
    touchable: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 10,
    },
    appInfo: {
        alignItems: 'center',
        maxHeight: 90,  // Limita a altura máxima para evitar aplicativos com nomes compostos ficarem maiores
        justifyContent: 'center',
        marginTop: 5,
       
    },
    appIndex: {
        fontSize: 12,          // Tamanho menor para caber melhor
        color: '#fff',         // Cor branca para o texto
        textAlign: 'center',   // Centraliza o texto
        flexWrap: 'wrap',      // Permite a quebra de linha
        maxWidth: 80,          // Limita a largura máxima do texto
        marginTop: 5,          // Margem superior para dar espaço ao texto em relação à imagem
    },
});



