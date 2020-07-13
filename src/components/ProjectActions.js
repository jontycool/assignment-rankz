import React from 'react';
import Search from '../img/search-project.svg';
import Refresh from '../img/refresh.svg';
import Add from '../img/add.svg';

const handleRefresh = () => {
  alert('This will refresh all Project Data.');
};

const handleProject = () => {
  alert('This will add new Project details.');
};

const ProjectActions = ({ searchChange }) => {
  return (
    <div className='project-action'>
      <div className='project-searchbar-container'>
        <img alt=' ' src={Search} />
        <input
          className='project-searchbar'
          placeholder='Search projects'
          type='search'
          onChange={searchChange}
        />
      </div>
      <div className='button-container'>
        <button className='refresh-button' onClick={handleRefresh}>
          <img alt=' ' src={Refresh} />
          <span>Refresh All</span>
        </button>
        <button className='project-button' onClick={handleProject}>
          <img alt=' ' src={Add} />
          <span>New Project</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectActions;
