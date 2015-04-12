var selected = false;

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