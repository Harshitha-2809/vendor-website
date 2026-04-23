import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VendorForm from './pages/VendorForm';
import VendorSite from './pages/VendorSite';
import Dashboard from './pages/Dashboard';
import PreviewStudio from './pages/PreviewStudio';
import PublishSuccess from './pages/PublishSuccess';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<VendorForm />} />
        <Route path="/builder/:shopname" element={<VendorForm />} />
        <Route path="/preview/:shopname" element={<PreviewStudio />} />
        <Route path="/publish/:shopname" element={<PublishSuccess />} />
        <Route path="/vendor/:shopname" element={<VendorSite />} />
        <Route path="/:shopname" element={<VendorSite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
