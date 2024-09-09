export type Apps = {
    id: number;
    name: string;
    icon: string;
    link: string; 
};

export type LoginFormData = {
    id: number;
    name: string;
    tipoConta: string;
    titular: string;
    coop: string;
    contaCorrente: number;
    password: string;
}

export type ButtonIndex = {
    onPress: () => void;
    title: string;
}