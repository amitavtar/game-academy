import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Banner from './Banner';
import Training from './Training';
import Venues from './Venues';
import Offers from './Offers';
import Why from './Why';
import Online from './Online';
import Customer from './Customer';
import Rank from './Rank';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import fetchData from './FechData';
import { useRef } from 'react';



function App() {

  
 
    const responseRef = useRef(null);
    const [data, setData] = useState(null);
    const url = "https://docs.google.com/document/d/1rim-mhA2Tk-LUSdPUow3HikEUcTXaopG/edit";
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      responseRef.current = response;
      setData(json);
    };

    useEffect(() => {
     
      fetchData();
    }, []);
    console.log(data)
  
  
  return (
    <div>
      <NavBar />
      <Banner />
      <Training />
      <Venues />
     <Offers />
     <Why />
     <Online />
     <Customer />
     <Rank />
     <Footer />
    </div>
  );
}

export default App;


