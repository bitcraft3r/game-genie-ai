import React from "react";

const ShareTwitterButton = () => {

  let tweetsArray = [
    "Whoa! 😍 Check out this amazing anime-style waifu pfp created with just one click on @GameGenieAi 🧞‍♀️🤩 $GGAI @adv3nturers $GEM",
    "Check out this 🔥 anime-style waifu pfp generated with 1 click on @GameGenieAi! 🧞‍♀️😍 $GGAI @adv3nturers $GEM",
    "OMG! 😍 Check out this 1-click anime waifu pfp made with @GameGenieAi - it's magical! 🧞‍♀️ Powered by @adv3nturers $GEM.",
    "👀 Look at this amazing anime-style waifu pfp generated with 1 click on @GameGenieAi! 🧞‍♀️🤩 Powered by @adv3nturers $GEM.",
    "Level up your avatar game with 1-click anime waifu pfps from @GameGenieAi! 🧞‍♀️🤩 $GGAI $GEM @adv3nturers",
    "Create anime-style waifu pfps in 1 click with @GameGenieAi! 🧞‍♀️🤩 Show us your creations and tag $GGAI & @adv3nturers for a chance to be featured. $GEM",
  ];

  const getRandomArrayIndex = (arr) => {
    return Math.floor(Math.random() * arr.length);
  }

  let tempTweet = tweetsArray[getRandomArrayIndex(tweetsArray)];
  let text = tempTweet;

  let imageUrl = "https://gamegenieai.web.app/static/media/saige.438cba432d626b76ffaa.png";

  const twitterShareUrl = `https://twitter.com/share?text=${text}&url=${imageUrl}`;

  return (
    <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
      <button>Share on Twitter</button>
    </a>
  );
};

export default ShareTwitterButton;
