import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="#project-section">Projects</a>
        </li>
        <li>
          <a href="#exper">Experience</a>
        </li>
        <li>
          <a href="#cta-id">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;