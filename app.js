const buttonLabels = [
    "background(255, 204, 0);",
    "rect(30, 20, 55, 55);",
    "ellipse(10,10,10,10);"
];

const App = React.createClass({
    displayName: "App",
    render: function() {
        const buttons = buttonLabels.map(
            (label) => {
                var button =  React.createElement(Button,{label, handleClick: this.props.addText});
                return React.createElement('div', {className: 'button'}, button)
            }   
        );
        
        return React.createElement("div", {className: 'App'}, buttons);
    }
});

//make div that contains buttons, canvas, and textarea (make CC to contains buttons, Editor to )
// The < /> characters aren't recognized -- see error in the console
// research React states (this.state, this.setState)
//function in App that will append new code this.setState {}

/*var CodeEditor = React.createClass({
    displayName: "Editor",
    render: function () {
            return ( React.createElement
            <textarea rows={4} cols={50}/>
            );
        }
});


// same issue

class CanvasComponent React.Component {
    render() {
        return (
            <canvas ref="canvas" width={300} height={300}/>
        );
    }
}*/