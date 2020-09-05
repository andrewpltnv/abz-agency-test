import React from 'react';
import './_ModalMenu.scss';

type Props = {
  onClose: () => void,
  text: string
}

export default function ModalMenu(props: Props) {
  return (
    <div className="modalOverlay" onClick={props.onClose}>
      <div className="modalWindow">
        <h2>LOL KEK{props.text}</h2>
      </div>
    </div>
  );
}
