import Context from '../../store/Context';
import React, { useState, useContext, useEffect } from 'react';
import { getInfo } from './CheckoutInfo';
import { ShippingSection } from './ShippingSection';
export function SavedInfo() {
  const [information, setInformation] = useState({});
  const [changePressed, setChangePressed] = useState(false);
  useEffect(() => {
    setInformation(getInfo());
  }, []);
  const handleChangeButton = (event) => {
    setChangePressed(true);
  };

  return (
    <div>
      {changePressed ? (
        <ShippingSection />
      ) : (
        <div>
          <h1>{information.firstName}</h1>
          <h1>{information.lastName}</h1>
          <h1>{information.number}</h1>
          <h1>{information.addresss}</h1>
          <h1>{information.country}</h1>
          <h1>{information.town}</h1>
          <h1>{information.postcode}</h1>
          <button onClick={handleChangeButton}>Change</button>
        </div>
      )}
    </div>
  );
}
