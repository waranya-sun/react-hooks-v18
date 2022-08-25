import './App.css';
import StateComponent from './StateComponent';
import EffectComponent from './EffectComponent';
import ContextComponent from './ContextComponent';
import RefComponent from './RefCommponent';
import ReducerComponent from './ReducerComponent';
import MemoComponent from './MemoComponent';
import CallbackComponent from './CallbackComponent';
import LayoutEffectComponent from './LayoutEffectComponent';
import ImperativeHandleComponent from './ImperativeHandleComponent';
import DebugValueComponent from './DebugValue';
import DeferredValueComponent from './DeferredValueComponent';
import TransitionComponent from './TransitionComponent';
import IdCompoment from './IdCompoment';

function App() {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>All about the React Hooks (v.18)</h1>
      </div>
      <div style={{ marginLeft: '50px' }}>
        <StateComponent />
        <EffectComponent />
        <ContextComponent />
        <RefComponent />
        <ReducerComponent />
        <MemoComponent />
        <CallbackComponent />
        <LayoutEffectComponent />
        <ImperativeHandleComponent />
        <DebugValueComponent />
        <DeferredValueComponent />
        <TransitionComponent />
        <IdCompoment />
      </div>
    </div>
  );
}

export default App;
