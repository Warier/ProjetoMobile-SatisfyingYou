import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet  } from 'react-native';
import { globalStyles } from '../style/globalStyles';
import Botao from '../components/Botao';
import Input from '../components/Input copy';

const NovaConta = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (inputEmail) => {
    // Expressão regular para validar um e-mail
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(inputEmail)) {
      setErrorMessage('E-mail inválido');
    } else {
      setErrorMessage('');
    }
  };

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setErrorMessage('O campo repetir senha difere da senha');
    } else {
      setErrorMessage('');
    }
  };

  const goToLogin = () => {
    props.navigation.navigate('Carnaval')
  }

  return (
    <View style={globalStyles.root}>
      <View style={styles.containerNovaConta}>

        <View>
          <Text style={globalStyles.label}>E-mail</Text>
          <TextInput
            style={globalStyles.txtInput}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              validateEmail(text); // Chama a função de validação ao digitar
            }}
          />
        </View>

        <View>
          <Text style={globalStyles.label}>Senha</Text>
          <TextInput
            style={globalStyles.txtInput}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        
        <View>
          <Text style={globalStyles.label}>Repetir Senha</Text>
          <TextInput
            style={globalStyles.txtInput}
            secureTextEntry
            value={confirmPassword}
            onChangeText={(text) => {
              setConfirmPassword(text);
              handleRegister(text); // Chama a função de validação ao digitar
            }}
          />
          {errorMessage ? <Text style={globalStyles.error}>{errorMessage}</Text> : null}
        </View>
        <View style={styles.buttonContainer}>
          <Botao texto="CADASTRAR"/>
        </View>  
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  containerNovaConta: {
    width: '70%',
    flexDirection: 'column',
  },

  buttonContainer: {
    width: '100%',
    marginTop: 20,
    backgroundColor: 'red'
  }

});

export default NovaConta;