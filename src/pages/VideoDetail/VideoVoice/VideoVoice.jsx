import { VideoTabs } from "../VideoTabs";
import active from './active.png';
import inactive from './inactive.png';

export const VideoVoice = () => {
  return (
    <div className='flex flex-col'>
      <VideoTabs active='voice' />
      <img className="mt-4 cursor-pointer" src={active} alt=""/>
      <img className="mt-4 cursor-pointer" src={inactive} alt=""/>
      <img className="mt-4 cursor-pointer" src={inactive} alt=""/>
    </div>
  );
};
