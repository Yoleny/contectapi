
import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import useEstudiantes from '../context/useEstudiantes';

const StudentList: React.FC = () => {
  const { estudiantes } = useEstudiantes();

  return (
    <FlatList
      data={estudiantes}
      keyExtractor={(item) => item.id.toString()} 
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.nombre}>{item.nombre}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  nombre: {
    fontSize: 18,
  },
});

export default StudentList;
