import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../images/logo.svg';
import '../App.css';
import './Home.css';
import Dog from '../components/Dog';
import dogs from '../dogsData';
import Tabs from "../components/Tabs";

const Home = () => {
    const highlights = ["malá", "rodinná", "výnimočná"];
    const [choosen, setChoosen] = useState(Math.floor(Math.random() * highlights.length));
  
    return (
        <>
            <div className="align-c">
                <img src={logo} height="200" className="mar-40--top mar-24--bottom" alt="As black as ink" />
                <h1>CHS As black as ink</h1>
                <p className="perex">je <strong>{highlights[choosen]}</strong> chovatelská stanice registrovaná v FCI / ČMKU</p>
            </div>
        
            <div className="wrapper">
                <div className="dogs mar-24--top">
                {dogs.map((dog, index) => (
                    <Dog key={index} name={dog.name} country={dog.country} image={dog.image} dob={dog.dob}></Dog>
                ))}
                </div>
            </div>
        
            <div className="wrapper">
                <Tabs />
            </div>

            <div className="dark-wrapper">
                <div className="wrapper">
                    <div className="pad-60--top pad-60--bottom align-c">
                        <h2 className="second-page">
                            Chcete vědět, jaké bylo <Link to="/form">počasí</Link> dnes nebo před lety?
                        </h2>
                    </div>
                </div>
            </div>
        </>
      );
}

export default Home;