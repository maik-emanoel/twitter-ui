interface SectionProps {
  description: string;
  hasImage: boolean;
}

function Section({ description, hasImage }: SectionProps) {
  return (
    <div className="max-w-[400px] my-8 mx-auto px-8">
      {hasImage && (
        <img
          src="https://abs.twimg.com/responsive-web/client-web/verification-check-800x400.v1.52677a99.png"
          alt=""
          className="w-full mb-8"
        />
      )}

      <h2 className="text-3xl font-extrabold mb-2">Nothing to see here — yet</h2>
      <p className="text-sm dark:text-muteDark">{description}</p>
    </div>
  );
}

export function DefaultNotification() {
  return (
    <Section
      description="From likes to Retweets and a whole lot more, this is where all the action happens."
      hasImage={false}
    />
  );
}

export function Verified() {
  return (
    <Section
      description="Likes, mentions, Retweets, and a whole lot more — when it comes from a verified account, you’ll find it here. Learn more"
      hasImage
    />
  );
}

export function Mentions() {
  return (
    <Section
      description="When someone mentions you, you’ll find it here."
      hasImage={false}
    />
  );
}
