import './App.css';
import TemperatureConverter from './components/TemperatureConverter';
import TodoLis from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TemperatureConverter />
      <TodoLis />
    </div>
  );
}

export default App;
