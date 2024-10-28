import React, { useEffect, useState } from 'react';
import StudentContext from '../context/StudentContext';

const StudentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [estudiantes, setEstudiantes] = useState([
    { id: '1', nombre: 'Juan' },
    { id: '2', nombre: 'María' },
    { id: '3', nombre: 'Carlos' },
    { id: '4', nombre: 'Ana' },
    { id: '5', nombre: 'Luis' },
    { id: '6', nombre: 'Pedro' },
    { id: '7', nombre: 'Laura' },
    { id: '8', nombre: 'Sofía' },
    { id: '9', nombre: 'Javier' },
    { id: '10', nombre: 'Clara' },
  ]);

  const [isAdding, setIsAdding] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAdding) {
      interval = setInterval(() => {
        const newStudent = {
          id: (estudiantes.length + 1).toString(),
          nombre: `Estudiante ${estudiantes.length + 1}`,
        };
        setEstudiantes((prev) => [...prev, newStudent]);
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAdding, estudiantes]);

  const agregarEstudiante = () => {
    setIsAdding(true);
  };

  const detenerAgregacion = () => {
    setIsAdding(false);
  };

  return (
    <StudentContext.Provider value={{ estudiantes, agregarEstudiante, detenerAgregacion }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;