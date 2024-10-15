import React from 'react';
import './ClientForms.css';

const ClientForms = () => {
  return (
    <div className="clientforms-container">
      <h1>Client Forms</h1>
      <p>Please download and complete the following forms prior to your appointment. Bring the completed forms with you.</p>
      
      <ul className="clientforms-list">
        <li>
          <a href="/forms/intake_form.pdf" download>
            Intake Form (PDF)
          </a>
        </li>
        <li>
          <a href="/forms/consent_form.pdf" download>
            Consent Form (PDF)
          </a>
        </li>
        <li>
          <a href="/forms/insurance_info_form.pdf" download>
            Insurance Information Form (PDF)
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ClientForms;
