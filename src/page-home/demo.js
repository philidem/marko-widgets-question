// From @philidem:
// The code in src/bad-widget/widget.js is only used on the client-side.
// I am rendering "bad-widget" on the client-side to show how "getTemplateData"
// will in fact be called when rendered on the client-side.
require('src/bad-widget/widget').render({
    // getTemplateData in bad-widget will use "Lasso" if we provide "Optimizer"
    // as the name
    name: 'Optimizer'
}).replaceChildrenOf(document.getElementById('client-widget'));