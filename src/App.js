import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layoults/Navi';
import Dashboard from "./layoults/Dashboard"

function App() {
  return (
    <div className="App">
      <Navi />
      <Dashboard />
    </div>
  );
}

export default App;
