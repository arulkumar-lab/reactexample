import React from "react";
import renderHTML from "react-render-html";
import PropTypes from 'prop-types';
class LoggingButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      className: props.className !== "" ? props.className : "action--primary",
      id: props.id !== "" ? props.id : "action-primary-0",
      progress: props.progress !== "" ? props.progress : false,
      text: props.text !== "" ? props.text : "Submit",
      isOptionalText: props.isOptionalText !== "" ? props.isOptionalText : false,
      isDisable: false
    };
    this.template =
      '<div class="loading--content"></div><div class="loading--spinner"></div>';

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      if(this.state.progress) {
          this.setState(state => ({
              isToggleOn: !state.isToggleOn,
              isDisable: true
          }));
          if(this.state.isOptionalText){
              this.state.text = "Loading, please wait";
          }
      }
  }

  render() {
    return (
      <button disabled={this.state.isDisable}
        id={this.state.id}
        type="submit"
        className={this.state.className}
        aria-live="assertive"
        role="alert"
        onClick={this.handleClick}
      >
        {this.state.text}
        <div className="float-right">&nbsp;
          {this.state.isToggleOn ? "" : renderHTML(this.template)}
        </div>
      </button>
    );
  }
}
LoggingButton.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    progress: PropTypes.bool,
    text: PropTypes.string,
    isOptionalText: PropTypes.bool
};

export default LoggingButton;
