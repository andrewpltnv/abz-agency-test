import React from 'react';
import './_Menu.scss';
import ModalMenu from "./ModalMenu/ModalMenu";
import Modal from "../../Modal/Modal";

type Menu = {
  device: string,
  // @ts-ignore
  onClose?: any
}

export default function Menu(props: Menu) {
  return(
    <>{
      (props.device==='desktop')
        ?PlainMenu()
        :<Modal><ModalMenu text={"Auuuuu"} onClose={props.onClose}/></Modal>
    }</>
  );
}

function PlainMenu() {
  return (
    <ul className="desktop">
      <li><a href="#about">About me</a></li>
      <li><a href="#relationships">Relationships</a></li>
      <li>Requirements</li>
      <li>Users</li>
      <li>Sign Up</li>
    </ul>
  );
}


