
import Image from 'next/image';
import closeIcon from '../../public/closeIcon.svg';

const CloseButton = (props) => {

  const handleClick = () => {
    if (Array.isArray(props.setTrigger)) {
      props.setTrigger.map(item => item(false));
    } else {
      props.setTrigger(false);
    }
    
  }

  return (
    <button 
    onClick={handleClick}>
      <Image className='w-8' src={closeIcon} alt="Close Button" />
    </button>
  )
}

export default CloseButton