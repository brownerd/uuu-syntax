'use babel';

export default () => {

  const complements = [
    "Awesome choice!",
    "The Bauhaus would be proud!",
    "Look the fuck out UXers!",
    "Masterpiece in the making!",
    "I wish I had your style!",
    "Hell yeah!",
    "#BADA55",
    "Brilliant!",
    "Slick like Rick!",
    "Cooler than a Yetti eating frozen spaghetti!",
    "Shimmy shimmy yaw, shimmy yam, shimmy yea!",
    "You got the skils to pay the bills!",
    "You got game!"
  ];

  let len = complements.length;
  return complements[Math.floor(Math.random() * len)];
};
