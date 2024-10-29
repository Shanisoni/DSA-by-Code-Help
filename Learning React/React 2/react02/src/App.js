// import logo from './logo.svg';
import './App.css';
// import UScomponent from './UScomponent';
import USWithArray from './USWithArray';
import ClassComponent from './ClassComponent';
import FunctionState from './FunctionState';
import ControlForm from './ControlledComponent/ControlForm';
import ControlFormFunct from './ControlledComponent/ControlFormFunct';
import MultipleInput from './ControlledComponent/MultipleInput';
import MultipleFunc from './ControlledComponent/MultipleFunc';
import CheckBox from './CheckBoxesInReact/CheckBox';
import ReactRef from './ReactRefrence Component/ReactRef';
import UncontrolledComponent from './UncontrolledComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <>
      {/* <UScomponent/> */}
      {/* <ClassComponent/> */}
      {/* <ControlForm/> */}
      {/* <ControlFormFunct/> */}
      {/* <MultipleInput/> */}
      {/* <MultipleFunc/> */}
      {/* <CheckBox/> */}
      <ReactRef/>
      <UncontrolledComponent/>
      {/* <FunctionState/> */}
      {/* <USWithArray/> */}
      
      </>
      </header>
    </div>
  );
}

export default App;
