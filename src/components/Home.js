import React, { Component } from 'react';
import '../css/Components.css';
import Collapsible from 'react-collapsible';
import { Projects } from '../data/Project';

import Logo from '../img/logo.png';
import Help from '../img/help.svg';
import Notification from '../img/notification.svg';
import User from '../img/user.png';
import SearchBar from './SearchBar';
import ProjectActions from './ProjectActions';
import ProjectList from './ProjectList';
import Dashboard from '../img/dashboard.svg';
import SiteExplorer from '../img/site-explorer.svg';
import KeywordExplorer from '../img/keyword-explorer.svg';
import RankTracker from '../img/rank-tracker.svg';
import DistributeContent from '../img/distribute-content.svg';
import PPCExplorer from '../img/ppc-explorer.svg';
import MoreTools from '../img/more-tools.svg';
import Integrations from '../img/integrations.svg';
import Arrow from '../img/arrow.svg';

class Home extends Component {
  state = {
    searchField: '',
    projects: [],
  };

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
    console.log(event.target.value);
  };

  render() {
    const filteredProjects = Projects.filter((project) => {
      return project.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div>
        <div className='sidebar'>
          <a href='#' className='main-logo'>
            <img alt=' ' src={Logo} />
          </a>
          <a href='#' className='active'>
            <span>
              <img alt=' ' src={Dashboard} width='20' height='20' />
            </span>
            <span>Dashboard</span>
          </a>
          <Collapsible
            trigger={
              <a href='#'>
                <span>
                  <img alt=' ' src={SiteExplorer} width='20' height='20' />
                </span>
                <span>Site Explorer</span>
                <span>
                  <img alt=' ' src={Arrow} />
                </span>
              </a>
            }
          >
            <p className='text-option'>Option 1</p>
            <p className='text-option'>Option 2</p>
          </Collapsible>
          <Collapsible
            trigger={
              <a href='#'>
                <span>
                  <img alt=' ' src={KeywordExplorer} width='20' height='20' />
                </span>
                <span>Keyword Explorer</span>
                <span>
                  <img alt=' ' src={Arrow} />
                </span>
              </a>
            }
          >
            <p className='text-option'>Option 1</p>
            <p className='text-option'>Option 2</p>
          </Collapsible>
          <a href='#'>
            <span>
              <img alt=' ' src={RankTracker} width='20' height='20' />
            </span>
            <span>Rank Tracker</span>
          </a>
          <Collapsible
            trigger={
              <a href='#'>
                <span>
                  <img alt=' ' src={DistributeContent} width='20' height='20' />
                </span>
                <span>Distribute Content</span>
                <span>
                  <img alt=' ' src={Arrow} />
                </span>
              </a>
            }
          >
            <p className='text-option'>Option 1</p>
            <p className='text-option'>Option 2</p>
          </Collapsible>
          <Collapsible
            trigger={
              <a href='#'>
                <span>
                  <img alt=' ' src={PPCExplorer} width='20' height='20' />
                </span>
                <span>PPC Explorer</span>
                <span>
                  <img alt=' ' src={Arrow} />
                </span>
              </a>
            }
          >
            <p className='text-option'>Option 1</p>
            <p className='text-option'>Option 2</p>
          </Collapsible>
          <Collapsible
            trigger={
              <a href='#'>
                <span>
                  <img alt=' ' src={MoreTools} width='20' height='20' />
                </span>
                <span>More Tools</span>
                <span>
                  <img alt=' ' src={Arrow} />
                </span>
              </a>
            }
          >
            <p className='text-option'>Option 1</p>
            <p className='text-option'>Option 2</p>
          </Collapsible>
          <a href='#'>
            <span>
              <img alt=' ' src={Integrations} width='20' height='20' />
            </span>
            <span>Integrations</span>
          </a>
        </div>
        <div className='main'>
          <div className='header'>
            <p>Dashboard</p>
            <div className='profile-container'>
              <div className='profile-actions'>
                <button>
                  <img alt=' ' src={Help} width='18px' height='18px' />
                </button>
                <button>
                  <img alt=' ' src={Notification} width='18px' height='18px' />
                </button>
              </div>
              <button className='user-icon'>
                <img alt=' ' src={User} width='36px' height='36px' />
              </button>
            </div>
          </div>
          <div className='main-body'>
            <div className='searchbar-container'>
              <SearchBar />
            </div>
            <div className='project-action-container'>
              <ProjectActions searchChange={this.onSearchChange} />
            </div>
            <ProjectList projectlist={filteredProjects} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
