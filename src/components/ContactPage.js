// import React from 'react'

// function ContactPage() {
//   return (
//     <div>
//         <h3>Fax: 080-8574877</h3>
//         <h3>Email: Greendoum@gmail.com</h3>
//         <h3>location: KM 9 LAMHAMDIA 2, Rte de Fès,<br />
//             Marrakech 40000</h3>
//     </div>
//   )
// }

// export default ContactPage



import React from 'react';

function ContactPage() {
  return (
    <div className="contact-page">
      <h3 className="contact-page__heading">Contact Us</h3>
      <div className="contact-page__info">
        <div className="contact-page__item">
          <span className="contact-page__label">Fax:</span>
          <span className="contact-page__value">080-8574877</span>
        </div>
        <div className="contact-page__item">
          <span className="contact-page__label">Email:</span>
          <span className="contact-page__value">Greendoum@gmail.com</span>
        </div>
        <div className="contact-page__item">
          <span className="contact-page__label">Location:</span>
          <span className="contact-page__value">KM 9 LAMHAMDIA 2, Rte de Fès, Marrakech 40000</span>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
