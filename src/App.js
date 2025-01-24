import { Fragment } from 'react';
import './App.css';
import profile from './img/profile.png'
import pro from './images/pro.png'
import pro2 from './images/pro2.png'
import pro3 from './images/pro3.png'
import pro4 from './images/pro4.png'
import ProjectBox from './components/ProjectBox'
import Announcement from './components/Announcement';
import Trending from './components/Trending';

function App() {
  return (
    <div className="App">
      <Fragment>
        <div className="container">
          <div className="sidebar">
            <div className="head">
              <i className="fa-solid fa-grip-vertical fa-2xl" style={{ color: '#ffffff' }}></i>
              <h2>Dashboard</h2>
            </div>
            <div className="menu">
              <p>
                {' '}
                <i className="fa-solid fa-house" style={{ color: '#ffffff' }}></i>
                &nbsp; Home
              </p>{' '}
              <br />
              <p>
                <i className="fa-solid fa-user" style={{ color: '#ffffff' }}></i> &nbsp; Profile
              </p>
              <br />
              <p>
                <i className="fa-solid fa-message" style={{ color: '#ffffff' }}></i> &nbsp; Messages
              </p>
              <br />
              <p>
                <i className="fa-solid fa-clock-rotate-left" style={{ color: '#ffffff' }}></i> &nbsp; History
              </p>
              <br />
              <p>
                <i className="fa-solid fa-list-check" style={{ color: '#ffffff' }}></i> &nbsp; Tasks
              </p>
              <br />
              <p>
                <i className="fa-solid fa-users" style={{ color: '#ffffff' }}></i> &nbsp; Communities
              </p>
            </div>
            <div className="menu">
              <p>
                <i className="fa-solid fa-gear" style={{ color: '#ffffff' }}></i> &nbsp; Settings
              </p>
              <br />
              <p>
                <i className="fa-solid fa-circle-question" style={{ color: '#ffffff' }}></i> &nbsp; Support
              </p>
              <br />
              <p>
                <i className="fa-solid fa-shield-halved" style={{ color: '#ffffff' }}></i> &nbsp; Privacy
              </p>
            </div>
          </div>
          <div className="user-info">
            <div className="navbar">
              <div className="searchbar">
                <div className="search-menu">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input type="text" id="search" />
                </div>
                <div className="notification">
                  <i className="fa-solid fa-bell fa-xl"></i>
                  <img src={profile} alt="" />
                  <p>Nimesh Nilashan</p>
                </div>
              </div>
              <div className="profile">
                <div className="greetings">
                  <div className="greet-pic">
                    <img src={profile} alt="" />
                  </div>
                  <div className="greet">
                    <p style={{ fontSize: '11px', fontWeight: 'bold' }}>Hi there,</p>
                    <p style={{ fontWeight: 'bold', fontSize: '22px' }}>Nimesh Nilashan (@nimesh)</p>
                  </div>
                </div>
                <div className="profile-btns">
                  <button>New</button>
                  <button>Upload</button>
                  <button>Share</button>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="projects">
                <div className="project-head">
                  <h4>Your Projects</h4>
                </div>
                <div className="pro-boxes">
                  < ProjectBox title={"Super Cool Project"} />
                  < ProjectBox title={"Inspiring Space Project"} />
                  < ProjectBox title={"A React Project"} />
                  < ProjectBox title={"Built With React"} />
                  < ProjectBox title={"JavaScript Project"} />
                  < ProjectBox title={"Tailwind Project"} />

                </div>
              </div>
              <div className="updates">
                <div className="announcement">
                  <h4>Announcements</h4>
                  <div className="ann-cont">
                    <Announcement />
                  </div>
                </div>
                <div className="trending">
                  <h4>Trending</h4>
                  <div className="trend-cont">
                    <Trending name={"teddy"} pic={pro} />
                    <Trending name={"Babe"} pic={pro2} />
                    <Trending name={"Shan"} pic={pro3} />
                    <Trending name={"Jerry"} pic={pro4} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
}

export default App;
