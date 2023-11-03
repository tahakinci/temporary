import { Dashboard } from '../pages/Home/Dashboard';
import { Layout } from '../pages/Home/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import useStore from '../store/useStore';

function App() {
  // const data = useStore((state) => state.data);
  // console.log(data);
  const fetchData = useStore((state) => state.fetch);
  useEffect(() => {
    fetchData('/data');
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" />
            <Route path="/project/:id" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
