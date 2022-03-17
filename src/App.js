import './App.css';
import Tarea from './Componentes/Tarea/Tarea';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello Dojo!
        </h1>
        <h3>
          Things I need to do:
        </h3>
        <Tarea tareas="Learn React"/>
        <Tarea tareas="Climb Mt. Everest"/>
        <Tarea tareas="Rum a marathon"/>
        <Tarea tareas="Feed the dogs"/>
      </header>
    </div>
  );
}

export default App;
