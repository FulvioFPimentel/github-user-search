import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';
import './styles.css';

const Home = () => {
    return(
        <div className="home-container">
            <h1 className="text-title">
                Desafio do Capítulo 3, Bootcamp DevSuperior
            </h1>
                <ul className="text-subtitle">
                    <li >
                        Bem-vindos a o desafio do capitulo 3 do Bootcamp DevSuperior.
                    </li>
                    <li>
                        Favor observar as instruções passadas no capituli
                        sobre a eladoração deste projeto.
                    </li>
                    <li>
                        Este design foi adaptado a partir de Ant Design System
                        for Figma, de Mateusz Wierzbicki:  
                        <a href="/"> antforfigma@gmail.com</a>
                    </li>
                </ul>
                <Link to="/search">
                    <Button text="Começar" />    
                </Link>
                       
        </div>
    )
}
export default Home;