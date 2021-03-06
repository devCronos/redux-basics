import React, { Component } from 'react';
import {connect} from 'react-redux';
// import * as actionTypes from '../../store/actions/actions'
import * as actionCreators from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubstractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)} >Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li onClick={() => this.props.onDeleteResult(strResult.id)} key={strResult.id} >{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    } 
}
// outside class def d
const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(10)),
        onSubstractCounter: () => dispatch(actionCreators.substract(15)),
        onStoreResult: (res) => dispatch(actionCreators.storeResult(res)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);