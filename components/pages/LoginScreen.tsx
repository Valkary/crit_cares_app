import { Layout, Text, Input, Button, Spinner } from "@ui-kitten/components";
import Icon from "react-native-vector-icons/Feather";
import { useState, useContext } from "react";
import { ServerContext } from "../../contexts/ServerContext";
import { UserContext } from "../../contexts/UserContext";
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";

import { useMutation } from "@tanstack/react-query";
import CritCaresLogo from "../atoms/CritCaresLogo";

const LoadingIndicator = (props: any) => (
  <View style={[props.style, styles.indicator]}>
    <Spinner size='small' />
  </View>
);

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const serverUrl = useContext(ServerContext);
  const { setToken } = useContext(UserContext);

  const renderIcon = (props: any) => (
    <TouchableWithoutFeedback onPress={() => setSecureTextEntry(!secureTextEntry)} >
      <Icon 
        size={20}
        name={secureTextEntry ? 'eye' : 'eye-off'}
        {...props}
      />
    </TouchableWithoutFeedback>
  );

  interface loginData {
    user_id: number,
    pass: string
  }

  const { isError, isLoading, isSuccess, mutate, data } = useMutation((loginData: loginData) => {
    return axios.post(`${serverUrl}/users/login`, loginData);
  });

  if (isSuccess) {
    const { message, success } = data?.data;

    if (success) {
      setToken(message);
    } 
  }

  return (
    <Layout style={{ flex: 1 }}>
      <KeyboardAwareScrollView contentContainerStyle={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: '7.5%' }}>
        <View style={{ marginBottom: "15%" }}>
          <CritCaresLogo width={250} />
        </View>
        <Input
          label={evaProps => <Text {...evaProps}>Nombre de usuario</Text>}
          value={username}
          onChangeText={setUsername}
          status={isError ? 'danger' : 'basic'}
        />
        <Input
          label={evaProps => <Text {...evaProps}>Contraseña</Text>}
          value={password}
          onChangeText={setPassword}
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          status={isError ? 'danger' : 'basic'}
          caption={isError ? 'Nombre de usuario o contraseña incorrectos' : ''}
        />
        <View style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "flex-end", paddingTop: "5%" }}>
          <Button
            onPress={() => mutate({ user_id: parseInt(username, 10), pass: password })}
            accessoryLeft={isLoading ? LoadingIndicator : <></>}
            appearance="outline"
          >
            {isLoading ? "Ingresando..." : "Iniciar sesion"}
          </Button>
        </View>
      </KeyboardAwareScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  }
});

export default LoginScreen;
