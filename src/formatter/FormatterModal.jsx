import React from 'react';
import Modal from '@material-ui/core/Modal';
import { Button, FormControl, FormGroup, FormControlLabel } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import './formatter.css';

const FormatterModal = (props) => {

  const { open, closeModal, handleChange, word } = props;
  
  if (!word) {
    return null;
  }
  
  return (
    <Modal open={open}>
        <div className="modal">
          <h2 id="modal-title">Select formats for {word.label}</h2>
          
          <FormControl>
            <FormGroup>
              <FormControlLabel 
                control={<Checkbox checked={word.format.underline} onChange={handleChange} value="underline" />}
                label="underline"
              />
              <FormControlLabel 
                control={<Checkbox checked={word.format.bold} onChange={handleChange} value="bold" />}
                label="bold"
              />
              <FormControlLabel 
                control={<Checkbox checked={word.format.italc} onChange={handleChange} value="italic" />}
                label="italic"
              />
            </FormGroup>
          </FormControl>
          <Button onClick={closeModal}>Close</Button>
        </div>
      </Modal>
  );
};

export default FormatterModal;