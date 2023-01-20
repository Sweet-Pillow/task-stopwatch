import Form from '../components/Form';
import List from '../components/List';
import Style from './App.module.scss';
import Stopwatch from '../components/Stopwatch';

function App() {
  return (
    <div className={Style.AppStyle}>
      <Form />
      <List />
      <Stopwatch />
    </div>
  );
}

export default App;
