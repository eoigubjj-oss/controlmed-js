
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

export default function IndexScreen({ navigation }) {
  const [codigo, setCodigo] = useState('');

  function continuar() {
    if (!codigo.trim()) {
      alert('Informe o código da instituição.');
      return;
    }

    // Depois, aqui você poderá validar o código com o banco de dados.
    alert('Código informado: ' + codigo);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#F8F9FA" barStyle="dark-content" />

      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Logo */}
        <View style={styles.logoArea}>
          <View style={styles.logoIcon}>
            <MaterialCommunityIcons
              name="pill"
              size={49}
              color="#00BFC0"
            />
            <Ionicons
              name="bar-chart"
              size={28}
              color="#00BFC0"
              style={styles.logoChart}
            />
          </View>

          <Text style={styles.logoText}>
            med<Text style={styles.logoHighlight}>Control</Text>
          </Text>

          <Text style={styles.tagline}>
            PREVINE FALTAS. SALVA VIDAS.
          </Text>
        </View>

        {/* Ícone do hospital */}
        <View style={styles.hospitalArea}>
          <MaterialCommunityIcons
            name="hospital-building"
            size={86}
            color="#050505"
          />
        </View>

        {/* Títulos */}
        <Text style={styles.title}>Acessar sua instituição</Text>

        <Text style={styles.subtitle}>
          informe o código da sua instituição
          {'\n'}para continuar
        </Text>

        {/* Campo do código */}
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="office-building"
            size={20}
            color="#222"
          />

          <TextInput
            style={styles.input}
            placeholder="Código da instituição"
            placeholderTextColor="#111"
            value={codigo}
            onChangeText={setCodigo}
            autoCapitalize="characters"
            returnKeyType="done"
            onSubmitEditing={continuar}
          />
        </View>

        <Text style={styles.helper}>
          o código é fornecido pelo seu hospital.
        </Text>

        {/* Botão continuar */}
        <Pressable
          style={styles.button}
          onPress={continuar}
        >
          <Text style={styles.buttonText}>Continuar</Text>
        </Pressable>

        {/* Ajuda */}
        <Pressable
          style={styles.helpBox}
          onPress={() =>
            alert(
              'Entre em contato com o administrador da sua instituição para solicitar o código.'
            )
          }
        >
          <Text style={styles.helpTitle}>Não tem código?</Text>
          <Text style={styles.helpText}>
            Entre em contato com o administrador
            {'\n'}da sua instituição.
          </Text>
        </Pressable>
      </ScrollView>

      {/* Decoração inferior */}
      <View pointerEvents="none" style={styles.bottomDecoration}>
        <View style={styles.turquoiseWave} />
        <View style={styles.blueWave} />
        <View style={styles.cornerDecoration} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },

  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 13,
    paddingTop: 30,
    paddingBottom: 115,
  },

  logoArea: {
    alignItems: 'center',
    marginBottom: 8,
  },

  logoIcon: {
    width: 85,
    height: 72,
    borderBottomWidth: 4,
    borderBottomColor: '#00BFC0',
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  logoChart: {
    marginLeft: -7,
    marginTop: 23,
  },

  logoText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#172B46',
    letterSpacing: -0.7,
    marginTop: 1,
  },

  logoHighlight: {
    color: '#00BFC0',
  },

  tagline: {
    fontSize: 6.5,
    letterSpacing: 1.4,
    color: '#526B8D',
    fontWeight: '700',
    marginTop: 2,
  },

  hospitalArea: {
    height: 93,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },

  title: {
    color: '#050505',
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 0,
  },

  subtitle: {
    color: '#8C9CB4',
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 13,
    marginTop: 7,
    marginBottom: 18,
  },

  inputContainer: {
    width: '100%',
    height: 29,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  input: {
    flex: 1,
    height: '100%',
    color: '#111',
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 7,
    paddingVertical: 0,
  },

  helper: {
    color: '#858585',
    fontSize: 9,
    fontWeight: '600',
    marginTop: 7,
  },

  button: {
    width: '100%',
    height: 30,
    backgroundColor: '#00BDB8',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 39,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },

  helpBox: {
    width: '95%',
    minHeight: 41,
    backgroundColor: '#E6F7F8',
    marginTop: 18,
    paddingVertical: 5,
    paddingHorizontal: 30,
  },

  helpTitle: {
    color: '#00AEB8',
    fontSize: 9,
    fontWeight: '800',
  },

  helpText: {
    color: '#7796B4',
    fontSize: 8,
    lineHeight: 10,
    marginTop: 2,
  },

  bottomDecoration: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 85,
    overflow: 'hidden',
  },

  turquoiseWave: {
    position: 'absolute',
    bottom: -42,
    left: -45,
    width: 235,
    height: 105,
    backgroundColor: '#00BFC0',
    borderTopRightRadius: 110,
    transform: [{ rotate: '12deg' }],
  },

  blueWave: {
    position: 'absolute',
    bottom: -57,
    left: -52,
    width: 240,
    height: 100,
    backgroundColor: '#063451',
    borderTopRightRadius: 135,
    transform: [{ rotate: '15deg' }],
  },

  cornerDecoration: {
    position: 'absolute',
    right: -15,
    bottom: -19,
    width: 57,
    height: 90,
    borderWidth: 3,
    borderColor: '#E5F0FC',
    borderRadius: 12,
  },
});
