import { SafeAreaView, StatusBar, StyleSheet, View, Text, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { LoginFormData } from "../types/typeApps";

export default function Login() {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  function singIn(data: LoginFormData) {
    console.log(data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View>
        {/* Controller para o campo "id" */}
        <Controller
          control={control}
          name="id"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="ID"
                keyboardType="numeric"  // Para entrada numérica
                onBlur={onBlur}
                onChangeText={value => onChange(Number(value))}  // Converte para número
                value={value ? String(value) : ''}  // Converte para string para mostrar no input
              />
              {errors.id && <Text style={styles.error}>ID is required.</Text>}
            </View>
          )}
          rules={{ required: true }}
        />

        {/* Controller para o campo "username" */}
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Username"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              {errors.username && <Text style={styles.error}>Username is required.</Text>}
            </View>
          )}
          rules={{ required: true }}
        />

        {/* Controller para o campo "tipoConta" */}
        <Controller
          control={control}
          name="tipoConta"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Tipo de Conta"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              {errors.tipoConta && <Text style={styles.error}>Tipo de Conta is required.</Text>}
            </View>
          )}
          rules={{ required: true }}
        />

        {/* Controller para o campo "titular" */}
        <Controller
          control={control}
          name="titular"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Titular"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              {errors.titular && <Text style={styles.error}>Titular is required.</Text>}
            </View>
          )}
          rules={{ required: true }}
        />

        {/* Controller para o campo "coop" */}
        <Controller
          control={control}
          name="coop"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Coop"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              {errors.coop && <Text style={styles.error}>Coop is required.</Text>}
            </View>
          )}
          rules={{ required: true }}
        />

        {/* Controller para o campo "contaCorrente" */}
        <Controller
          control={control}
          name="contaCorrente"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Conta Corrente"
                keyboardType="numeric"
                onBlur={onBlur}
                onChangeText={value => onChange(Number(value))}  // Converte para número
                value={value ? String(value) : ''}  // Converte para string para exibir no input
              />
              {errors.contaCorrente && <Text style={styles.error}>Conta Corrente is required.</Text>}
            </View>
          )}
          rules={{ required: true }}
        />

        {/* Controller para o campo "password" */}
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              {errors.password && <Text style={styles.error}>Password is required.</Text>}
            </View>
          )}
          rules={{ required: true }}
        />

        {/* Botão de login */}
        <Button title="Sign In" onPress={handleSubmit(singIn)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});
