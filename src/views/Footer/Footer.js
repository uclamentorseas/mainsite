import React, { Component } from 'react';

import SocialIcons from 'components/SocialIcons';

import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <SocialIcons />
      </div>
    );
  }
}
