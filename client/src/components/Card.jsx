/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import { Modal, Button } from 'antd';

import { Card } from 'antd';
import './card.css';

import spinner from './spinner.gif';

export default class CardPokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: '',
      speed: '',
      attack: '',
      defense: '',
      hp: '',
      types: [],
      imageUrl: '',
      pokemonIndex: '',
      imageLoading: true,
      visible: false,
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  componentDidMount() {
    const { url } = this.props;

    fetch(url).then(data =>
      data.json().then(pokeData =>
        this.setState({
          height: pokeData.height,
          types: pokeData.types,
          speed: pokeData.stats[0].base_stat,
          attack: pokeData.stats[4].base_stat,
          defense: pokeData.stats[3].base_stat,
          hp: pokeData.stats[5].base_stat,
        }),
      ),
    );

    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({
      imageUrl,
      pokemonIndex,
    });

    const pokemonTypes = document.getElementsByClassName('pokemon-type');
    // pokemonTypes.forEach(el => console.log(el.innerText));
  }

  render() {
    const { name } = this.props;

    const typesItem = this.state.types.map((type, index) => (
      <li key={index} className="pokemon-type">
        {type.type.name}
      </li>
    ));

    return (
      <div className="site-card-border-less-wrapper">
        <Card title={name} bordered={false} style={{ width: 300 }}>
          {this.state.imageLoading ? (
            <img src={spinner} alt="pokemon pic" />
          ) : null}
          <img
            onLoad={() => this.setState({ imageLoading: false })}
            src={this.state.imageUrl}
            alt="pokePic"
          />
          <div className="card-content">
            <p>height: {this.state.height}</p>
            <p>HP: {this.state.hp}</p>
            <ul className="types-list" style={{ listStyle: 'none' }}>
              {typesItem}
            </ul>
          </div>
          <Button
            type="primary"
            onClick={this.showModal}
            style={{ marginTop: '1em' }}
          >
            Open Modal
          </Button>
        </Card>
        <Modal
          title={name}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>speed: {this.state.speed}</p>
          <p>attack: {this.state.attack}</p>
          <p>defense: {this.state.defense} </p>
        </Modal>
      </div>
    );
  }
}
