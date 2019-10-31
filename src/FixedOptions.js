import React, { Component } from 'react';

import CreatableSelect from 'react-select/lib/Creatable';
import { colourOptions } from './data';

export default class FixedOptions extends Component<*, State> {
    handleChange = (newValue: any, actionMeta: any) => {
        console.group('Value Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };
    render() {
        return (
            <CreatableSelect
        isMulti
        onChange={this.handleChange}
        options={colourOptions}
        />
    );
    }
}
