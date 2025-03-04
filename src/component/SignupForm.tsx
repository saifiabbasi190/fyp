import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, Platform, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleSignup = () => {
    if (email && phone && gender && dateOfBirth && password && confirmPassword) {
      if (password !== confirmPassword) {
        Alert.alert('Error', 'Passwords do not match');
        return;
      }
  
      // Collect all user data
      const userData = {
        email,
        phone,
        gender,
        dateOfBirth: dateOfBirth.toLocaleDateString(),
        password,
      };
  
      console.log('User Info:', userData);
  
      Alert.alert(
        'Success',
        `Account created!\n\nEmail: ${email}\nPhone: ${phone}\nGender: ${gender}\nDOB: ${dateOfBirth.toLocaleDateString()}`
      );
    } else {
      Alert.alert('Error', 'Please fill all fields');
    }
  };
  
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#666"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#666"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      
      <View style={styles.radioContainer}>
  <Text style={styles.pickerLabel}>Gender:</Text>
  <View style={styles.radioGroup}>
    <TouchableOpacity
      style={styles.radioButton}
      onPress={() => setGender('male')}
    >
      <View style={styles.radioCircle}>
        {gender === 'male' && <View style={styles.selectedRb} />}
      </View>
      <Text style={styles.radioText}>Male</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.radioButton}
      onPress={() => setGender('female')}
    >
      <View style={styles.radioCircle}>
        {gender === 'female' && <View style={styles.selectedRb} />}
      </View>
      <Text style={styles.radioText}>Female</Text>
    </TouchableOpacity>
  </View>
</View>

      <TouchableOpacity
        style={styles.dateButton}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.dateButtonText}>
          {`Select Date of Birth: ${dateOfBirth.toLocaleDateString()}`}
        </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={dateOfBirth}
          mode="date"
          display="default"
          maximumDate={new Date()}
          onChange={(event, selectedDate) => {
            const currentDate = selectedDate || dateOfBirth;
            setShowDatePicker(Platform.OS === 'ios');
            setDateOfBirth(currentDate);
          }}
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#666"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#666"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    color: 'black',
  },
  button: {
    backgroundColor: '#28A745',
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    marginBottom: 15,

  },
  pickerLabel: {
    paddingHorizontal: 15,
    paddingTop: 10,
    fontWeight: 'bold',

  },
  picker: {
    height: 50,
    color:'black',
  },
  dateButton: {
    backgroundColor: 'white',
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 15,
    
  },
  dateButtonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    
  },
  radioContainer: {
    marginBottom: 15,
  },
  
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
    padding:8,
    
  },
  
  radioText: {
    fontSize: 16,
    color: '#000',
  },
  
});
