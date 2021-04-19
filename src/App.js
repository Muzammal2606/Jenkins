
import './App.css';

import Header from '../src/component/header/index'
import LogoPart from '../src/component/Logo-part/index'
import Slider from '../src/component/slider/index'
import Feature from '../src/component/feature/index'
import Video from '../src/component/video/index'
import Events from '../src/component/events/index'
import Blog from '../src/component/Blog/index'
import Sponsors  from '../src/component/sponsors/index'
import Footer from '../src/component/Footer/index'

function App() {
  return (
    
    <div className="App">
      <Header />
      <LogoPart />
      <Slider /> 
      <Feature />
      <Video />
      <Events />
      <Blog />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
