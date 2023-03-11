import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from '@heroicons/react/outline';

import benefitOneImg from '../public/img/benefit-one.png';
import benefitTwoImg from '../public/img/benefit-two.png';

const benefitOne = {
  title: 'Save Your Favorite Restaurants',
  desc: 'Easily update your food diary with your favorite restaurants. Keep track of your favourite dishes, prices, and more.',
  image: benefitOneImg,
  bullets: [
    {
      title: 'Easy & Seamless',
      desc: 'BiteBook pulls location data to help you fill in the details.',
      icon: <EmojiHappyIcon />,
    },
    {
      title: 'Take Pictures',
      desc: "What's a diary without pictures? Take pictures of your food and save them to your diary.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: 'Add Notes',
      desc: 'Add notes to your diary entries to help you remember your experience.',
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: 'View Your Food Diary',
  desc: 'View your food diary to see your favorite restaurants, dishes, and more. Easily update your diary with new entries.',
  image: benefitTwoImg,
  bullets: [
    {
      title: 'Map View',
      desc: 'Map view allows you to see all of your diary entries on a map.',
      icon: <DeviceMobileIcon />,
    },
    {
      title: 'List View',
      desc: 'Create separate lists for different restaurants or dishes.',
      icon: <AdjustmentsIcon />,
    },
    {
      title: 'Filter Entries',
      desc: 'Filter your diary entries by location, cuisine, price, and more.',
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
