import React from 'react';

const Footer = () => {
    // start Footer
    return (
        <footer className="footer mt-32 p-20 bg-base-200 text-base-content">
            <div>
            <div className="flex-1">
                <a href='' className="font-bold lg:text-4xl">FOOD<span className='ms-2 text-primary'>SHOP</span></a>
            </div>
                <p>Food Industries Ltd.<br />Providing reliable tech since 1992</p>
            </div>
            <div>
                
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
    // start Footer
};

export default Footer;
