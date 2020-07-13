import React, { Component } from 'react';
import Select from 'react-select';
import Search from '../img/search.svg';
import US from '../img/us.svg';
import India from '../img/india.svg';
import UK from '../img/uk.svg';

const options = [
  {
    value: 'San Francisco',
    label: (
      <div className='eachOption'>
        <span>
          <img alt=' ' src={US} width='24' height='16' />
        </span>{' '}
        <span className='text-country'>San Francisco</span>
      </div>
    ),
  },
  {
    value: 'United Kingdom',
    label: (
      <div className='eachOption'>
        <span>
          <img alt=' ' src={UK} width='24' height='16' />
        </span>{' '}
        <span className='text-country'>United Kingdom</span>
      </div>
    ),
  },
  {
    value: 'India',
    label: (
      <div className='eachOption'>
        <span>
          <img alt=' ' src={India} width='24' height='16' />
        </span>{' '}
        <span className='text-country'>India</span>
      </div>
    ),
  },
];

class SearchBar extends Component {
  state = {
    selectedOption: 'San Francisco',
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <div className='searchbar'>
        <input
          className='domain-searchbar'
          placeholder='Domain/URL or Keyword'
          type='search'
        />
        <Select
          value={selectedOption}
          options={options}
          onChange={this.handleChange}
          className='location-select'
          classNamePrefix='country-select'
          placeholder={
            <div className='eachOption'>
              <span>
                <img alt=' ' src={US} width='24' height='16' />
              </span>{' '}
              <span className='text-country'>San Francisco</span>
            </div>
          }
        />
        <button className='search-button'>
          <img alt=' ' src={Search} />
        </button>
      </div>
    );
  }
}

export default SearchBar;
