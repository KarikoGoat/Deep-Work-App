import Image from 'next/image';
import loadingIcon from '../public/loadingIcon.svg';

const LoadingScreen = () => {
  return (
    <>
      <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <Image className="w-20" src={loadingIcon} alt="Loading Icon" />
        <p className="text-xl text-lightestGrey text-center">Loading ...</p>
      </div>
    </>
  )

}

export default LoadingScreen