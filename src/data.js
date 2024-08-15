import React from 'react';
import {FaBehance, FaFacebook, FaLinkedin, FaTwitter} from 'react-icons/fa';

export const links = [
    {
        id: 1,
        name: "بخش اصلی",
        path: "/"
    },
    {
        id: 2,
        name: "جزئیات برای اتاق",
        path: "/Room-details"
    },
    {
        id: 3,
        name: "جزئیات برای غذا",
        path: "/Food-details"
    },
    {
       id: 4,
        name: "رزرواسیون",
        path: "/Reservation"
    },
    {
        id: 5,
        name: "پنل مدیریت",
        path: "Management"
    },
]
export const socials = [
    {
         id: 1,
         url: 'https://twitter.com',
         icon: <FaTwitter />
    },
    {
         id: 2,
         url: 'https://behance.com',
         icon: <FaBehance />
    },
    {
         id: 3,
         url: 'https://facebook.com',
         icon: <FaFacebook />
    },
    {
         id: 4,
         url: 'https://linkedin.com',
         icon: <FaLinkedin />
    },
]

export const footerLinks = [
    {
        id: 1,
        name: "خانه",
        path: "home"
    },
    {
        id: 2,
        name: "درباره ما",
        path: "about"
    },
    {
        id: 3,
        name: "خدمات",
        path: "services"
    },
    {
        id: 4,
        name: "تماس با ما",
        path: "contact"
    },
]
export const menuNav = [
    {
        id: 1,
        name: "ساعات سرویس دهی",
    },
    {
        id: 2,
        name: "پیشنهادات ویژه",
    },
    {
        id: 3,
        name: "اطلاعات تغذیه ای",
    },
    {
        id: 4,
        name: "نظرات و بازخوردها",
    },
] 