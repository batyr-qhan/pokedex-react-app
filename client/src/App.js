import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb, Pagination, Input } from 'antd';

import Card from './components/Card';
import { findByLabelText } from '@testing-library/react';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      length: undefined,
      pokemonsCopy: [],
      lengthCopy: undefined,
      minValue: 0,
      maxValue: 10,
    };
  }

  onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };

  handleChange = (value, pageSize) => {
    // console.log(pageSize);
    if (value <= 1) {
      this.setState({
        minValue: 0,
        maxValue: pageSize,
      });
    } else {
      this.setState({
        minValue: value * pageSize - pageSize,
        maxValue: value * pageSize,
      });
    }
  };

  onSearch = value => {
    const { pokemons } = this.state;

    this.setState({
      pokemons: this.state.pokemonsCopy,
      length: this.state.lengthCopy,
    });

    pokemons.forEach(pokemon => {
      if (value === pokemon.name) {
        this.setState({
          pokemons: pokemons.filter(word => word.name === value),
          length: pokemons.filter(word => word.name === value).length,
        });
      }
    });
  };

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(allpokemon =>
        this.setState({
          pokemons: allpokemon.results,
          length: allpokemon.results.length,
          pokemonsCopy: allpokemon.results,
          lengthCopy: allpokemon.results.length,
        }),
      );
  }

  render() {
    const { pokemons } = this.state;
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">POKEDEX</Menu.Item>
            {/* <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item> */}
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content-header">
            <div>
              <Pagination
                showSizeChanger
                onShowSizeChange={this.handleChange}
                defaultCurrent={1}
                // defaultPageSize={9}
                total={this.state.length}
                onChange={this.handleChange}
                pageSizeOptions={['10', '20', '50']}
              />
            </div>
            <div>
              <Search
                placeholder="input search text"
                onSearch={this.onSearch}
                enterButton
              />
            </div>
          </div>
          <div className="site-layout-content">
            {pokemons
              .slice(this.state.minValue, this.state.maxValue)
              .map(pokemon => (
                <Card
                  key={pokemon.name}
                  name={pokemon.name}
                  url={pokemon.url}
                />
              ))}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default App;
