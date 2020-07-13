import React, { Component } from 'react';
import HelpSmall from '../img/help-small.svg';
import Up from '../img/up.svg';
import Down from '../img/down.svg';

class EachProject extends Component {
  render() {
    return (
      <div className='project-details'>
        <div className='project-header'>
          <div className='name-container'>
            <p className='text-bold'>{this.props.name}</p>
            <p className='text-regular url'>{this.props.url}</p>
          </div>
          <div className='action-container'>
            <p className='text-regular'>
              Last Updated: <span className='text-update'>1 hour ago</span>
            </p>
            <button className='menu-button'>
              <span className='dot'></span>
              <span className='dot'></span>
              <span className='dot'></span>
            </button>
          </div>
        </div>
        <hr />
        <div className='project-info'>
          <div className='avg-position'>
            <p className='text-regular'>
              Average Position{' '}
              <span>
                <img alt=' ' src={HelpSmall} />
              </span>
            </p>
            <div className='data'>
              <p className='text-data'>{this.props.avgPosition}</p>
              <p className='text-change'>+0.3</p>
            </div>
          </div>
          <div className='keywords'>
            <p className='text-regular'>
              Keywords{' '}
              <span>
                <img alt=' ' src={HelpSmall} />
              </span>
            </p>
            <div className='data'>
              <p className='text-data'>{this.props.keywords}</p>
            </div>
          </div>
          <div className='serp'>
            <p className='text-regular'>
              SERP{' '}
              <span>
                <img alt=' ' src={HelpSmall} />
              </span>
            </p>
            <div className='data'>
              <p className='text-data'>{this.props.serp}</p>
            </div>
          </div>
          <div className='positions'>
            <p className='text-regular'>
              Positions{' '}
              <span>
                <img alt=' ' src={HelpSmall} />
              </span>
            </p>
            <div className='data'>
              <p className='text-data'>
                <span>
                  <img alt=' ' src={Up} />
                </span>{' '}
                {this.props.position1}
              </p>
              <p className='text-data'>
                <span>
                  <img alt=' ' src={Down} />
                </span>{' '}
                {this.props.position2}
              </p>
            </div>
          </div>
          <div className='position-info'>
            <div className='line'>
              <p className='text-small'>#1-10</p>
              <p className='text-small black'>{this.props.line1[0]}</p>
              <p className='text-small black'>{this.props.line1[1]}</p>
            </div>
            <div className='line'>
              <p className='text-small'>#11-30</p>
              <p className='text-small black'>{this.props.line2[0]}</p>
              <p className='text-small green'>{this.props.line2[1]}</p>
            </div>
            <div className='line'>
              <p className='text-small'>#31-100</p>
              <p className='text-small black'>{this.props.line3[0]}</p>
              <p className='text-small red'>{this.props.line3[1]}</p>
            </div>
          </div>
          <div className='location'>
            <p className='text-regular'>
              Location{' '}
              <span>
                <img alt=' ' src={HelpSmall} />
              </span>
            </p>
            <div className='data'>
              <p className='flag'>
                <img alt=' ' src={this.props.flag} />
              </p>
              <p className='text-location'>{this.props.location}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EachProject;
