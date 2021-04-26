import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'
import '../../assets/components/Button/styles.css'


const Search = () => {

    const [name, setName] = useState('');

    const handleOndChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setName(event.target.value);
    }

    const handleClick = () => {
        axios(`https://api.github.com/users/${name}`)
        .then(Response => console.log(Response))
       console.log({name})
    }

    return(
        <div className="search-container">
            <div className="seatch-content">
                <h1 className="text-seatch">Encontre um perfil Github</h1>
                <input 
                    value={name}
                    className="form-control" 
                    onChange={handleOndChange}
                    type="text"/>
                <div className="text-button"></div>
                        <button 
                            className="btn-tostart"
                            onClick={handleClick}
                        >
                            Encontrar
                        </button> 
            </div>
        </div>
    );
}

export default Search;