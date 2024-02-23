import { TV_IMG, VIDEO_TV } from "../utils/constant";

const TvSection = () => {
  return (
    <section className='bg-black  border-b-8 border-neutral-700'>
      <div className='max-w-[1200px] h-[80vh] mx-auto flex items-center'>
        <div className=' w-full h-full text-white flex flex-col  justify-center pr-8'>
          <div className='text-5xl font-bold mb-7'>Enjoy on your TV</div>
          <p className='text-2xl'>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className='w-full h-full relative'>
          <img
            src={TV_IMG}
            className='absolute  top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-10'
          />
          <video
            autoPlay
            loop
            src={VIDEO_TV}
            className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] scale-[0.92] mt-[-9px] ml-[-3px]'
          ></video>
        </div>
      </div>
    </section>
  );
};

export default TvSection;
