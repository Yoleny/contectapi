import { useContext } from 'react';
import StudentContext from './StudentContext';

const useEstudiantes = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useEstudiantes debe ser usado dentro de un StudentProvider');
  }
  return context;
};

export default useEstudiantes;