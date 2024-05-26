import React, { Component } from 'react';
import './FormSwitchItem.css';

class FormSwitchItem extends Component {
    constructor(props){
        super(props);
        this.state  = {
            readOnly: ''
        };
    };

    render() {

        let informationPropData = this.props.informationPropData;

        return (
            <React.Fragment>
                {Object.keys(informationPropData.informationItemLabel).map((item, i) => {
                    return <div key={i} className="lk-form__item">
                                <div className="lk-form__name">
                                    <label htmlFor={informationPropData.informationItemLabel[i]}>{informationPropData.informationItemName[i]}</label>
                                </div>
                                <div className="lk-form__input">
                                    <input type="text" readOnly={this.props.readOnly} id={informationPropData.informationItemInputId[i]} name={informationPropData.informationItemInputName[i]} defaultValue={informationPropData.informationItemInputValue[i]}/>
                                </div>
                            </div>
                })}
            </React.Fragment>
        );
    }
}

export default FormSwitchItem;
