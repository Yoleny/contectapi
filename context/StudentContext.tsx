import { createContext } from 'react';

interface Student {
  id: string;
  nombre: String;

}



interface StudentContextType {
  estudiantes: Student[];
  agregarEstudiante: () => void;
  detenerAgregacion: () => void;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);



export default StudentContext;