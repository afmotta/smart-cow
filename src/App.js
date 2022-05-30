import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowseVideos } from "./components/pages/BrowseVideos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BrowseVideos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
