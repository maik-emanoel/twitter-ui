import { Tweet } from "../../../components/Tweet";
import { useTweetContext } from "../../../context/TweetContext";

export function ProfilePosts() {
  const { tweets } = useTweetContext();

  return (
    <div className="min-h-[50vh]">
      {tweets.length > 0 ? (
        tweets.map((tweet) => (
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
        ))
      ) : (
        <div className="max-w-[400px] my-8 mx-auto px-8 min-h-[50vh]">
          <h2 className="text-3xl font-extrabold mb-2">Sorry :&#40;</h2>
          <p className="text-sm dark:text-muteDark">
            You don't have posts yet.
          </p>
        </div>
      )}
    </div>
  );
}
