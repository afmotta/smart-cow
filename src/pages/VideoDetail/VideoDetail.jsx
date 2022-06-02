import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Tabs } from "../../components/Tabs";
import { VideoLayout } from "../../layouts/VideoLayout";
import { VideoOverlay } from "./VideoOverlay";
import { VideoSummary } from "./VideoSummary";

export const VideoDetail = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!isOpen);
  return (
    <>
      <VideoLayout
        active='video'
        title={isOpen ? "" : "Saying Hi to my customers"}
        onTitleClick={toggleOpen}
      >
        <div className='py-8 flex flex-row'>
          <div className='w-3/5'>
            <VideoSummary />
          </div>
          <div className='w-2/5 px-4'>
            <div className='flex flex-col'>
              <Tabs
                root='/video/'
                keys={["actor", "voice", "alignment", "background"]}
              />
              {/* Outlet renders child routes' elements, as defined in App */}
              <Outlet />
            </div>
          </div>
        </div>
      </VideoLayout>
      {isOpen && <VideoOverlay onSave={toggleOpen} />}
    </>
  );
};
