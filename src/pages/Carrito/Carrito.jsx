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
    <Nav/>
     <div className="carrito-container">
      <h1>Carrito de Pago</h1>
      <h2>Valor Total: $0</h2>

      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
    <Footer/>
    </>
   
  );
};

export default Carrito;
