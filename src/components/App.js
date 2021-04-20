import React from 'react';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import Burger from './Burger';
import sampleBurgers from '../sample-burgers';

class App extends React.Component {
  state = {
    burgers: {},
    order: {},
  };

  addBurger = (burger) => {
    // 1. Делаем копию объекта state
    const burgers = {...this.state.burgers};
    // 2.Добавить новый бургер в переменную burgers
    burgers[`burger${Date.now()}`] = burger;
    // 3. Записать наш новый объект burgers в state
    this.setState({burgers});
  };

  // Загружаем все наши бургеры
  loadSampleBurgers = () => {
    this.setState({burgers: sampleBurgers});
  };

  render() {
    return (
      <div className="burger-paradise">
        <div className="menu">
          <Header title="Very Hot Burger" />
          <ul className="burgers">
            {Object.keys(this.state.burgers).map(key => {
              return <Burger
                key={key}
                index={key}
                details={this.state.burgers[key]}
              />
            })}
          </ul>
        </div>
        <Order />
        <MenuAdmin
          addBurger={this.addBurger}
          loadSampleBurgers={this.loadSampleBurgers}
        />
      </div>
    );
  }
}

export default App;