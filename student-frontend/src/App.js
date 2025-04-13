import React, { useState, useEffect } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  const fetchStudents = async () => {
    const res = await axios.get('http://localhost:8080/api/students');
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSave = async (student) => {
    if (student.id) {
      await axios.put(`http://localhost:8080/api/students/${student.id}`, student);
    } else {
      await axios.post('http://localhost:8080/api/students', student);
    }
    fetchStudents();
    setEditStudent(null);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/students/${id}`);
    fetchStudents();
  };

  return (
    <div className="container">
      <h2>Student CRUD App</h2>
      <StudentForm onSave={handleSave} editStudent={editStudent} />
      <StudentList students={students} onEdit={setEditStudent} onDelete={handleDelete} />
    </div>
  );
}

export default App;
