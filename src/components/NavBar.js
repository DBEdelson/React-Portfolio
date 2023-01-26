import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div><>
      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid ">
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#About">About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Project">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
     
    </></div>
    )
  }
}
