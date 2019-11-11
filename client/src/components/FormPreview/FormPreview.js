import React, { Component } from 'react';
import './FormPreview.css';

class FormPreview extends Component {

    render() { 

        let previewTitle = this.props.previewTitle;
        let previewDiscription = this.props.previewDiscription;

        return (
            <div className="preview__header">
                <div className="preview__title">
                    <span>{previewTitle}</span>
                </div>
                <div className="preview__discription">
                    <span>{previewDiscription}</span>
                </div>
            </div>
        );
    }
}

export default FormPreview;
