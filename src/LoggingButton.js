import React from "react";
import renderHTML from "react-render-html";
class LoggingButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            className: props.className !== "" ? props.className : "action--primary",
            id: props.id !== "" ? props.id : "action-primary-0",
            progress: props.progress !== "" ? props.progress : false,
            text: props.text !== "" ? props.text : "Submit"
        };

        this.template =
            '<div class="loading--content"></div><span class="add-on-text">Loading, please wait</span><div class="loading--spinner"></div>';

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
        return false;
    }

    render() {
        return (
            <button
                id={this.state.id}
                type="button"
                className={this.state.className}
                aria-live="assertive"
                role="alert"
                onClick={this.handleClick}
            >
        {this.state.text}
    <div className="float-right">
        {this.state.isToggleOn ? "" : renderHTML(this.template)}
    </div>
        </button>
    );
    }
}
export default LoggingButton;
