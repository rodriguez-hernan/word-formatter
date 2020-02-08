import React, { Component } from 'react';
import './FileZone.css';
import Formatter from '../formatter/Formatter';

class FileZone extends Component {
    render() {
        return (
            <div id="file-zone">
                <div id="file">
                    <Formatter>
                        Hello, my name is Hernan
                    </Formatter>
                </div>
            </div>
        );
    }
}

export default FileZone;
