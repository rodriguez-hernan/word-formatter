import React, { Component } from 'react';
import FormatterModal from './FormatterModal';

class Formatter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      modalOpen: false,
      currentWord: null
    }

    // this.buildWordsState = this.buildWordsState.bind(this);
  }

  componentDidMount(){
    const { children } = this.props; 
    const wordsArray = children.split(' ');
    if(wordsArray.length > 0){
      this.setState({ words: this.buildWordsState(wordsArray) });
    }
  }

  // Gets every word inside children and 
  buildWordsState = (wordsArray) => {
    const wordsState = [];
    wordsArray.forEach( (word, index) => {
      const value = {
        id: index,
        label: word, // actual word
        format: { 
          underline: false,
          italic: false,
          bold: false,
        },
      };
      wordsState.push(value);
    })
    return wordsState;
  }

  changeFormat = (format) => {
    const value = format.target.value;
    const wordToChange = this.state.currentWord;
    wordToChange.format[value] = !wordToChange.format[value];
    console.log('wordToChange', wordToChange)
  } 

  handleOpen = (event) => {
    const { words } = this.state;
    const word = words.filter( word => word.id == event.target.id )[0];
    this.setState({ modalOpen: true, currentWord: word });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };
  
  render() {
    const { words, modalOpen, currentWord } = this.state; 
    const formatWords = words.map( (word, index) => {
      const space = index ? ' ' : '';
      return (
        <span
          id={word.id}
          key={`${word.id}-${word.label}`}
          onClick={this.handleOpen}
        >
          {space}{word.label}
        </span>
      );
    })
    console.log('state', this.state)
    return (
      <div>
        {formatWords}
        <FormatterModal
          open={modalOpen}
          closeModal={this.handleClose}
          handleChange={this.changeFormat}
          word={currentWord}
        />
      </div>
    );
  }
}

export default Formatter;