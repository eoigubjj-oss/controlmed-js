
import { useState } from 'react';
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function LoginScreen ({ navigation }) {
  const [email, setEmail] = useState('');

  function enviarCodigo() {
    if (!email.trim()) {
      Alert.alert('Atenção', 'Digite seu e-mail.');
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (!emailValido) {
      Alert.alert('E-mail inválido', 'Digite um endereço de e-mail válido.');
      return;
    }

    Alert.alert(
      'Solicitação registrada',
      'A tela está pronta visualmente. Para enviar um código real, precisamos conectar o serviço de recuperação de senha.'
    );
  }

  function voltarLogin() {
    if (navigation && navigation.canGoBack()) {
      navigation.goBack();
    } else {
      Alert.alert(
        'Voltar para o login',
        'Conecte esta tela à navegação do aplicativo para retornar ao login.'
      );
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor="#F9FAFC"
        barStyle="dark-content"
      />

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* LOGO */}
          <View style={styles.logoContainer}>
            <Image
              source={require('../../../assets/images/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          {/* TÍTULO */}
          <View style={styles.headingContainer}>
            <Text style={styles.title}>
              Esqueceu sua senha ?
            </Text>

            <Text style={styles.description}>
              Não se preocupe. informe o e-mail
              {'\n'}vinculado à sua conta e enviaremos
              {'\n'}um código de verificação.
            </Text>
          </View>

          {/* CAMPO DE E-MAIL */}
          <View style={styles.form}>
            <Text style={styles.label}>E-mail</Text>

            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder=""
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="email"
              returnKeyType="send"
              onSubmitEditing={enviarCodigo}
              accessibilityLabel="E-mail vinculado à conta"
            />

            {/* ENVIAR CÓDIGO */}
            <TouchableOpacity
              style={styles.sendButton}
              onPress={enviarCodigo}
              activeOpacity={0.8}
            >
              <Text style={styles.sendButtonText}>
                Enviar código
              </Text>
            </TouchableOpacity>
          </View>

          {/* AVISO */}
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>
              Verifique sua caixa de entrada
            </Text>

            <Text style={styles.infoDescription}>
              O código pode levar alguns minutos
              {'\n'}e também pode estar na sua caixa de spam.
            </Text>
          </View>

          {/* VOLTAR */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={voltarLogin}
            activeOpacity={0.7}
          >
            <Text style={styles.backButtonText}>
              Voltar para o login
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9FAFC',
  },

  container: {
    flex: 1,
    backgroundColor: '#F9FAFC',
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 25,
  },

  logoContainer: {
    height: 235,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 175,
    height: 145,
  },

  headingContainer: {
    alignItems: 'center',
    marginTop: 23,
    marginBottom: 32,
  },

  title: {
    color: '#080808',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 14,
  },

  description: {
    color: '#91A0B8',
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '600',
    textAlign: 'center',
  },

  form: {
    width: '100%',
  },

  label: {
    color: '#171717',
    fontSize: 11,
    fontWeight: '700',
    marginLeft: 11,
    marginBottom: 5,
  },

  input: {
    width: '100%',
    height: 34,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D5D5D5',
    borderRadius: 9,
    paddingHorizontal: 12,
    fontSize: 13,
    color: '#172333',
  },

  sendButton: {
    height: 36,
    marginTop: 22,
    borderRadius: 22,
    backgroundColor: '#05BDB7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  infoBox: {
    backgroundColor: '#E8F7F9',
    marginTop: 22,
    minHeight: 50,
    paddingHorizontal: 10,
    paddingVertical: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoTitle: {
    color: '#35A4BE',
    fontSize: 11,
    fontWeight: '700',
    marginBottom: 3,
  },

  infoDescription: {
    color: '#819EBB',
    fontSize: 9,
    lineHeight: 12,
    fontWeight: '500',
    textAlign: 'center',
  },

  backButton: {
    alignSelf: 'center',
    marginTop: 37,
    padding: 5,
  },

  backButtonText: {
    color: '#087BFF',
    fontSize: 14,
    fontWeight: '700',
  },
});
