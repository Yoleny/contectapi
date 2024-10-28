import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import useEstudiantes from '../context/useEstudiantes';

const ControlButtons: React.FC = () => {
  const { agregarEstudiante, detenerAgregacion } = useEstudiantes();

  return (
    <View style={styles.container}>
      <Button title="Agregar Estudiantes" onPress={agregarEstudiante} />
      <Button title="Detener Agregación" onPress={detenerAgregacion} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },
});

export default ControlButtons;