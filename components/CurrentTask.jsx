
import Link from 'next/link';


const CurrentTask = (props) => {

  return (
    <div className='fixed top-24 p-2 px-4 flex bg-veryDarkishGrey z-10 w-full'>
      {props.currentTaskPath.map(item => {
        return (
          <div className='flex'>
            <Link className='text-almostVeryDarkGrey text-2xl hover:bg-[#606670]' href={item.id ? {
              pathname: `/tasks/${item.name}`,
              query: { id: item.id }
            } : "/tasks"}> 
              {item.name}
            </Link>
            <h1 className="text-almostVeryDarkGrey text-2xl mx-1"> / </h1>
          </div>
        )
      })}
    </div>
  )
}

export default CurrentTask