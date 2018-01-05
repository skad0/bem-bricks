modules.define('fold__show', ['i-bem-dom'], function(provide, bemDom) {
    var Show = bemDom.declElem('fold', 'show', {
        _onShowClick: function() {
            this._emit('click');
            bemDom.destruct(this.domElem);
        }
    }, {
        lazyInit: true,

        onInit: function() {
            this._domEvents().on('click', this.prototype._onShowClick);
        }
    });

    provide(Show);
});
