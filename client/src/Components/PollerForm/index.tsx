import React, { useState } from 'react';

import Login from '../Login';

import './PollerForm.css';

function PollerForm(props: any) {
  const [loginState, setLoginState] = useState(false);

  const loginStateHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setLoginState(!loginState);
  };

  return (
    <div className="pollerForm">
      {loginState ? <Login /> : ''}
      <p>Become a Poller. Sign up now</p>
      <span>
        or{' '}
        <a onClick={props.clickHandler} href="/">
          click here
        </a>{' '}
        to register as a voter
      </span>
      <form>
        <div className="half">
          <input type="text" placeholder="First name" />

          <input type="text" placeholder="Last name" />
        </div>
        <input type="text" placeholder="Company name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign up</button>{' '}
        <a onClick={loginStateHandler} href="/">
          or Login
        </a>
        <p>
          <input type="checkbox" /> I agree to <a href="/#">Pollark terms</a>
        </p>
      </form>
    </div>
  );
}

export default PollerForm;
