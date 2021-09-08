import "./App.css";
import { Provider } from "react-redux";
import Posts from "./components/Posts";
import Postform from "./components/Postform";
import Header from "./components/Header"
import store from './store'

function App() {
  return (
    <Provider store={store}> 
    <div className="App">
    <Header/>
      <Postform />
      <hr color="#bfff2f" />
      <Posts  />
    </div>
    </Provider>
  );
  
}

export default App;
