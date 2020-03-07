import React, { Component } from 'react';

import Select from 'react-select';

// import AppBar from 'material-ui/AppBar';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Customers = [
  { value: 'Maligai', label: 'Maligai' },
  { value: 'store', label: 'store' },
  { value: 'store2', label: 'store2' },
]

const Customer1 = [
  { value: 'SKS1', label: 'SKS1' },
  { value: 'RET store 1', label: 'RET store 1' },
  { value: 'store2', label: 'store2' },

]



class SPdetails extends Component {

  constructor() {
    super();
    this.state = {
      selection: 1,
      selectedOption: null,
      redirectToReferrer: false
    };

    this.handleChange = this.handleChange.bind(this);

  }



  handleChange(event, index, value) {
    //set selection to the value selected
    this.setState({ selection: value });

  }

  handleChange1 = selectedOption => {
    this.setState({ selectedOption });

  };



  handleSubmit = event => {
    event.preventDefault();
    const user = {
      selectedOption: this.state.selectedOption,
      selection: this.state.selection
    };

    axios.post(`http://localhost:3004/comments`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.redirect()
      })
  }

  pageControl() {
    if (this.state.selection === 1) {
      const { selectedOption } = this.state;

      return (
        <Select
          value={selectedOption}
          onChange={this.handleChange1}
          options={Customers}
          placeholder="select"
          className="input100"
          style={{ outline: 'none', border: 'none', height: '40px', marginBottom: '0' }}

        />

      );

    } else if (this.state.selection === 2) {

      const { selectedOption } = this.state;

      return (

        <Select
          value={selectedOption}
          onChange={this.handleChange1}
          options={Customer1}
          placeholder="select"
          className="input100"
          style={{ outline: 'none', border: 'none', height: '40px', marginBottom: '0' }}
        />
      );

    }

  }

  // redirect = () => {
  //   window.location.href = 'http://localhost:3000/Home';
  //   // maybe can add spinner while loading
  //   return null;
  // }

  render() {
    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/Home'} />)
    } else if (this.state.redirectToUser) {
      return (<Redirect to={'/'} />)
    }
    return (
      <div class="login100">
        <h4><center>Selling Product</center></h4>
        <div className="container-login">
          <MuiThemeProvider>
            <div class="login h-500 sides">
              <div class="ui container pt-5">
                <form onSubmit={this.handleSubmit} class="ui form">
                  <div class="field">
                    <label className="txt1 pb-11">Select Service Partner</label><br />
                    <div>
                      <DropDownMenu
                        value={this.state.selection}
                        onChange={this.handleChange}
                        style={{ width: '100%' }}
                        className="login10"
                      >
                        <MenuItem value={1} primaryText="SP 1" />
                        <MenuItem value={2} primaryText="SP 2" />
                      </DropDownMenu>
                    </div>
                  </div>
                  <div class="field">
                    <label className="txt1 pb-11">Select Customer</label>
                    <div>
                      {this.pageControl()}
                    </div>
                  </div>
                  <div class="field">
                    <div className="pb-l-55">
                      <Button type="submit" color="primary">Continue</Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default SPdetails;