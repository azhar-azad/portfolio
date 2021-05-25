import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Test from './test.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Route path='/portfolio' exact component={Test} />
      </div>
    </Router>
  );
}

export default App;
