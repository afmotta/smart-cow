import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { BrowseVideos } from "./pages/BrowseVideos";
import { VideoDetail } from "./pages/VideoDetail";

export const UnauthenticatedApp = () => {
  console.log('UN');
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<BrowseVideos />} />
        <Route path='signin' element={<VideoDetail />} />
        <Route path='/' element={<Navigate to='/login' replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
};
