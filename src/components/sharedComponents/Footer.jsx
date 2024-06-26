import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black px-24  text-white py-8 '>
      <footer className="footer p-10 text-base ">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer> 
<footer className="footer px-10  border-t border-base-300 pt-8 pb-5 text-base">
 <h3>AxiomThemes © 2024. All Rights Reserved.
</h3>
 
</footer>
        </div>
    );
};

export default Footer;