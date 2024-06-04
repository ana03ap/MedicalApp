import React, { useState } from 'react'
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/index";


import "./index.css";
const Carrito = () => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    zip: '',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleInputChange = (e, setState, state) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar la información del pago
    console.log('Contact Info:', contactInfo);
    console.log('Address:', address);
    console.log('Payment Info:', paymentInfo);
  };

  return (
    <>
      <Nav />
      <div className="carrito-container" style={{paddingTop:'2pc', paddingBottom:'2pc'}}>
        <h1>Carrito de Pago</h1>
        <h2>Valor Total: $0</h2>

        {/* <form onSubmit={handleSubmit}>
        <h3>Información de Contacto</h3>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={contactInfo.name}
          onChange={(e) => handleInputChange(e, setContactInfo, contactInfo)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={contactInfo.email}
          onChange={(e) => handleInputChange(e, setContactInfo, contactInfo)}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={contactInfo.phone}
          onChange={(e) => handleInputChange(e, setContactInfo, contactInfo)}
          required
        />

        <h3>Dirección</h3>
        <input
          type="text"
          name="street"
          placeholder="Calle"
          value={address.street}
          onChange={(e) => handleInputChange(e, setAddress, address)}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="Ciudad"
          value={address.city}
          onChange={(e) => handleInputChange(e, setAddress, address)}
          required
        />
        <input
          type="text"
          name="state"
          placeholder="Estado"
          value={address.state}
          onChange={(e) => handleInputChange(e, setAddress, address)}
          required
        />
        <input
          type="text"
          name="zip"
          placeholder="Código Postal"
          value={address.zip}
          onChange={(e) => handleInputChange(e, setAddress, address)}
          required
        />

        <h3>Información de la Tarjeta</h3>
        <input
          type="text"
          name="cardNumber"
          placeholder="Número de Tarjeta"
          value={paymentInfo.cardNumber}
          onChange={(e) => handleInputChange(e, setPaymentInfo, paymentInfo)}
          required
        />
        <input
          type="text"
          name="expirationDate"
          placeholder="Fecha de Expiración (MM/AA)"
          value={paymentInfo.expirationDate}
          onChange={(e) => handleInputChange(e, setPaymentInfo, paymentInfo)}
          required
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={paymentInfo.cvv}
          onChange={(e) => handleInputChange(e, setPaymentInfo, paymentInfo)}
          required
        />

        <button type="submit">Pagar</button>
      </form> */}

        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                First Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
                
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Last Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Card Number
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="123456789"/>
                
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                City
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                State
              </label>
              <div className="relative">
                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>

            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                Zip
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                cvv
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                Exp month
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                Exp Year
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
            </div>
            

          </div>
        </form>
      </div>
      <Footer />
    </>

  );
};

export default Carrito;
