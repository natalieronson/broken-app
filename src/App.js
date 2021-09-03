import { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ItemPage from './ItemPage';
import MainPage from './MainPage';
import { testdata } from './mock-backend/testdata';

function App() {
  const [items, setItems] = useState(testdata)
  return (
    <div className="App">
        <Switch>
          <Route exact path="/item" render={() => <ItemPage items={items} />} />
          <Route render={() => <MainPage items={items} setItems={setItems} />} />
        </Switch>
    </div>
  );
}

export default App;
