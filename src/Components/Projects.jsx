import React, { useState } from 'react';
import { FaCode, FaLink } from 'react-icons/fa';
import './Resume.css';

const projects = [
  {
    title: 'Netflix Clone',
    description:
      'This is static landing web page of netflix application.This is the old version page of netflix clone',
    time: 'Nov 2022',
    techstacks: 'HTML,CSS',
    hostlink: 'https://adoring-ramanujan-bee098.netlify.app/',
    gitlink: 'https://github.com/upendharsakinala/netflixclone',
  },
  {
    title: 'Meal Finder',
    description:
      'In this project we can search the different kind of meals and we can view the ingredients of meal',
    time: 'Dec 2022',
    techstacks: 'HTML,CSS,JS',
    hostlink: 'https://epic-poincare-f90ad0.netlify.app/',
    gitlink: 'https://github.com/upendharsakinala/MealFinder.git',
  },
  {
    title: 'Weather App',
    description:
      'In this we search the temperature of different locations over the world and also based on the time the background of the application will be changed to represent the outside condition',
    time: 'Jan 2022',
    techstacks: 'HTML,CSS,JS',
    hostlink: 'https://upbeat-carson-026b6e.netlify.app/',
    gitlink: 'https://github.com/upendharsakinala/WheatherApp.git',
  },
  {
    title: 'Form Table',
    description:
      'In this project we can add the data in the table and we can delete the data from the table and also we can edit the data in the table',
    time: 'Feb 2022',
    techstacks: 'HTML,CSS,JS',
    hostlink: 'https://naughty-roentgen-ad22ab.netlify.app/',
    gitlink: 'https://github.com/upendharsakinala/Form-Table.git',
  },
  {
    title: 'Dog Gallery Website',
    description:
      'In this project we can search the different kind of dogs and view breeds of dogs and also lot of images of project',
    time: 'March 2022',
    techstacks: 'React-Js',
    hostlink: 'https://mystifying-galileo-d432a2.netlify.app/',
    gitlink: 'https://github.com/upendharsakinala/Dog-Galery-Website.git',
  },
  {
    title: '',
    description: '',
    time: '',
    techstacks: '',
    hostlink: '',
    gitlink: '',
  },
];

export default function Projects() {
  const [messege, setMessage] = useState('');

  function handleMouseOver() {
    setMessage('Go to code');
  }

  function handleMouseOut() {
    setMessage('');
  }

  return (
    <div>
      <h3 className='headings'>Experience:</h3>
      <div>
        <span className='projectTitle'>
          Full Stack Development Development Program in Newton School
        </span>{' '}
        <time>Oct 2022-Present</time>
        <p>In this training i have worked on</p>
      </div>
      <h3 className='headings'>Projects:</h3>
      <div>
        <div className='messeage'>Go to code..</div>
        {projects.map((item, index) => {
          return (
            <div key={index} id='projectbox'>
              <div id='leftpart'>
                <span className='projectTitle'>{item.title}</span>
                <a
                  href={item.gitlink}
                  target='_blank'
                  rel='noreferrer'
                  className='gitlink'
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  <FaCode />
                </a>
                {messege}{' '}
                <a href={item.hostlink} target='_blank' rel='noreferrer'>
                  <FaLink />
                </a>
              </div>
              <time>{item.time}</time> <br />
              <p id='description'>{item.description}</p>{' '}
              <span id='techstacks'>{item.techstacks}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
