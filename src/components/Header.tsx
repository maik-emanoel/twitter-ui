import { Sparkle } from '@phosphor-icons/react'

interface HeaderProps {
    title: string
}

export function Header( {title} :HeaderProps) {
    return (
        <div className='py-6 px-5 flex items-center justify-between text-xl font-bold border-b-[1px] border-b-grayBorder dark:border-b-grayBorderDark dark:text-tweetColor'>
            {title}
            <Sparkle className='w-6 h-6 text-twitterBlue' />
        </div>
    )
}