import Portfolio from '../ui/Portfolio';
import Profile from '../ui/Profile';
import TechStack from '../ui/TechStack';
import Contact from './Contact';

function Home() {
  return (
    <div className=" mx-8 flex flex-col items-center justify-center gap-5 sm:mx-20 ">
      <Profile />
      <TechStack />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Home;
