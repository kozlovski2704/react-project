import './App.css';
import { connect } from 'react-redux'

import { getMenu  as getMenuAction } from './redux/modules/menu'
import MenuLeft from './components/Menu'

function App({ menu, getMenu }) {


  return (
    <div className="App">
      <MenuLeft id="1" type="asd" label="asd" />
    </div>
  );
}

export default connect(
  ({ menu }) => ({ menu }),
  {
    getMenu: getMenuAction
  }
)(App);
