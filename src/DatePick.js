import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import getDay from "date-fns/getDay";
import LoadingButton from "./LoadingButton";

class DatePickerForm extends React.Component {

    state = {
        date: null
    };

    handleChange = date => {
        this.setState({
            date: date
        });
    };

    isWeekday = date => {
        const day = getDay(date);
        return day !== 0 && day !== 6;
    };

    render() {
        return (
            <div className="row">

            <div className="column">
            <DatePicker
        showYearDropdown
        showMonthDropdown
        scrollableYearDropdown
        selected={this.state.date}
        onChange={this.handleChange}
        filterDate={this.isWeekday}
        placeholderText="Select a weekday"
            />
            </div>
            <div>
                <LoadingButton
                    id="contine"
                    progress={true}
                    className="action--primary"
                    text="continue"
        name="submitElectronicSignature"
                />
                        <LoadingButton
        id="contine"
        progress={false}
        className="action--primary"
        text="continue"
        isOptionalText={true}
            />
            <button class="action--primary LoadingButton" id="submit" name="submitapplication" data-analytics-label="Continue" data-analytics-crn="02344610893">
            Continue              </button>
            </div>
            </div>
    );
    }
}
export default DatePickerForm;