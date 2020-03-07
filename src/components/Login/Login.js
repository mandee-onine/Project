import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Login.css';


class Login extends Component {

    constructor(props) {

        super(props);

        this.state = {
            redirectToReferrer: false,
            password: "",
            email: '',

        };

        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onChange = this.onChange.bind(this);

    }
    // componentDidMount() {
    //     axios.post(`https://reqres.in/api/login`, { user })
    //         .then(res => {
    //             console.log(res);
    //             console.log(res.data);
    //         })
    // }

    // {
    //     "email": "eve.holt@reqres.in",
    //     "password": "cityslicka"
    // }

    login(key, data) {
        key.preventDefault();
        const postData = {
            email: this.state.email,
            password: this.state.password

        };

        if (postData.email === 'test@test.com' && postData.password === 'test') {
            this.setState({ redirectToReferrer: true });

        } else {
            alert("User details not found");
        }

    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleChange(e) {
        localStorage.setItem('Login', e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/SPdetails'} />)
        } else if (this.state.redirectToUser) {
            return (<Redirect to={'/Login'} />)
        }

        return (

            <div className="login">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>User Name</label><br />
                    <input type="text" name="email" className=".input100" value={this.state.email} placeholder="Enter Your UserName" onChange={this.handleChange} /><br />
                    <label>Password</label><br />
                    <input type="password" className=".input100" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} /><br /><br />
                    <input type="submit" className="submit" onClick={this.login} class="submit" name="commit" />
                </form>
            </div>
        )
    }
}

export default Login;