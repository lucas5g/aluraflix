import React from 'react';

// import { Container } from './styles';
import Logo from '../../assets/Logo.png'
import './style.css'
import Button from '../Button';
function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AluraFlix logo" />

            </a>
            <Button as="a" href="/" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;