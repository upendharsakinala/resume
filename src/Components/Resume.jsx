import React from 'react';
import './Resume.css';
import Projects from './Projects';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaJava,
  FaDatabase,
} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';
import Image from '../Components/Profile.jpeg';
import image from '../Components/image.jpeg';

export default function Resume() {
  return (
    <div className='main-content'>
      <div className='left-section'>
        <img src={Image} alt='profile' className='profileimg' />
        <h1 id='name'>Upendhar Sakinala</h1>
        <hr className='line' />
        <h4 id='techstack'>
          MERN Stack || Front-end Developer || Web-Developer
        </h4>

        <div className='socailmedia'>
          <span>
            {' '}
            <a href='http://www.linkedin.com/in/upendharsakinala'>
              <FaLinkedin className='icons' />
            </a>{' '}
          </span>
          <span>
            {' '}
            <a href='https://github.com/upendharsakinala'>
              <FaGithub className='icons' />
            </a>
          </span>
          <span>
            {' '}
            <a href='https://www.instagram.com'>
              <FaInstagram className='icons' />
            </a>
          </span>
        </div>
        <div id='details'>
          <div className='subdetail'>
            <FiMail /> Sakinalaupendhar@gmail.com
          </div>
          <div className='subdetail'>
            <FaPhone /> +91 9542859826
          </div>
          <div className='subdetail'>
            <MdLocationOn /> Hyderabad,508374
          </div>
        </div>
        <hr className='line' />
        <h3 className='skillsHeading'>SKILLS</h3>
        <div>
          <h4 className='skill'>
            {' '}
            <FaHtml5 /> HTML
          </h4>
          <hr id='html'></hr>
          <h4 className='skill'>
            <FaCss3 />
            CSS
          </h4>
          <hr id='css'></hr>
          <h4 className='skill'>
            <FaJs />
            Java-Script
          </h4>
          <hr id='js'></hr>
          <h4 className='skill'>
            <FaReact />
            React-Js
          </h4>
          <hr id='react'></hr>
          <h4 className='skill'>
            <FaNode />
            Node-Js
          </h4>
          <hr id='node'></hr>
          <h4 className='skill'>
            <FaDatabase />
            Mongo-DB
          </h4>
          <hr id='mongo'></hr>
          <h4 className='skill'>
            <FaJava />
            Java
          </h4>
          <hr id='java'></hr>
        </div>
        <hr className='line' />
        <h3 className='skillsHeading'>LANGUAGES</h3>
        <div>
          <h4 className='skill'>Telugu</h4>
          <hr id='telugu'></hr>
          <h4 className='skill'>English</h4>
          <hr id='english'></hr>
          <h4 className='skill'>Hindi</h4>
          <hr id='hindi'></hr>
        </div>
      </div>
      <div className='right-section'>
        <h3 className='career'>Career Objective:</h3>
        <p>
          Looking for a challenging position in a reputed organisation to
          enchance my skills and to grow with the organisation.
        </p>
        <div>
          <h3 className='headings'>Educational Qualifications:</h3>
          <table>
            <thead>
              <tr>
                <th>Level of Education</th>
                <th>Institution</th>
                <th>Year</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>B.Tech(Civil)</td>
                <td>Vignana bharathi institute of technology, Hyderabad</td>
                <td>2018-21</td>
                <td>7.0</td>
              </tr>
              <tr>
                <td>Diploma</td>
                <td>Government polytechnic college, Nalgonda</td>
                <td>2015-18</td>
                <td>8.1</td>
              </tr>
              <tr>
                <td>Matriculation</td>
                <td>Sri chaitanya techno school, Kodad</td>
                <td>2014-15</td>
                <td>9.2</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Projects />
      </div>
    </div>
  );
}
