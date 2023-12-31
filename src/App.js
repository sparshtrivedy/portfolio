import './App.css';
import AppSkeleton from './pages/AppSkeleton';
import { BrowserRouter as Router } from 'react-router-dom';

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
