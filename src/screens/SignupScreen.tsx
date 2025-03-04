import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import SignupForm from '../component/SignupForm';


export default function SignupScreen({ navigation }:any) {
  return (
    <View style={styles.container}>
      <SignupForm />
      <Button
        title="Already have an account? Login"
        onPress={() => navigation.navigate('Login')}
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
