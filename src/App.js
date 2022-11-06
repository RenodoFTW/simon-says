import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {

    document.title = "Simon Says";

  }, []);
  return (
    <div className='App bg-darkblue'>
      <script src="./Gamecode.js"></script>
      <h1 id="level-title">Press A Key to Start</h1>
      <div className='container'>
        <div className='row'>

          <button id="green" className='btn green'>

          </button>

          <button id="red" className='btn red'>

          </button>
        </div>

        <div className='row'>

          <button id="yellow" className='btn yellow'>

          </button>
          <button id="blue" className='btn blue'>

          </button>

        </div>

      </div>
    </div>
  );
}

export default App;
