
import { View } from "react-native"
import { useForm, Controller } from "react-hook-form"
import { LoginFormData } from "../types/typeApps"


export default function Login(){
    const {control, handleSubmit, formState: { errors } } = useForm<LoginFormData>();


    function singIn(data: LoginFormData){
        console.log(data)

    }
  return(
    
    <View>
        <View>
            
        </View>

    </View>
  )  
};