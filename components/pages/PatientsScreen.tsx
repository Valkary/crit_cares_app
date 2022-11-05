import { FC, useContext } from "react";
import { View } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { ServerContext } from "../../contexts/ServerContext";
import { UserContext } from "../../contexts/UserContext";

const Patients: FC = () => {
  const serverUrl = useContext(ServerContext);
  const { token } = useContext(UserContext);

  const fetchPatients = async () => {
    const patients = await axios.get(`${serverUrl}/patients/get_all`, { headers: { Authorization: `Bearer ${token}` } });
    return patients;
  }

  const { isLoading, isError, isSuccess, error, data } = useQuery(['patients'], fetchPatients);

  const patients = data?.data?.content ?? null;

  return (
    <Layout style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      {isLoading && <Text>Cargando pacientes...</Text>}
      {isError && <Text>{`${JSON.stringify(error)}`}</Text>}
      {(isSuccess && patients !== null) &&
        patients.map((patient: any) => {
          const { id, first_names, last_names } = patient;

          return (
            <View key={id} style={{ width: "90%", display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} >
                <Text>{`${first_names} ${last_names}`}</Text>
              </View>
              <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }} >
                <Button size='tiny'>AGENDAR</Button>
                <Button size='tiny'>HISTORIAL</Button>
              </View>
            </View>
          );
        })
      }
    </Layout>
  );
};

export default Patients;
