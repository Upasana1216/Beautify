import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Slider from './components/Slider';
import CompanyCard from './components/CompanyCard';
import Footer from './components/Footer';
import Page from './components/CompanyPage/Page';
function App() {
  return (
    <div >
      {/* <Home></Home>
      <p className='serviceHeading'>Have a look at our Services</p>
      <Slider></Slider>
      <p className='serviceHeading'>Top Brands Are Here</p>
      <CompanyCard></CompanyCard>
      <Footer></Footer> */}
      <Page></Page>
    </div>
  );
}

export default App;
