import React, {useState} from 'react';
import './_Header.scss';
import Menu from "./Menu/Menu";

export default function Header() {
  const [isOpen, toggle] = useState(window.innerWidth >= 768);
  const [device, changeDevise] = useState((window.innerWidth < 768)?'mobile':'desktop');
  const open = () => {
    toggle(!isOpen);
  };
  window.addEventListener('resize',() => {
    changeDevise((window.innerWidth < 768)?'mobile':'desktop');
  });

  return (
    <div className="Header">
      <div className={"Menu "+device+" "+isOpen}>
        <div className="logo-picture"/>
        {device==='mobile'
          ?<button onClick={open} className="toggle-button"/>
          :null
        }
        {(isOpen)
          ?<Menu onClose={open} device={device}/>
          :null
        }
        {(!isOpen&&device==="desktop")
          ?<button onClick={open} className="toggle-button"/>
          :null
        }
      </div>
    </div>
  );
}
