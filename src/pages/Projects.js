import React, { Component } from 'react';
import job from '../images/jobb.png';
import tech from '../images/tech-blog.png';

export default class Projects extends Component {
  render() {
    return (
      <div>
        Projects
        <section id='Project'>
          <h2 className='container'>Portfolio</h2>
          <div className='container3'>
            <div className='container3'>
              <a
                href='https://github.com/medeldiego47/job_board'
                target='blank'
              >
                <img
                  src={job}
                  width='200px'
                  height='200px'
                  alt='project 1'
                ></img>
              </a>
              <p class='cap'>Grab-A-Job</p>
            </div>
            <div class='container3'>
              <a href='https://github.com/DBEdelson/Tech-Blog-' target='blank'>
                <img
                  src={tech}
                  width='200px'
                  height='200px'
                  alt='project 1'
                ></img>
              </a>
              <p className='cap'>Tech Blog</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
