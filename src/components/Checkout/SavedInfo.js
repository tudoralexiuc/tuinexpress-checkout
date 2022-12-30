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
        <div className="saved-info-section">
          <div className="left-info-section">
            <h5>{information.firstName}</h5>
            <h5>{information.lastName}</h5>
            <h5>{information.number}</h5>
            <h5>{information.addresss}</h5>
            <h5>{information.country}</h5>
            <h5>{information.town}</h5>
            <h5>{information.postcode}</h5>
          </div>
          <div className="right-info-section">
            <button onClick={handleChangeButton}>Change</button>
          </div>
        </div>
      )}
    </div>
  );
}
