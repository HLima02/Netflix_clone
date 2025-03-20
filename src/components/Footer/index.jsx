import React from 'react'

import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube    } from "react-icons/fa";

import './footer.style.scss'

export default function Footer() {
  return (
    <footer>
      <div className='footer__container'>
        <div className='social_icons'>
          <a href="#"><FaFacebookSquare size={20} color='#fff' /></a>
          <a href="#"><FaInstagram size={20} color='#fff' /></a>
          <a href="#"><FaTwitter size={20} color='#fff' /></a>
          <a href="#"><FaYoutube size={20} color='#fff'  /></a>
        </div>
        <div className="links_section">
          <ul>
            <li>
              <a href='#'>FAQ</a>
            </li>
            <li>
              <a href='#'>Investor Relations</a>
            </li>
            <li>
              <a href='#'>Buy Gift Cards</a>
            </li>
            <li>
              <a href='#'>Cookie Preferences</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='#'>Help Center</a>
            </li>
            <li>
              <a href='#'>Jobs</a>
            </li>
            <li>
              <a href='#'>Ways to Watch</a>
            </li>
            <li>
              <a href='#'>Corporate Information</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='#'>Account</a>
            </li>
            <li>
              <a href='#'>Netflix Shop</a>
            </li>
            <li>
              <a href='#'>Terms of Use</a>
            </li>
            <li>
              <a href='#'>Contact Us</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='#'>Media Center</a>
            </li>
            <li>
              <a href='#'>Redeem Gift Cards</a>
            </li>
            <li>
              <a href='#'>Privacy</a>
            </li>
            <li>
              <a href='#'>Speed Test</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
