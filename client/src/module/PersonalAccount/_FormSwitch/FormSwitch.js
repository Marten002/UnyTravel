import React, { Component } from 'react';
import './FormSwitch.css';
import FormSwitchItem from '../_FormSwitchItem/FormSwitchItem';

class FormSwitch extends Component {
    constructor(props){
        super(props);
        this.state  = {
            
        };
    };

    render() {

        let informationPropData = this.props.informationPropData;
        let readOnly = this.props.readOnly;

        return (
            <div className="lk-information--item">
                <div className="lk-information--header">
                    <span>{this.props.informationTabName}</span>
                </div>
                <div className="lk-information--body">
                    <div className="lk-form">
                        <FormSwitchItem 
                            informationPropData={informationPropData}
                            readOnly={readOnly}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default FormSwitch;
