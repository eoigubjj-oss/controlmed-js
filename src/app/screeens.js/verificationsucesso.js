
import {
    Pressable,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function EmailVerification({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />

      <View style={styles.content}>
        {/* Ícone de sucesso */}
        <View style={styles.iconArea}>
          <View style={styles.iconCircle}>
            <Text style={styles.check}>✓</Text>
          </View>

          <View style={[styles.spark, styles.sparkOne]} />
          <View style={[styles.spark, styles.sparkTwo]} />
          <View style={[styles.spark, styles.sparkThree]} />
          <View style={[styles.spark, styles.sparkFour]} />
        </View>

        {/* Título */}
        <Text style={styles.title}>
          Senha alterada{' \n'}com sucesso!
        </Text>

        {/* Mensagem */}
        <Text style={styles.description}>
          Sua senha foi atualizada com sucesso.
          {'\n'}Agora você já pode fazer login e acessar
          {'\n'}o ControlMed.
        </Text>

        {/* Botão de voltar */}
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>
            Voltar para o login
          </Text>
        </Pressable>

        {/* Informação adicional */}
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>
            Verifique sua caixa de entrada
          </Text>

          <Text style={styles.infoText}>
            O código pode levar alguns minutos
            {'\n'}e também pode estar na sua caixa de spam.
          </Text>
        </View>
      </View>

      {/* Decoração inferior */}
      <View style={styles.decoration}>
        <View style={styles.waveLight} />
        <View style={styles.waveBlue} />

        <View style={styles.squareOne} />
        <View style={styles.squareTwo} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 55,
    zIndex: 2,
  },

  iconArea: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 17,
  },

  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#00B3A4',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#00B3A4',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.12,
    shadowRadius: 14,
    elevation: 4,
  },

  check: {
    color: '#FFFFFF',
    fontSize: 31,
    fontWeight: 'bold',
    lineHeight: 36,
  },

  spark: {
    position: 'absolute',
    width: 2,
    height: 8,
    backgroundColor: '#00BDB1',
    borderRadius: 2,
  },

  sparkOne: {
    top: 3,
    left: 24,
    transform: [{ rotate: '-30deg' }],
  },

  sparkTwo: {
    top: 1,
    right: 25,
    transform: [{ rotate: '30deg' }],
  },

  sparkThree: {
    top: 18,
    left: 12,
    transform: [{ rotate: '-65deg' }],
  },

  sparkFour: {
    top: 18,
    right: 12,
    transform: [{ rotate: '65deg' }],
  },

  title: {
    color: '#111111',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 9,
  },

  description: {
    color: '#8998B0',
    fontSize: 7,
    lineHeight: 10,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
  },

  button: {
    width: '100%',
    height: 20,
    backgroundColor: '#00BFAF',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: '700',
  },

  infoBox: {
    width: '100%',
    minHeight: 36,
    backgroundColor: '#E9F9F8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 4,
  },

  infoTitle: {
    color: '#008F91',
    fontSize: 6,
    fontWeight: '700',
    marginBottom: 3,
  },

  infoText: {
    color: '#8499B0',
    fontSize: 5.5,
    lineHeight: 7,
    textAlign: 'center',
  },

  decoration: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 105,
    overflow: 'hidden',
  },

  waveLight: {
    position: 'absolute',
    bottom: -61,
    left: -30,
    width: 230,
    height: 105,
    borderTopRightRadius: 120,
    backgroundColor: '#00A6B9',
    transform: [{ rotate: '14deg' }],
  },

  waveBlue: {
    position: 'absolute',
    bottom: -78,
    left: -45,
    width: 250,
    height: 115,
    borderTopRightRadius: 135,
    backgroundColor: '#003653',
    transform: [{ rotate: '14deg' }],
  },

  squareOne: {
    position: 'absolute',
    right: 16,
    bottom: 7,
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#E2EFFF',
  },

  squareTwo: {
    position: 'absolute',
    right: -7,
    bottom: 30,
    width: 25,
    height: 25,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#E2EFFF',
  },
});
