import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavbarButton = (props) => {

  const [icon, setIcon] = useState(props.buttonImage)

  return (
    <>
      <Link  onMouseEnter={() => setIcon(props.buttonImageFill)} onMouseLeave={() => setIcon(props.buttonImage)} className="text-almostVeryDarkGrey text-2xl flex 
      items-center space-x-2 hover:text-brandYellow" href={props.buttonHref}>
        <Image src={icon} alt="Navbar Icon"/>
        <span className='hidden sm:block'> {props.buttonText}</span>
      </Link>
    </>
  )
}

export default NavbarButton;