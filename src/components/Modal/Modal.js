import { Component } from "react";
import { createPortal } from "react-dom";
import { Backdrop, ModalConent } from "./Modal.styled";

const modalRoot = document.querySelector(`#modal-root`);

export default class Modal extends Component {
  componentDidMount() {
    console.log("mont");
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log("rozmont");
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.close();
    }
  };

  hndleBackdropClick = (event) => {
    // {currentTarget ,target} = event
    if (event.currentTarget === event.target) {
      this.props.close();
    }
  };

  render() {
    return createPortal(
      <Backdrop onClick={this.hndleBackdropClick}>
        <ModalConent>{this.props.children}</ModalConent>
      </Backdrop>,
      modalRoot
    );
  }
}
