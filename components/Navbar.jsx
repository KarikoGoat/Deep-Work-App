import NavbarButton from "./buttons/NavbarButton";
import clockIcon from '../public/clockIcon.svg';
import clockIconFill from '../public/clockIconFill.svg';
import tasksIcon from '../public/tasksIcon.svg';
import tasksIconFill from '../public/tasksIconFill.svg';
import statsIcon from '../public/statsIcon.svg';
import statsIconFill from '../public/statsIconFill.svg';
import settingsIcon from '../public/settingsIcon.svg';
import settingsIconFill from '../public/settingsIconFill.svg';
import logo from '../public/logo.svg';
import LoginButton from "./buttons/LoginButton";

const Navbar = () => {

  const isLoggedIn = false;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-100 bg-veryDarkGrey flex justify-between py-2 px-2 z-10
      items-center">
        <NavbarButton className="hidden sm:block" buttonImage={logo} buttonImageFill={logo} buttonHref="/" />
        <NavbarButton buttonText='Work' buttonImage={clockIcon} buttonImageFill={clockIconFill} buttonHref='/work'/>
        <NavbarButton buttonText='Tasks' buttonImage={tasksIcon} buttonImageFill={tasksIconFill} buttonHref='/tasks'/>
        <NavbarButton buttonText='Stats' buttonImage={statsIcon} buttonImageFill={statsIconFill} buttonHref='/stats'/>
        {isLoggedIn 
        ? <NavbarButton buttonImage={settingsIcon} buttonImageFill={settingsIconFill} buttonHref='/'/>
        : <div className="flex space-x-2">
            <LoginButton text={'Log in'} /> 
            <LoginButton text={'Sign Up'} /> 
          </div>
        }
      </div>
    </>
  )
}

export default Navbar