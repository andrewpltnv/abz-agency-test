import React, {useState} from 'react';
import './_Header.scss';
import Menu from "./Menu/Menu";

export default function Header() {
  const [isOpen, toggle] = useState(false);
  const [device, changeDevise] = useState(checkWidth());

  function checkWidth(): string {
    return (window.innerWidth < 768)?'mobile':'desktop'
  }
  function open(): void {
    toggle(!isOpen);
  }
  window.addEventListener('resize',async () => {
    changeDevise(checkWidth());
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
