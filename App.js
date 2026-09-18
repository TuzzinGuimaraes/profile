import { useState } from 'react';
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import Button from './src/components/Button';
import Input from './src/components/Input';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('marcos@gmail.com');
  const [editingEmail, setEditingEmail] = useState(false);

  function fecharTeclado() {
    Keyboard.dismiss();
  }

  function submitForm() {
    if (name.trim().length < 3) {
      return Alert.alert('Atenção', 'Nome muito curto.');
    }
    Alert.alert(`Olá, ${name}`);
  }

  function limparNome() {
    setName('');
  }

  function alternarEdicaoEmail() {
    setEditingEmail(!editingEmail);
  }

  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.scrollview} bounces={false}>
          <TouchableWithoutFeedback onPress={fecharTeclado}>
            <SafeAreaView style={styles.container}>
              <StatusBar style="light" />

              <Text style={styles.title}>Perfil</Text>

              <View style={styles.main}>
                <View style={styles.profile}>
                  <TouchableOpacity activeOpacity={0.5} style={styles.btnAvatar}>
                    <Image
                      source={{ uri: 'https://i.pravatar.cc/300?img=12' }}
                      style={styles.img}
                    />
                    <View style={styles.alterarFoto}>
                      <Ionicons name="camera-outline" size={20} color="#00B37E" />
                      <Text style={styles.alterarTxt}>Alterar foto</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={styles.info}>
                  <View>
                    <Input placeholder="Nome" value={name} onChangeText={(text) => setName(text)} />
                    <View style={styles.nameFooter}>
                      <Text style={styles.contador}>{name.length} caracteres</Text>
                      <TouchableOpacity onPress={limparNome} disabled={name.length == 0}>
                        <Text style={[styles.link, name.length == 0 && styles.linkDisabled]}>
                          Limpar
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <Input
                      style={[styles.flex, !editingEmail && styles.inputDisabled]}
                      placeholder="E-mail"
                      value={email}
                      onChangeText={setEmail}
                      editable={editingEmail}
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                    <TouchableOpacity style={styles.btnEditar} onPress={alternarEdicaoEmail}>
                      <Text style={styles.link}>{editingEmail ? 'Concluir' : 'Editar'}</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.info}>
                  <Text style={styles.label}>Alterar senha</Text>
                  <Input
                    placeholder="Senha antiga"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  <Input
                    placeholder="Nova senha"
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>

                <View style={styles.info}>
                  <Button title="Salvar" onPress={submitForm} disabled={name.length == 0} />
                </View>
              </View>
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
  scrollview: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#39393C',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  main: {
    flex: 1,
    backgroundColor: '#121214',
    paddingVertical: 24,
    paddingHorizontal: 40,
  },
  profile: {
    alignSelf: 'center',
    marginVertical: 24,
  },
  btnAvatar: {
    alignItems: 'center',
    gap: 12,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 999,
    borderWidth: 3,
    borderColor: '#00B37E',
  },
  alterarFoto: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  alterarTxt: {
    color: '#00B37E',
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    gap: 16,
    marginTop: 32,
  },
  label: {
    color: '#C4C4CC',
    fontSize: 16,
    fontWeight: '500',
  },
  inputDisabled: {
    backgroundColor: '#202024',
    color: '#C4C4CC',
  },
  nameFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  contador: {
    color: '#7C7C8A',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  flex: {
    flex: 1,
  },
  btnEditar: {
    paddingVertical: 8,
  },
  link: {
    color: '#00B37E',
    fontSize: 14,
    fontWeight: 'bold',
  },
  linkDisabled: {
    opacity: 0.3,
  },
});
