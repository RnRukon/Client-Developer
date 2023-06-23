import {
  StarIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";

export const contactData = [
  {
    title: "Developers Services",
    icon: StarIcon,
    color: 'bg-green-400',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    style: 'md:-rotate-12',
    path:'/developers'
  },
  {
    title: "Companies",
    icon: PresentationChartLineIcon,
    color: 'bg-red-400',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    style: 'md:mb-12 md:-mt-12',
    path:'/companies'
  },
  {
    title: "Job Circulars",
    icon: RocketLaunchIcon,
    color: 'bg-blue-400',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    style: 'md:rotate-12',
    path:'/circulars'
  },
];

export default contactData;
