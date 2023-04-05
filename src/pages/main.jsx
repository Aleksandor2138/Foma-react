import { About } from 'components/main/About';
import { Hero } from '../components/main/Hero';
import { Calendar } from '../components/main/Calendar';
import { Activity } from '../components/main/Activity';
// import { Video } from '../components/main/video';
import { Gallery } from '../components/main/Gallery';
// import PagesSCSS from './Pages.module.scss'

const Main = () => {
  return (
    <main>
      <Hero />
      <About />
      <Calendar />
      <Activity />
      {/* <Video /> */}
      <Gallery/>
    </main>
  );
};
export default Main;
