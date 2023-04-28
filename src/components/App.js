import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
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
    return (
      <>
      <Section>
        <SearchBar onSubmit={this.onFormSubmit} />
      </Section>
      <Section>
        qwerewrq
      </Section>

      <ToastContainer autoClose={2000} />
      </>
    )
  }
};