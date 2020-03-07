import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';

// import { addShipping } from './actions/cartActions'
class Recipe extends Component {

    componentWillUnmount() {
        if (this.refs.shipping.checked)
            this.props.substractShipping()
    }

    handleChecked = (e) => {
        if (e.target.checked) {
            this.props.addShipping();
        }
        else {
            this.props.substractShipping();
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: "helooo "
        };
        // const addedItems = this.props
        // addedItems.addedItems
        axios.post(`https://jsonplaceholder.typicode.com/users`, user)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        console.log("addedItems", this.props.addedItems)
        return (
            <div className="container-fluid">
                <div className="collection">
                    <li className="collection-item">
                        <label>
                            <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
                            <span>Shipping(₹ +6)</span>
                        </label>
                    </li>
                    <li className="collection-item"><b>Total: ₹ {this.props.total}</b></li>
                </div>
                <div className="checkout">
                    <button className="waves-effect waves-light btn" onClick={this.handleSubmit}>Place Order</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addShipping: () => { dispatch({ type: 'ADD_SHIPPING' }) },
        substractShipping: () => { dispatch({ type: 'SUB_SHIPPING' }) }
    }
}

// export default class PersonList extends React.Component {
//     state = {
//         name: '',
//     }

//     handleChange = event => {
//         this.setState({ name: event.target.value });
//     }

//     handleSubmit = event => {
//         event.preventDefault();

//         const user = {
//             name: this.state.name
//         };

//         axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
//             .then(res => {
//                 console.log(res);
//                 console.log(res.data);
//             })
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <label>
//                         Person Name:
//               <input type="text" name="name" onChange={this.handleChange} />
//                     </label>
//                     <button type="submit">Add</button>
//                 </form>
//             </div>
//         )
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)

