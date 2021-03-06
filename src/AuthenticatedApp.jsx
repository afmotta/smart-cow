import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { Account, Profile } from "./pages/Account";
import { Billing } from "./pages/Account/Billing";
import { Plans } from "./pages/Account/Plans";
import { BrowseVideos } from "./pages/BrowseVideos";
import {
  VideoActor,
  VideoDetail,
  VideoVoice,
  VideoAlignment,
  VideoBackground,
} from "./pages/VideoDetail";

export const AuthenticatedApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='gallery' element={<BrowseVideos />} />
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
        <Route path="account" element={<Account />}>
          <Route path="profile" element={<Profile />} />
          <Route path="plan" element={<Plans />} />
          <Route path="billing" element={<Billing />} />
          <Route
            index
            element={<Navigate to='/account/profile' replace={true} />}
          />
        </Route>
        <Route path='*' element={<Navigate to='/gallery' replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
}