import Hero from '../components/home/Hero.jsx';
import HowItWorks from '../components/home/HowItWorks.jsx';
import FeaturedCourses from '../components/home/FeaturedCourses.jsx';
import FeaturedLessons from '../components/home/FeaturedLessons.jsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <FeaturedCourses />
      <FeaturedLessons />
    </>
  );
}
