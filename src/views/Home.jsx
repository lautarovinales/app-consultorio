import React from 'react';
import Form from './Form';
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Menu/>
      <main class='main'>
        <div className="cont-home">
        <h1 class='title'>Consulta con nuestros especialistas sin salir de casa. Reserva tu turno online ahora.</h1>
        <button class='btn-blue'>Pedir turno</button>
        </div>
        <div className="cont-emergency">
          <div className='title-p'>
          <h1 class='title-black'>Tenemos los mejores <span className='blue-txt'>profesionales</span> en las siguientes áreas.</h1>
          <p className='gray-txt'>Pediatría, Odontología, Cardiología, Dermatología, Neurología, Oncología, Psiquiatría, Urología, Gastroenterología, Developer front-end, Oftalmología, Endocrinología, Ginecología, Reumatología, Nefrología, Neumología </p>
          </div>
          <div>
            <img className='doctor-gif' src="/images/doctor-gif.gif" alt="" srcset="" />
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;