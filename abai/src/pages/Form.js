import '../App.css';
import './Form.css';
import logo from '../images/logo.svg';
import { useState, useEffect } from "react"

const Form = () => {
    const [year, setYear] = useState('');
    const [sent, setSent] = useState(false);

    const [weather, setWeather] = useState({
        temp: '',
        conditions: ''
    });

    const {temp, conditions} = weather;
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const formDate = year + '-' + month + '-' + day;

    useEffect(() => {
        if (sent) {
            const baseUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/49.8369,13.9033/' + formDate + '/' + formDate + '?unitGroup=metric&key=BVEM6SRCUFCCHA4UU3U9KGYXT';

            fetch(baseUrl)
            .then(response => response.json())
            .then(result => { 
                setWeather({
                    temp: result.days[0].temp,
                    conditions: result.days[0].conditions
                });
            })
            .catch(error => console.log('error', error));
        }
    }, [sent])

    

    function formSubmit(event) {
        event.preventDefault();

        if (year){
            setYear(year);
            setSent(true);
        } 
    }

    return (
        <>
            <div className="align-c">
                <img src={logo} height="200" className="mar-40--top mar-24--bottom" alt="As black as ink" />
                <h1>CHS As black as ink</h1>
            </div>

            <div className="wrapper">
                <div className="mar-24--top">
                    <p>Vyberte si rok mezi 1974 a 2024 – 50 let historie.</p>

                    <form onSubmit={formSubmit}>
                        <input type="number" placeholder="napr. 1985" min="1974" max="2024" value={year} onChange={ (event) => {setYear(event.target.value); setSent(false) } }/>
                        <button >Odeslat</button>
                    </form> 

                    {sent && weather && <p>Dne {day}. {month}. v roce {year} bylo <strong>{temp}°C</strong>. Počasí bylo také popsáno jako (v eng): {conditions}</p>}            
                </div>
            </div>
        </>
        
    )
  }

  export default Form