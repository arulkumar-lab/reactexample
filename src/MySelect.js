import React from 'react';
import Select from 'react-select';
import FixedOptions from './FixedOptions';


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

class MySelect extends React.Component {
    state = {
        selectedOption: null,
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }
    render() {
        const { selectedOption } = this.state;

        return (
            <div id="select-da"><div id="select"><Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        /></div><div id="hello"><FixedOptions /></div></div>
    );
    }
}

export default MySelect;