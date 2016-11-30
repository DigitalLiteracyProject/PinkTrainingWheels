const Button = React.createClass({
    displayName: "Button",
    handleClick: function(event) {
	   console.log("button clicked");
        this.props.handleClick(this.props.label);
    },
    render: function() {
        return React.createElement(
            "button",
            {"onClick": this.handleClick},
            this.props.label
        );
    }
});

/*<button onClick="newText(this.innerHTML)" id="button1">background(255, 204, 0);</button>*/