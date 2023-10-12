import './App.css';
import CustomFormCSS from './components/CustomFormCSS';
import CustomFormInlineStyle from './components/CustomFormInlineStyle';
import {Button1, Button2} from './components/Buttons';
import CustomFormStyledComponents from './components/CustomFormStyledComponents';
import CustomFormCSSModules from './components/CustomFormCSSModules';

function App() {
  return (
    <div className="app-container">
      {/*<CustomFormCSS/>*/}
      {/*<CustomFormInlineStyle/>*/}
      {/*  <Button1 type='submit'>Click</Button1>*/}
      {/*  <Button2 type='submit'>Click</Button2>*/}
      {/*  <button>Click</button>*/}
      {/*  <CustomFormStyledComponents/>*/}
        <CustomFormCSSModules/>
    </div>
  );
}

export default App;
