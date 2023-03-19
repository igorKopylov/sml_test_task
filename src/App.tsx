import { useState } from 'react';
import './App.scss';
import InputField from './components/InputField/index';
import Popup from './components/Popup';
import RadioInput from './components/RadioInput';
import ToggleSwitch from './components/ToggleSwitch/index';

function App() {
  const [activeId, setActiveId] = useState(0)
  const radioInputs = [
    { name: 'Оклад за месяц', value: '40000' },
    { name: 'МРОТ', value: '' },
    { name: 'Оплата за день', value: '1500' },
    { name: 'Оплата за час', value: '400' }
  ]

  return (
    <div className='app'>
      <h5 className='app__title'>Cумма</h5>
      <div className='app__radio-inputs'>
        {radioInputs.map((obj, i) => {
          return <RadioInput
            key={i}
            activeId={activeId}
            setActiveId={setActiveId}
            index={i}
            {...obj}
          />
        })}
        {
          activeId !== 1 && (
            <>
              <ToggleSwitch />
              <InputField value={radioInputs[activeId].value} />
            </>
          )
        }
        {activeId === 0 && <Popup />}
      </div>
    </div>
  );
}

export default App;
