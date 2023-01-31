import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FrontPage from './Front';
import TodoApp from './TodoApp';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<FrontPage />} />
      <Route path="/todoApp" element={<TodoApp />} />
    </Routes>
    </Router>
  );
}
export default App;