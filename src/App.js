import './App.css';
import AppSkeleton from './pages/AppSkeleton';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <AppSkeleton />
      </Router>
    </div>
  );
}

export default App;
