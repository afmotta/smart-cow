import { VideoLayout } from "./components/layouts/VideoLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<VideoLayout title="Root">Root</VideoLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
