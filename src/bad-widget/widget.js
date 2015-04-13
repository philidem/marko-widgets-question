var selected = false;

// From @philidem:
// Since this code is in "widget.js" it is only ran in the browser.
// If "bad-widget" is only rendered on the server then getTemplateData
// will never be called because it will only be part of the client-side
// render pipeline.
module.exports = require('marko-widgets').defineWidget({
    template: require.resolve('./template.marko'),

    getTemplateData: function(state, input) {
        var name = input.name;

        if (name == "Optimizer")
            name = "Lasso";

        return {
            name: name
        };
    },

    handleClick: function() {
        selected = !selected;
        this.setSelected(selected);
    },

    setSelected: function(selected) {
        this.el.style.backgroundColor = selected ? 'yellow' : 'transparent';
    }
});