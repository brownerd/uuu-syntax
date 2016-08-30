'use babel';

export default function () {

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
    "Cooler than a Yetti eating frozen spaghetti!"
  ];

  let len = complements.length;
  return complements[Math.floor(Math.random() * len)];
};
