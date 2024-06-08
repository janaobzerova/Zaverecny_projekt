import React from 'react'
import './Dog.css';


const Dog = (props) => {
    const {image, name, country, dob} = props;

    return (
        <div className="dog">
            <img src={image} alt={name} width="356" height="356" />
            <h2>{name}</h2>
            <p>{country}</p>
            <p>{dob}</p>
        </div>
    )
}

export default Dog

// komponenta má stejný název jako je název souboru
// komponenta obsahuje return
// v return musí něco být
// return vždy vrací jen jeden rodičovský XML tag
// na konci souboru musí být řádek s exportem