import React, { Component } from 'react';
import Astro from './Astro';

export default class App extends Component {
    state = {
        astros: []
    }
    
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(info => this.setAstros(info["people"]))
    }
    
    setAstros = (astros) => {
        const allAstros = astros.map(astro => {
            return astro.name
        })

        this.setState({
            astros: allAstros
        })
    }

    displayAstros = () => {
        return this.state.astros.map(astro => {
            return <Astro name={astro} />
        })
    }

    render() {
        return (
            <div>
                {this.displayAstros()}
            </div>
        )
    }
}