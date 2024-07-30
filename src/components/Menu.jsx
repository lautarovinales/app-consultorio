import React, { useState } from 'react';
import '../styles/styles.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className='nav-flex'>
        <img className='w-20 h-20' src="/images/logo.png" alt="logo" />
        
        {/* Menú tradicional */}
        <ul className='hidden md:flex gap-5'>
          <li className='btn-gray'>Inicio</li>
          <li className='btn-gray'>Preguntas frecuentes</li>
          <li className='btn-gray'>Contacto</li>
        </ul>
        
        <ul className='hidden md:flex'>
          <li className='btn-blue'>Iniciar sesión</li>
        </ul>
        
        {/* Menú hamburguesa */}
        <button className='menu-button' onClick={toggleMenu}>
          <svg className='menu-icon' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        </button>
      </nav>
      
      {/* Menú desplegable */}
      <div className={`menu-mobile ${isOpen ? 'open' : ''}`}>
        <ul>
          <li className='btn-gray'>Inicio</li>
          <li className='btn-gray'>Preguntas frecuentes</li>
          <li className='btn-gray'>Contacto</li>
        </ul>
        <button className='btn-blue'>Iniciar sesión</button>
      </div>
    </div>
  );
};

export default Menu;
