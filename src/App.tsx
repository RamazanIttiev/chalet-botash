import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import { Header } from './views/Header';
import { Footer } from './views/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
