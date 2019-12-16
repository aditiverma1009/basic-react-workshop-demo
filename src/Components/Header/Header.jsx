import React from 'react';
import './Header.scss';
import PropTypes from 'prop-types';

const Header = (props) => (
  <div className="header">
    <button type="button" className="home" onClick={() => props.handleHeaderClick(true)}>Home</button>
    <button type="button" className="contact" onClick={() => props.handleHeaderClick(false)}>Contact</button>
  </div>
);

Header.propTypes = {
  handleHeaderClick: PropTypes.func.isRequired,
};
export default Header;
