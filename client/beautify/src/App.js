import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Slider from './components/Slider';
import CompanyCard from './components/CompanyCard';
import Footer from './components/Footer';
import Page from './components/CompanyPage/Page';
import images from './components/images';
// import Dashboad from './components/dashboard/Dashboard';
function App() {
  return (
    <div >
    {/* <div className='App'>
      <Home></Home>
      <p className='serviceHeading'  style={{marginLeft:"20px"}}>Have a look at our Services</p>
      <Slider></Slider>
      <p className='serviceHeading' style={{marginLeft:"20px"}}>Top Brands Are Here</p>
      <CompanyCard></CompanyCard>
      <Footer></Footer> 
      </div> */}
     
      <Page></Page>
      {/* <Dashboad></Dashboad> */}
    </div>
  );
}

export default App;
