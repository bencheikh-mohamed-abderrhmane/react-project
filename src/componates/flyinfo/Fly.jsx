import React, { useState } from 'react';
import './fly.css'; // N'oublie pas de créer le fichier CSS pour les styles


const Fly = () => {
  const [tripType, setTripType] = useState('One way');

  return (
    <div className="fly-wrapper">
      {/* Section gauche avec l'image et le texte */}
      <div className="fly-left">
        <h1 className="fly-title">The Sky is Waiting for You</h1>
        
      </div>

      {/* Section droite avec le formulaire de recherche */}
      <div className="fly-right">
        <div className="fly-header">
          <button className="fly-tab active">✈️FLIGHTS</button>
          <button className="fly-tab">🚌BUS</button>
          <button className="fly-tab">🚚TRANSFER AIRPORT</button>
        </div>

        <form className="fly-form">
          <div className="fly-trip-options">
            <label>
              <input 
                type="radio" 
                name="tripType" 
                value="One way" 
                checked={tripType === 'One way'} 
                onChange={() => setTripType('One way')} 
              /> One way
            </label>
            <label>
              <input 
                type="radio" 
                name="tripType" 
                value="Back and forth" 
                checked={tripType === 'Back and forth'} 
                onChange={() => setTripType('Back and forth')} 
              /> Back and forth
            </label>
            <label>
              <input 
                type="radio" 
                name="tripType" 
                value="Multi-destination" 
                checked={tripType === 'Multi-destination'} 
                onChange={() => setTripType('Multi-destination')} 
              />Multi-destination
            </label>
          </div>

          <div className="fly-input-group">
            <div>
              <label>Departure</label>
              <select> <option value="DEL">New Delhi (DEL)</option></select>
              <label>
             
              </label>
            </div>

            <div>
              <label>Arrive</label>
              <select> <option value="DEL">New Delhi (DEL)</option></select>
              <label>
              </label>
            </div>
          </div>

          <div className="fly-input-group">
            <div>
              <label>Departure</label>
              <input type="date" />
            </div>
            <div>
              <label>Return</label>
              <input type="date" />
            </div>
          </div>

          <div className="fly-input-group">
            <div>
              <label>Cabin Class</label>
              <select>
                <option>Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
            </div>
            <div>
              <label>Adults (16+)</label>
              <input type="number" defaultValue="2" />
            </div>
            <div>
              <label>Children</label>
              <input type="number" defaultValue="0" />
            </div>
          </div>

          <div className="fly-input-group1">
            <h4>Direct Flights Only</h4>
            <label>
              <input type="checkbox" /> 

            </label>
          </div>

          <button type="submit" className="fly-search-btn">SEARCH FLIGHTS</button>
        </form>
      </div>
    </div>
  );
};

export default Fly;
