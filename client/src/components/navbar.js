import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@material-ui/core';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  };

  logout(event) {
    event.preventDefault();
    console.log('logging out');
    axios
      .post('/api/user/logout')
      .then((response) => {
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null,
          });
        }
      })
      .catch((error) => {
        console.log(error)
      });
      window.location.replace("/");
     
  };

   render() {
    var loggedIn = this.props.loggedIn;

    return (
      <div>
        {loggedIn ? (
          <section className='navbar-section'>
            <Button color="primary">
            <Link
              onClick={this.logout}
            >
              <span className='text-secondary'>Logout</span>
            </Link>
            </Button>

            <Button color="primary"
            href="/journalentries">
            <Link>
              <span className='text-secondary'>Journal Home</span>
            </Link>
            </Button>

          </section>
          ) : (
          <section className='text-secondary'> 
            <Button color="primary"
              href="/login">
                Login
            </Button>
            
            <Button color="primary"
              href="/signup">
                Register
            </Button>
            
            <Button color="primary" href='/aboutus'>
                <span className='text-secondary'>About Us </span>
             
            </Button>
            <Button color="primary" href='/'>
                <span className='text-secondary'>Home </span>
            
            </Button>
          </section>
        )} 
      </div>
    );
  }
}

export default Navbar;
