import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import LoginForm from '../component/LoginForm';


export default function LoginScreen({ navigation }:any) {
  return (
    <View style={styles.container}>
      <LoginForm />
      <Button
        title="Don't have an account? Sign Up"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,

  },
});
