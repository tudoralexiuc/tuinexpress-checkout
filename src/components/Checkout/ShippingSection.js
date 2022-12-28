import Context from '../../store/Context';
import React, { useState, useContext, useEffect } from 'react';
import { SavedInfo } from './SavedInfo';
export function ShippingSection() {
  const [checkout, setCheckout] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [addresss, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [town, setTown] = useState('');
  const [postcode, setPostcode] = useState('');
  const [infoInputed, setInfoInputed] = useState(false);

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleNumber = (event) => {
    setNumber(event.target.value);
  };
  const handleAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleCountry = (event) => {
    setCountry(event.target.value);
  };
  const HandleTown = (event) => {
    setTown(event.target.value);
  };
  const handlePostcode = (event) => {
    setPostcode(event.target.value);
  };

  const handleForm = (event) => {
    let formInfo = {
      firstName: firstName,
      lastName: lastName,
      number: number,
      address: addresss,
      country: country,
      town: town,
      postcode: postcode,
    };

    localStorage.setItem('checkout', JSON.stringify(formInfo));

    setInfoInputed(true);
  };

  return (
    <div>
      {infoInputed ? (
        <SavedInfo />
      ) : (
        <>
          <form>
            <div className="shipping-fields">
              <label>FIRST NAME*</label>
              <input
                type="text"
                name="name"
                value={firstName}
                onChange={handleFirstName}
              />
            </div>
            <div className="shipping-fields">
              <label>LAST NAME*</label>
              <input type="text" name="name" onChange={handleLastName} />
            </div>
            <div className="shipping-fields">
              <label>CONTACT NUMBER*</label>
              <input type="text" name="name" onChange={handleNumber} />
            </div>
            <div className="shipping-fields">
              <label>COUNTRY*</label>
              <select onChange={handleCountry}>
                <option>Netherlands</option>
                <option>Belgium</option>
              </select>
            </div>
            <div className="shipping-fields">
              <label>ADDRESS LINE 1*</label>
              <input type="text" name="name" onChange={handleAddress} />
            </div>
            <div className="shipping-fields">
              <label>ADDRESS LINE 2</label>
              <input type="text" name="name" />
            </div>
            <div className="shipping-fields">
              <label>TOWN / CITY*</label>
              <input type="text" name="name" onChange={HandleTown} />
            </div>
            <div className="shipping-fields">
              <label>POST CODE*</label>
              <input type="text" name="name" onChange={handlePostcode} />
            </div>
            <div className="shippingButtons">
              <button>CANCEL</button>
              <button onClick={handleForm}>
                <input type="submit" value="SAVE" />
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
