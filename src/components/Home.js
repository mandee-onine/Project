import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart, addQuantity, subtractQuantity } from './actions/cartActions'
import { Link } from 'react-router-dom';

// import axios from 'axios';


class Home extends Component {
    // state = {
    //     persons: []
    // }

    // componentDidMount() {
    //     axios.get(`localhost:1337/api/v1/agent/getassignments`)
    //         .then(res => {
    //             const persons = res.data;
    //             this.setState({ persons });
    //         })
    // }


    handleClick = (id) => {
        this.props.addToCart(id);
    }

    _increaseQuantity = (id) => {
        this.props.addQuantity(id, 1);
    }

    _decreaseQuantity = (id, quantity) => {
        if (quantity > 1) {
            this.props.subtractQuantity(id, -1);
        }

    }


    render() {
        let itemList = this.props.items.map(item => {
            return (
                <div className="card" key={item.id}>
                    <div className="card-image">
                        <Link to="/cart" onClick={() => { this.handleClick(item.id) }}> <img src={item.imgURL} alt={item.name} /></Link>
                        {/* <span to="/" className="btn-floating halfway-fab waves-effect waves-light green" onClick={() => {
                            this.handleClick(item.id)
                        }}>
                            <i className="material-icons">add</i>
                        </span> */}
                        <span className="card-title" style={{ fontSize: "20px" }}>{item.name}</span>
                    </div>
                    <h6 onClick={() => { this.handleClick(item.id) }}>
                        <Link to="/Home">
                            <span className="btn green" onClick={() => { this._increaseQuantity.bind(item.id) }}><i className="material-icons">add</i></span>
                        </Link> : <span>Qty</span> {item.quantity}
                    </h6>

                    <div className="card-content">
                        {/* <p>{item.desc}</p> */}
                        <p><b>Selling Price: {item.price} ₹</b></p>
                        <p style={{ color: "red" }}><b><strike>MRP: {item.MRP} </strike></b></p>
                    </div>
                </div>

            )
        })

        return (
            <div className="container-fluid l-margin-left">
                <h4 className="center">Our Products</h4>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items,
        itemList: state.itemList
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)