import React, { Component } from 'react';

export default class App extends Component {
    constructor( props ) {
        super(props);

        this.state = {};
    }

    componentWillMount() {
        //Called the first time the component is loaded right before the component is added to the page
    }

    componentDidMount() {
        //Called after the component has been rendered into the page
    }

    componentWillReciveProps( nextProps ) {
        //Called when the props provided to the component are changed
    }

    componentWillUpdate( nextProps, nexState ) {
        //Called when the props and/or state change
    }

    componentWillUnmount() {
        //Called when the component as removed
    }

    render() {
        return (
            <div>React App</div>
        );
    }
}
