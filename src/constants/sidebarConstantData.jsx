import { BucketListIcon } from "../icons/BucketListIcon";
import { HabitsAndRoutineIcon } from "../icons/HabitsAndRoutineIcon";
import { IkigaiIcon } from "../icons/IkigaiIcon";
import { SleepIcon } from "../icons/SleepIcon";
import { VisionAndGrowth } from "../icons/VisionAndGrowthIcon";

export const sidebarData = [
  {
    title: "Ikigai & Phiolosophy",
    icon: <IkigaiIcon />,
    link: "/ikigai-philosophy",
  },
  {
    title: "Vision & Growth",
    icon: <VisionAndGrowth />,
    link: "/growth-mindset",
  },
  {
    title: "Habits & Routine",
    icon: <HabitsAndRoutineIcon />,
    link: "/habits-routine",
  },
  {
    title: "Bucket list",
    icon: <BucketListIcon />,
    link: "/bucketlist-mindset",
  },
  {
    title: "Sleep Management",
    icon: <SleepIcon />,
    link: "/manageyoursleep",
  },
];
