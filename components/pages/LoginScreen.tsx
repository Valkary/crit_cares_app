import { Layout, Text, Input, Button, Spinner } from "@ui-kitten/components";
import { useState, useContext } from "react";
import { ServerContext } from "../../contexts/ServerContext";
import { View, StyleSheet } from 'react-native';
import axios from "axios";

import { useMutation } from "@tanstack/react-query";

const LoadingIndicator = (props) => (
  <View style={[props.style, styles.indicator]}>
    <Spinner size='small' />
  </View>
);

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const serverUrl = useContext(ServerContext);

  interface loginData {
    user_id: number,
    pass: string
  }

  const { isError, isLoading, isSuccess, mutate, error, data } = useMutation((loginData: loginData) => {
    return axios.post(`${serverUrl}/users/login`, loginData);
  });

  if (isError) console.log(error)
  if (isSuccess) console.log("Success!", data?.data);

  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: '7.5%' }}>
      <Input
        label={evaProps => <Text {...evaProps}>Nombre de usuario</Text>}
        value={username}
        onChangeText={setUsername}
      />
      <Input
        label={evaProps => <Text {...evaProps}>Contraseña</Text>}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        onPress={() => mutate({ user_id: 1, pass: "adminssupersecurepwd1" })}
        accessoryLeft={isLoading ? LoadingIndicator : <></>}
        appearance="outline"
      >{isLoading ? "Logging in..." : "Log in"}</Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
