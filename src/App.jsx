import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { BrowseVideos } from "./pages/BrowseVideos";
import {
  VideoActor,
  VideoDetail,
  VideoVoice,
  VideoAlignment,
  VideoBackground,
} from "./pages/VideoDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/gallery' element={<BrowseVideos />} />
        <Route path='video' element={<VideoDetail />}>
          <Route path='actor' element={<VideoActor />} />
          <Route path='voice' element={<VideoVoice />} />
          <Route path='alignment' element={<VideoAlignment />} />
          <Route path='background' element={<VideoBackground />} />
          <Route
            index
            element={<Navigate to='/video/actor' replace={true} />}
          />
        </Route>
        <Route path='/' element={<Navigate to='/gallery' replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;