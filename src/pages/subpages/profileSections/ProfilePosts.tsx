import { Tweet } from "../../../components/Tweet";
import { useTweetContext } from "../../../context/TweetContext";

export function ProfilePosts() {
  const { tweets } = useTweetContext();

  return (
    <>
      {tweets.map((tweet) => {
        return (
          <Tweet
            id={tweet.id}
            userAvatar={tweet.userAvatar}
            userName={tweet.userName}
            userLogin={tweet.userLogin}
            content={tweet.content}
            comments={tweet.comments}
            retweets={tweet.retweets}
            likes={tweet.likes}
            isLiked={tweet.isLiked}
            imageUrl={tweet.imageUrl}
          />
        );
      })}
    </>
  );
}
