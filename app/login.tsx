
import { SafeAreaView, StatusBar, StyleSheet, View, Text } from "react-native"
import { useForm, Controller } from "react-hook-form"
import { LoginFormData } from "../types/typeApps"


export default function Login() {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>();


  function singIn(data: LoginFormData) {
    console.log(data)

  }
  return(
    <SafeAreaView>
        <StatusBar/>
        <View>
            <Text>
              tela de login
            </Text>
        </View>
    </SafeAreaView>

)
};

const style= StyleSheet.create({
  constainer:{
    flex: 1,
  },


})