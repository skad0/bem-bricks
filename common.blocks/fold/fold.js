modules.define('fold', ['i-bem-dom', 'fold__show'], function(provide, bemDom, Show) {
    var Fold = bemDom.declBlock(this.name, {
        onSetMod: {
            expanded: function() {
                this._elem('container').domElem.css('height', '');
            }
        },

        _onShowClick: function(event) {
            this.setMod('expanded');
        }
    }, {
        lazyInit: true,

        onInit: function() {
            this._events(Show).on('click', this.prototype._onShowClick);
        }
    });

    provide(Fold);
});
