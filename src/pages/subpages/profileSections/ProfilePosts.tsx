import { Tweet } from "../../../components/Tweet";
import { useTweetContext } from "../../../context/TweetContext";

export function ProfilePosts() {
  const { tweets } = useTweetContext();

  return (
    <div className="min-h-[50vh]">
      {tweets.map((tweet) => {
        return (
          <Tweet
            key={tweet.id}
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
    </div>
  );
}
