import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import StudentProvider from './Provider/StudentProvider';
import StudentList from './components/StudentList';
import ControlButtons from './components/ControlButtons';

export default function App() {
  return (
    <StudentProvider>
      <SafeAreaView style={styles.container}>
        <StudentList />
        <ControlButtons />
      </SafeAreaView>
    </StudentProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
    padding: 16,              
    backgroundColor: '#fff',  
  },
});
