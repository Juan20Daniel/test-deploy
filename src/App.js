import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import { AlertProvider } from './context/AlertContext';
import Notes from './pages/Notes';
function App() {
  return (
    <AlertProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='notes' element={<Notes />} />
        </Route>
      </Routes>
    </AlertProvider>
  );
}

export default App;
