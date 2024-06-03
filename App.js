import { StatusBar } from 'expo-status-bar';
import { bancoExterno } from './firebaseConnection';
import { useEffect, useState } from 'react';
import { doc, setDoc, collection, onSnapshot } from 'firebase/firestore';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';

export default function App() {

  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    // Escuta as mudanças na coleção "funcionários"
    const unsubscribe = onSnapshot(collection(bancoExterno, "funcionários"), (snapshot) => {
      const funcionariosData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setFuncionarios(funcionariosData);
    });

    // Limpa a subscrição ao desmontar o componente
    return () => unsubscribe();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./assets/Fingerprint.gif')} style={styles.gif} />
      <Text style={{fontSize:25, marginBottom: 20}}>Funcionários:</Text>
      {funcionarios.map(funcionario => (
        <View key={funcionario.id} style={styles.funcionario}>
          <Text style={styles.textoLaranja}>Nome: {funcionario.Nome}</Text>
          <Text style={styles.textoLaranja}>CPF: {funcionario.CPF}</Text>
          <Text style={styles.textoLaranja}>Profissão: {funcionario.Profissão}</Text>
        </View>
      ))}
      
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  funcionario: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
  },
  textoLaranja: {
    color: 'black',
  },
  gif: {
    width: 250,
    height: 250,
    marginBottom: 20,
  }
});