import twitterLogo from '../assets/logo-twitter.svg'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from '@phosphor-icons/react'

export function Sidebar() {
    return (
        <aside className='py-6 px-5 flex flex-col gap-8'>
        <img src={twitterLogo} alt="Logo" className='w-8 h-8'/>

        <nav className='flex flex-col gap-8'>
          <a href="" className='flex items-center gap-5 text-xl font-bold text-twitterBlue'>
            <House className='w-8 h-8' weight='fill' />
            Home
          </a>
          <a href="" className='flex items-center gap-5 text-xl font-bold'>
            <Hash className='w-8 h-8' />
            Explorer
          </a>
          <a href="" className='flex items-center gap-5 text-xl font-bold'>
            <Bell className='w-8 h-8' />
            Notifications
          </a>
          <a href="" className='flex items-center gap-5 text-xl font-bold'>
            <Envelope className='w-8 h-8' />
            Messages
          </a>
          <a href="" className='flex items-center gap-5 text-xl font-bold'>
            <BookmarkSimple className='w-8 h-8' />
            Bookmarks
          </a>
          <a href="" className='flex items-center gap-5 text-xl font-bold'>
            <FileText className='w-8 h-8' />
            Lists
          </a>
          <a href="" className='flex items-center gap-5 text-xl font-bold'>
            <User className='w-8 h-8' />
            Profile
          </a>
          <a href="" className='flex items-center gap-5 text-xl font-bold'>
            <DotsThreeCircle className='w-8 h-8' />
            More
          </a>
        </nav>

        <button className='bg-twitterBlue rounded-full p-4 flex justify-center w-full text-white text-xl font-black hover:brightness-90'>Tweet</button>
      </aside>
    )
}