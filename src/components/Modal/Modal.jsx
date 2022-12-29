import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';


const modalRoot = document.querySelector('#modalRoot');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      return this.props.onClose('');
    }
  };
  handleClick = (event) => {
    if (event.target === event.currentTarget) {
      return this.props.onClose('');
    }
}
  render() {
    return createPortal(
      <div className={styles.overlay} onClick={this.handleClick}>
        <div className={styles.modal}>
          <img src={this.props.pic} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  pic: PropTypes.string.isRequired,
};
