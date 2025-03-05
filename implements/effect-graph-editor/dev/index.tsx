import ReactDOM from 'react-dom';
import { GraphEditor } from '../src';
import './normalize.css';

async function main() {
  ReactDOM.render(
    <div style={{ height: '100vh', width: '100vw' }}>
      <GraphEditor />
    </div>,
    document.getElementById('app')
  );
}

main();
