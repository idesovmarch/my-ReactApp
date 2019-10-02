import React from 'react';
import {ReactComponent as Logo} from '../assets/logo.svg';

const divStyle = {
marginLeft: 'auto',
marginRight: 'auto',
marginBottom: 75,
width: 500
};


class Login extends React.Component {
    render() {
      return <div style={divStyle}>
        <Logo/>
    </div>
    }
  }

  export default Login;