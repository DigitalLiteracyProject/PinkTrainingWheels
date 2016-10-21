var Block = React.createClass({
    displayName: "Block",
    handleClick: function(event) {
	console.log("block code");
    },
    render: function() {
	console.log(this);
        return React.createElement(
            "p",
            {"onClick": this.handleClick},
            "BLOCK"
        );
    }
});
