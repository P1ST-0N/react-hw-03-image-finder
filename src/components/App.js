import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import ImageGallery from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";
import Section from './Section/Section';
import Searchbar from "./Searchbar/Searchbar";
import ScrollUp from './ScrollUp/ScrollUp';

export default class App extends Component {
  state = {
    imageName: '',
    showModal: false,
    modalImg: {
      src: '',
      alt: '',
    },
  };

  onFormSubmit = imageName => {
    this.setState({ imageName });
  };

  toggleModal = (src, alt) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalImg: {
        src,
        alt,
      },
    }));
  };

  render() {
    const { imageName, showModal, modalImg } = this.state;
    return (
      <>
        <Section>
          <Searchbar onSubmit={this.onFormSubmit} />
        </Section>
        <Section>
          <ImageGallery imageName={imageName} openModal={this.toggleModal} />
          <ScrollUp />
        </Section>

        {showModal && <Modal onClose={this.toggleModal} modalImg={modalImg} />}
        <ToastContainer autoClose={2000} />
      </>
    );
  }
}