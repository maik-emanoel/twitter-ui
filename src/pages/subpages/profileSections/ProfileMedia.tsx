import { initialTweets } from "../../../InitialTweets";
import { Tweet } from "../../../components/Tweet";
import { useTweetContext } from "../../../context/TweetContext";
import { useUser } from "../../../context/UserContext";

export function ProfileMedia() {
  const { userInfo } = useUser();
  const { tweets } = useTweetContext();

  const userTweets = tweets.concat(initialTweets).filter((tweet) => tweet.userLogin === userInfo.login);

  const userTweetsWithImage = userTweets.filter(
    (userTweet) => userTweet.imageUrl != undefined
  );

  return (
    <>
      {userTweetsWithImage.length > 0 ? (
        userTweetsWithImage.map((userTweetWithImage) => {
          return (
            <Tweet
              key={userTweetWithImage.id}
              id={userTweetWithImage.id}
              userAvatar={userTweetWithImage.userAvatar}
              userName={userTweetWithImage.userName}
              userLogin={userTweetWithImage.userLogin}
              content={userTweetWithImage.content}
              comments={userTweetWithImage.comments}
              retweets={userTweetWithImage.retweets}
              likes={userTweetWithImage.likes}
              isLiked={userTweetWithImage.isLiked}
              imageUrl={userTweetWithImage.imageUrl}
            />
          );
        })
      ) : (
        <div className="max-w-[336px] my-8 mx-auto px-8 min-h-[50vh]">
          <h2 className="text-3xl font-extrabold mb-2 dark:text-textDark">
            Lights, camera … attachments!
          </h2>
          <p className="text-sm dark:text-muteDark">
            When you post photos or videos, they will show up here.
          </p>
        </div>
      )}
    </>
  );
}
