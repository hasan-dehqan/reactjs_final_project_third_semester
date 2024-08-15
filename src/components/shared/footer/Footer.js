import React from 'react';
import { Link } from "react-router-dom";
import { footerLinks, socials } from '../../../data';

import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>هتل رستوران آریا</h3>
                    <p>آدرس : تهران، خیابان ولی عصر، نبش خیابان طالقانی، پلاک 123، هتل رستوران آریا</p>
                    <span>کد پستی: 1599653411</span>
                    <p>ایمیل : info@arya-hotel.com</p>
                </div>
                <div className="footer-section">
                    <h3>دسترسی سریع</h3>
                    <ul>
                        {footerLinks.map((link) => {
                            const { id, name, path } = link;
                            return (
                                <li key={id}>
                                    <Link to={path}>{name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>ما را دنبال کنید</h3>
                    <ul className="social-media">
                        {socials.map((social) => {
                            const { id, url, icon } = social;
                            return (
                                <li key={id}>
                                    <Link href={url}>{icon}</Link>
                                </li>
                                
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 1403 هتل رستوران آریا. تمامی حقوق محفوظ است.</p>
            </div>
        </footer>
    )
}

export default Footer;