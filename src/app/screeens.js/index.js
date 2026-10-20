
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
    useWindowDimensions,
    View,
} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const { height } = useWindowDimensions();

  function entrar() {
    if (!email.trim() || !senha) {
      Alert.alert(
        'Atenção',
        'Preencha seu e-mail e sua senha.'
      );
      return;
    }

    Alert.alert(
      'Login',
      'Os campos foram preenchidos. A autenticação ainda precisa ser conectada.'
    );
  }

  function recuperarSenha() {
    Alert.alert(
      'Recuperar senha',
      'A recuperação de senha será implementada na próxima etapa.'
    );
  }

  function entrarInstituicao() {
    Alert.alert(
      'Instituição',
      'A entrada institucional será implementada na próxima etapa.'
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor="#00213D"
        barStyle="light-content"
      />

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          {/* CABEÇALHO AZUL */}
          <View
            style={[
              styles.header,
              { height: Math.max(height * 0.38, 220) },
            ]}
          >
            <View style={styles.topDecoration} />

            <Image
              source={require('../../../assets/images/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          {/* ÁREA DE LOGIN */}
          <View style={styles.formContainer}>
            <Text style={styles.title}>
              Bem-vindo !
            </Text>

            <Text style={styles.subtitle}>
              Acesse sua conta e continue gerenciando
              {'\n'}
              o estoque do seu hospital
            </Text>

            {/* E-MAIL */}
            <View style={styles.fieldContainer}>
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
                accessibilityLabel="E-mail"
              />
            </View>

            {/* SENHA */}
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Senha</Text>

              <TextInput
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
                placeholder=""
                secureTextEntry
                autoCapitalize="none"
                autoComplete="current-password"
                accessibilityLabel="Senha"
              />
            </View>

            {/* ESQUECEU A SENHA */}
            <TouchableOpacity
              style={styles.forgotButton}
              onPress={recuperarSenha}
              activeOpacity={0.7}
            >
              <Text style={styles.forgotText}>
                Esqueceu sua senha ?
              </Text>
            </TouchableOpacity>

            {/* ENTRAR */}
            <TouchableOpacity
              style={styles.loginButton}
              onPress={entrar}
              activeOpacity={0.8}
            >
              <Text style={styles.loginButtonText}>
                Entrar
              </Text>
            </TouchableOpacity>

            {/* DIVISOR */}
            <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>ou</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* ENTRADA INSTITUCIONAL */}
            <TouchableOpacity
              style={styles.institutionButton}
              onPress={entrarInstituicao}
              activeOpacity={0.8}
            >
              <Text style={styles.institutionButtonText}>
                Entrar com instituição
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F8FC',
  },

  container: {
    flex: 1,
    backgroundColor: '#F8F8FC',
  },

  scrollContent: {
    flexGrow: 1,
  },

  header: {
    width: '100%',
    backgroundColor: '#00213D',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  topDecoration: {
    position: 'absolute',
    width: 125,
    height: 125,
    borderRadius: 70,
    backgroundColor: '#06385B',
    opacity: 0.8,
    top: -42,
    left: -62,
  },

  logo: {
    width: '76%',
    height: '76%',
  },

  formContainer: {
    flexGrow: 1,
    backgroundColor: '#F8F8FC',
    paddingHorizontal: 20,
    paddingTop: 52,
    paddingBottom: 24,
  },

  title: {
    color: '#080808',
    fontSize: 19,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    color: '#8B98B0',
    fontSize: 11,
    lineHeight: 15,
    textAlign: 'center',
    marginBottom: 22,
  },

  fieldContainer: {
    marginBottom: 13,
  },

  label: {
    color: '#171717',
    fontSize: 11,
    fontWeight: '700',
    marginLeft: 9,
    marginBottom: 5,
  },

  input: {
    height: 36,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#172333',
  },

  forgotButton: {
    alignSelf: 'flex-end',
    marginTop: -4,
    marginBottom: 13,
    paddingVertical: 2,
  },

  forgotText: {
    color: '#087BFF',
    fontSize: 10,
    fontWeight: '700',
  },

  loginButton: {
    height: 37,
    width: '100%',
    backgroundColor: '#05BDB7',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 14,
  },

  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#DEDEE3',
  },

  dividerText: {
    color: '#8B98B0',
    fontSize: 12,
    fontWeight: '600',
    marginHorizontal: 12,
  },

  institutionButton: {
    height: 33,
    marginHorizontal: 10,
    backgroundColor: '#DADADA',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },

  institutionButtonText: {
    color: '#111111',
    fontSize: 10,
    fontWeight: '700',
  },
});
