import Intro from './components/intro/Intro';
import Welcome from './components/welcome/Welcome';
import Project from './components/projects/Project';
import Price from './components/pricing/Price';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="app">
      <div className="sections">
      <Intro />
      <Welcome/>
      <Project/>
      <Price/>
      <Blog/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}

export default App

