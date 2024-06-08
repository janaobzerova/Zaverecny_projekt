import React from 'react';
import { useState } from "react";
import tabs from "../tabsData";
import '../App.css';
import '../pages/Home.css';


const Tabs = (props) => {
    const [tabIndex, setTabIndex] = useState("tab1");

    function showTab(category) {  
        switch (category) {
        case 'tab2':
            return <div>
            <ul>
                <li>BH-VT - 60 obstál</li>
                <li>IGP 1 - 98/96/97 - 291 Výborná</li>
                <li>IGP 2 - 78/88/93 - 259 Dobrá</li>
                <li>IGP 3 - 97/96/84 - 277 Velmi dobrá</li>
            </ul>
            </div>;
        case 'tab3':
            return <div>
            <table border="1" cellpadding="1" cellspacing="1" height="126" width="314">
                <tbody>
                <tr>
                    <td>
                    <strong>Stupeň DKK</strong>
                    </td>
                    <td>
                    <strong>Popis</strong>
                    </td>
                </tr>
                <tr>
                    <td>
                    <strong>A</strong>
                    </td>
                    <td>
                    negativní, bez příznaků dysplazie
                    </td>
                </tr>
                <tr>
                    <td>
                    <strong>B</strong></td>
                    <td>
                    hraniční dysplazie, přechodný stupeň
                    </td>
                </tr>
                <tr>
                    <td>
                    <strong>C</strong>
                    </td>
                    <td>
                    mírná dysplazie
                    </td>
                </tr>
                <tr>
                    <td>
                    <strong>D</strong>
                    </td>
                    <td>
                    střední dysplazie
                    </td>
                </tr>
                <tr>
                    <td>
                    <strong>E</strong>
                    </td>
                    <td>
                    těžká dysplazie
                    </td>
                </tr>
                </tbody>
            </table></div>;
        case 'tab4':
            return <div>
            <ol>
                <li>Vrh A (29.06.2019)</li>
                <li>Vrh B (07.01.2021)</li>
                <li>Vrh C (30.08.2021)</li>
                <li>Vrh D (16.11.2023)</li>
            </ol>
            </div>;
        case 'tab1':  
        default:
            return <div>
            <p>Na kontě proto máme už několik zemí se splněným šampionátem a na dalších pracujeme.</p>
            <ul>
                <li>Česká republika</li>
                <li>Slovenská republika</li>
                <li>Maďarsko</li>
                <li>Ukrajina</li>
                <li>Makedónie</li>
                <li>Rumunsko</li>
                <li>Kosovo</li>
                <li>Albánie</li>
            </ul>
            </div>;
        }
    }

    return (
        <>
            <div className="mar-24--top">
                <div className="tab-nav">
                    {tabs.map((tab, index) => {
                        const { icon, title, category } = tab; 
            
                        return (
                        <button key={index} onClick={ () => setTabIndex(category) } className={tabIndex === category ? 'active' : ''}>
                            <img src={icon} width="24" height="24" alt={title} />
                            {title}
                        </button>
                        )
                    })}
                </div>
            </div>
            <div className="mar-12--top mar-24--bottom">
                {showTab(tabIndex)}
            </div>
        </>
    )
}

export default Tabs