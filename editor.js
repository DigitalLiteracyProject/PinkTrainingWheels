const Editor = React.createClass({
    displayName: "Editor",
    render: function() {
        const editor =  React.createElement('textarea',{className = 'Editor'});
        return React.createElement("div", null, editor);
    }
});