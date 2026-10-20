
import { useEffect, useRef, useState } from 'react';

import {
    Image,
    Keyboard,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function VerifyEmailScreen({ navigation, route }) {
  const email = route?.params?.email || 'seu@email.com';

  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [seconds, setSeconds] = useState(58);

  const inputs = useRef([]);

  // Contagem regressiva para reenviar o código
  useEffect(() => {
    if (seconds <= 0) return;

    const timer = setTimeout(() => {
      setSeconds((previous) => previous - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds]);

  const handleCodeChange = (value, index) => {
    // Permite preencher os campos com um código colado
    const digits = value.replace(/\D/g, '');

    if (digits.length > 1) {
      const newCode = [...code];

      digits
        .slice(0, 6 - index)
        .split('')
        .forEach((digit, offset) => {
          newCode[index + offset] = digit;
        });

      setCode(newCode);

      const nextIndex = Math.min(
        index + digits.length,
        5
      );

      inputs.current[nextIndex]?.focus();
      return;
    }

    const newCode = [...code];
    newCode[index] = digits.slice(-1);
    setCode(newCode);

    if (digits && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (event, index) => {
    if (
      event.nativeEvent.key === 'Backspace' &&
      !code[index] &&
      index > 0
    ) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    if (seconds > 0) return;

    setCode(['', '', '', '', '', '']);
    setSeconds(58);
    inputs.current[0]?.focus();

    // Aqui você deverá chamar sua API para enviar
    // um novo código de verificação por e-mail.
  };

  const handleContinue = () => {
    const verificationCode = code.join('');

    if (verificationCode.length !== 6) {
      inputs.current[code.findIndex((digit) => !digit)]?.focus();
      return;
    }

    Keyboard.dismiss();

    // A verificação real deverá ser feita no servidor.
    // Após validar o código, navegue para a próxima tela.
    navigation?.navigate('Home');
  };

  const formatTime = (value) => {
    return `00:${String(value).padStart(2, '0')}`;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor="#F9FAFC"
        barStyle="dark-content"
      />

      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Logotipo */}
          <View style={styles.logoContainer}>
            <Image
              source={require('../../../assets/images/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          {/* Ilustração do e-mail */}
          <View style={styles.illustration}>
            <View style={styles.envelopeCircle}>
              <Ionicons
                name="mail"
                size={76}
                color="#07345B"
              />

              <View style={styles.envelopeBadge}>
                <Ionicons
                  name="checkmark"
                  size={24}
                  color="#FFFFFF"
                />
              </View>

              <View style={styles.sparkleOne} />
              <View style={styles.sparkleTwo} />
            </View>
          </View>

          {/* Título e descrição */}
          <Text style={styles.title}>
            Verifique seu e-mail
          </Text>

          <Text style={styles.description}>
            Enviamos um código de verificação para
          </Text>

          <Text style={styles.email}>
            {email}
          </Text>

          <Text style={styles.instruction}>
            Digite o código abaixo para continuar.
          </Text>

          {/* Campos do código */}
          <View style={styles.codeContainer}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => {
                  inputs.current[index] = ref;
                }}
                style={[
                  styles.codeInput,
                  digit ? styles.filledInput : null,
                ]}
                value={digit}
                onChangeText={(value) =>
                  handleCodeChange(value, index)
                }
                onKeyPress={(event) =>
                  handleKeyPress(event, index)
                }
                keyboardType="number-pad"
                maxLength={6}
                selectTextOnFocus
                textAlign="center"
                caretHidden
                accessibilityLabel={`Dígito ${index + 1} do código`}
              />
            ))}
          </View>

          {/* Reenvio do código */}
          <View style={styles.resendContainer}>
            <Text style={styles.missingCode}>
              Não recebeu o código
            </Text>

            <TouchableOpacity
              onPress={handleResend}
              disabled={seconds > 0}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.resendText,
                  seconds > 0 && styles.disabledResend,
                ]}
              >
                {seconds > 0
                  ? `Reenviar código em ${formatTime(seconds)}`
                  : 'Reenviar código'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Dica de segurança */}
          <View style={styles.securityBox}>
            <Ionicons
              name="alert-circle-outline"
              size={25}
              color="#8EDBE5"
            />

            <View style={styles.securityTextContainer}>
              <Text style={styles.securityTitle}>
                Dicas de segurança
              </Text>

              <Text style={styles.securityDescription}>
                Verifique também sua caixa de spam, o e-mail
                pode ter sido direcionado para lá.
              </Text>
            </View>
          </View>

          {/* Botão continuar */}
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
            activeOpacity={0.85}
          >
            <LinearGradient
              colors={['#00C6AE', '#007BFF']}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={styles.gradient}
            >
              <Text style={styles.continueText}>
                Continuar
              </Text>

              <Ionicons
                name="arrow-forward"
                size={25}
                color="#FFFFFF"
                style={styles.arrow}
              />
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>

        {/* Elementos decorativos inferiores */}
        <View
          pointerEvents="none"
          style={styles.bottomDecoration}
        >
          <View style={styles.darkWave} />
          <View style={styles.lightWave} />

          <Ionicons
            name="add"
            size={145}
            color="#E5EEFC"
            style={styles.plusDecoration}
          />
        </View>
      </View>
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
    overflow: 'hidden',
  },

  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 19,
    paddingBottom: 115,
  },

  logoContainer: {
    width: 190,
    height: 143,
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  illustration: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 15,
  },

  envelopeCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#EDF5FA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  envelopeBadge: {
    position: 'absolute',
    top: 25,
    right: 18,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#00BFAE',
    borderWidth: 3,
    borderColor: '#EDF5FA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  sparkleOne: {
    position: 'absolute',
    width: 2,
    height: 13,
    backgroundColor: '#07345B',
    top: 13,
    right: 28,
    transform: [{ rotate: '-12deg' }],
  },

  sparkleTwo: {
    position: 'absolute',
    width: 2,
    height: 9,
    backgroundColor: '#07345B',
    top: 20,
    right: 17,
    transform: [{ rotate: '35deg' }],
  },

  title: {
    fontSize: 21,
    fontWeight: '800',
    color: '#062D56',
    textAlign: 'center',
    marginBottom: 7,
  },

  description: {
    fontSize: 11.5,
    color: '#7184A5',
    textAlign: 'center',
    lineHeight: 17,
  },

  email: {
    fontSize: 11.5,
    fontWeight: '700',
    color: '#102C4B',
    textAlign: 'center',
  },

  instruction: {
    fontSize: 11.5,
    color: '#7184A5',
    textAlign: 'center',
    marginTop: 2,
    marginBottom: 17,
  },

  codeContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 7,
    marginBottom: 15,
  },

  codeInput: {
    flex: 1,
    minWidth: 0,
    height: 44,
    borderWidth: 1,
    borderColor: '#A5A5A5',
    borderRadius: 9,
    backgroundColor: '#FAFBFC',
    color: '#092F55',
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },

  filledInput: {
    borderColor: '#00BDAE',
    borderWidth: 1.5,
  },

  resendContainer: {
    alignItems: 'center',
    marginBottom: 17,
  },

  missingCode: {
    fontSize: 10,
    color: '#8B9BB6',
    marginBottom: 3,
  },

  resendText: {
    fontSize: 10,
    color: '#006EFF',
    fontWeight: '600',
  },

  disabledResend: {
    color: '#006EFF',
  },

  securityBox: {
    width: '100%',
    minHeight: 50,
    borderRadius: 11,
    backgroundColor: '#E9FCFA',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
    paddingVertical: 9,
    gap: 11,
    marginBottom: 15,
  },

  securityTextContainer: {
    flex: 1,
  },

  securityTitle: {
    fontSize: 10,
    color: '#008BA4',
    marginBottom: 2,
    fontWeight: '500',
  },

  securityDescription: {
    fontSize: 8.5,
    lineHeight: 12,
    color: '#7B9298',
  },

  continueButton: {
    width: '100%',
    height: 35,
    borderRadius: 22,
    overflow: 'hidden',
  },

  gradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  continueText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },

  arrow: {
    position: 'absolute',
    right: 12,
  },

  bottomDecoration: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 120,
    overflow: 'hidden',
    zIndex: -1,
  },

  darkWave: {
    position: 'absolute',
    left: -55,
    bottom: -98,
    width: 350,
    height: 170,
    borderRadius: 100,
    backgroundColor: '#003A5B',
    transform: [{ rotate: '18deg' }],
  },

  lightWave: {
    position: 'absolute',
    left: -105,
    bottom: -100,
    width: 320,
    height: 155,
    borderRadius: 90,
    backgroundColor: '#00BFC5',
    transform: [{ rotate: '32deg' }],
  },

  plusDecoration: {
    position: 'absolute',
    right: -27,
    bottom: -40,
    opacity: 0.95,
  },
});
