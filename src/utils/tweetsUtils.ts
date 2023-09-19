import { TweetProps } from "../pages/Timeline";

export function saveTweets(tweets: TweetProps[]) {
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

export function loadTweets(): TweetProps[] {
    const storedTweets = localStorage.getItem('tweets')
    return storedTweets ? JSON.parse(storedTweets) as TweetProps[] : []
}