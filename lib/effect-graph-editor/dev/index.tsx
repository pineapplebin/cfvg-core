import ReactDOM from 'react-dom';
import { GraphEditor, type NEffectGraph } from '../src';
import './normalize.css';

async function main() {
  const value: NEffectGraph.EffectLogic = {
    nodes: [
      {
        id: 'entry',
        type: 'entry',
        position: { x: 0, y: 0 },
        data: { desc: '效果' },
        draggable: false,
      },
    ],
    edges: [],
  };

  ReactDOM.render(
    <div style={{ height: '100vh', width: '100vw' }}>
      <GraphEditor initialValue={value} />
    </div>,
    document.getElementById('app')
  );
}

main();
