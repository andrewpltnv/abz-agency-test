import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal');

export default class Modal extends React.Component<any, any> {
  el: HTMLDivElement;
  constructor(props: any) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // @ts-ignore
    modalRoot.appendChild(this.el);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    // @ts-ignore
    modalRoot.removeChild(this.el);
    document.body.style.overflow = 'unset';
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}
