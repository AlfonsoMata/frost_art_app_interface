import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import ImageGrid from './components/GridImageComponent';

function App() {
  return (
    <div>
      <p>Esta es mi App</p>
      <ClassComponent/>
      <FunctionalComponent propText="Isac and his mother"/>
      <ImageGrid/>
    </div>
  );
}

export default App;
