import React from 'react'
import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import { Button, DefaultTheme, Text, TextInput } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

const Logo = require('../../asset/lol.png')

const { height, width } = Dimensions.get('window')

const BRAND_COLORS = {
  GREEN: '#4CAF50',
  ORANGE: '#FF9800',
  BACKGROUND: '#F7F7F0',
  TEXT_DARK: '#333333',
  GRAY_LIGHT: '#F5F5F5',
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: BRAND_COLORS.GREEN,
    background: BRAND_COLORS.BACKGROUND,
    text: BRAND_COLORS.TEXT_DARK,
    placeholder: '#A1A1A1',
  },
  roundness: 6,
}

export const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={BRAND_COLORS.BACKGROUND} barStyle="dark-content" />
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <Image source={Logo} style={styles.logo} resizeMode='contain'/>
          <Text variant="headlineLarge" style={styles.title}>
            SmartMenu
          </Text>
          <Text variant="bodyMedium" style={styles.subtitle}>
            Gestiona tu restaurante de forma inteligente
          </Text>
        </View>

        <View style={styles.formContainer}>
          <TextInput
            mode="outlined"
            label="Correo Electrónico"
            placeholder="nombre@restaurante.com"
            keyboardType="email-address"
            autoCapitalize="none"
            left={<TextInput.Icon icon="email-outline" />}
            outlineColor="#E0E0E0"
            activeOutlineColor={BRAND_COLORS.GREEN}
            style={styles.input}
            theme={theme}
          />

          <TextInput
            mode="outlined"
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            secureTextEntry
            left={<TextInput.Icon icon="lock-outline" />}
            right={<TextInput.Icon icon="eye-outline" />}
            outlineColor="#E0E0E0"
            activeOutlineColor={BRAND_COLORS.GREEN}
            style={styles.input}
            theme={theme}
          />

          <Text style={styles.forgotPassword}>
            ¿Olvidaste tu contraseña?
          </Text>

          <Button
            mode="contained"
            onPress={() => console.log('Iniciar sesión')}
            buttonColor={BRAND_COLORS.GREEN}
            textColor="#fff"
            style={styles.button}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
          >
            Iniciar Sesión
          </Button>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>o</Text>
            <View style={styles.dividerLine} />
          </View>

          <Button
            mode="outlined"
            onPress={() => console.log('Registrarse')}
            textColor={BRAND_COLORS.GREEN}
            style={styles.outlineButton}
            contentStyle={styles.buttonContent}
          >
            Crear cuenta nueva
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BRAND_COLORS.BACKGROUND,
  },
  scrollContent: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: height * 0.04,
  },
  logo: {
    width: width * 0.3,
    height: height * 0.1,
  },
  title: {
    fontWeight: 'bold',
    color: BRAND_COLORS.GREEN,
    marginBottom: 8,
  },
  subtitle: {
    color: BRAND_COLORS.TEXT_DARK,
    opacity: 0.7,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: 'white',
    marginBottom: 16,
  },
  forgotPassword: {
    color: BRAND_COLORS.GREEN,
    textAlign: 'right',
    marginBottom: 24,
    fontSize: 14,
    fontWeight: '500',
  },
  button: {
    borderRadius: 6,
    elevation: 2,
  },
  buttonContent: {
    paddingVertical: 8,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  dividerText: {
    marginHorizontal: 16,
    color: BRAND_COLORS.TEXT_DARK,
    opacity: 0.6,
    fontSize: 14,
  },
  outlineButton: {
    borderRadius: 6,
    borderColor: BRAND_COLORS.GREEN,
    borderWidth: 1.5,
  },
})
