import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostPage from '../pages/PostPage.jsx';
import NotFound from '../pages/NotFound.jsx';
import Welcome from '../pages/Welcome.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
