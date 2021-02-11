import './Bigbutton.scss';
import ModeContext from 'components/ModeContext/ModeContext';
import { useContext } from 'react';

const Bigbutton = () => {

const currentState = useContext(ModeContext);
  return (
    <>
    <button className={`button button--${currentState}`} onClick={currentState.setDay}>Day</button>
    <button className={`button button--${currentState}`} onClick={currentState.setNight}>Night</button>
  </>
  );
};


export default Bigbutton;
