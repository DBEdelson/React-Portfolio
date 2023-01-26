import React, { Component } from 'react'
import bored from '../images/bored.png'
import jobb from '../images/jobb.png'
import employee from '../images/employee.png'
export default class Projects extends Component {
  render() {
    return (
      <div>Projects
        <section id="Project">
            <h2 class="container">Portfolio</h2>
        <div class="container3">
            <div class="container3">
                <a href="http://stormy-cliffs-65992.herokuapp.com/" target="blank"><img class="img" src={employee} width="200px" height="200px" alt="project 1"></img></a>
                <p class="cap">Jays on your feet Project 3</p>
                
            </div>
            <div class="container3">
                <a href="https://catpolk.github.io/Bored-NO-MO-project-1/"><img src={bored} width="200px" height="200px" alt="project 1"></img></a>
                <p class="cap">Bored No Mo</p>
                
            </div>
            <div class="container3">
                <a href="https://grabajob.herokuapp.com/"><img src={jobb} width="200px" height="200px" alt="project 2"></img></a>

                <p class="cap">GrabAJob</p>
            </div>
           
          
        </div>
    </section>
      </div>
    )
  }
}

