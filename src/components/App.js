import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import ImageGallery from "./ImageGallery/ImageGallery";
import Section from './Section/Section';
import SearchBar from "./Searchbar/Searchbar";

export default class App extends Component {
  state = {
    imageName: '',
  };

  onFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    const { imageName } = this.state;
    return (
      <>
      <Section>
        <SearchBar onSubmit={this.onFormSubmit} />
      </Section>
      <Section>
        <ImageGallery imageName={imageName} openModal={this.toggleModal} />
      </Section>

      <ToastContainer autoClose={2000} />
      </>
    )
  }
};