import { About } from 'components/main/About';
import { Hero } from '../components/main/Hero';
import { Calendar } from '../components/main/Calendar';
import { Activity } from '../components/main/Activity';
// import PagesSCSS from './Pages.module.scss'

const Main = () => {
  return (
    <main>
      <Hero />
      <About />
      <Calendar />
      <Activity/>
    </main>
  );
};
export default Main;
