import Anna from "./Anna.png";
import May from "./May.png";
import Mike from "./Mike.png";
import Peter from "./Peter.png";
import Skye from "./Skye.png";
import Vincent from "./Vincent.png";
import YoYo from "./YoYo.png";

const actors = [
  { name: "Anna", picture: Anna },
  { name: "YoYo", picture: YoYo, active: true },
  { name: "Skye", picture: Skye },
  { name: "Mike", picture: Mike },
  { name: "Vincent", picture: Vincent },
  { name: "Peter", picture: Peter },
  { name: "May", picture: May },
];

export const useActors = () => {
  return actors;
}

export const useActor = (name) => {
  const actor = actors.find(i => i.name === name);
  return actor ?? null;
}