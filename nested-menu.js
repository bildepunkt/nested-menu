(function($) {
    $.fn.nestedMenu = function(options) {
        var self = this;
        var $self = $(self);

        self.init = function(options) {
            if (options && options.call) {
                if (typeof(this[options.call]) === 'function') {
                    this[options.call]();
                    return false;
                }
            }

            $self.find('> li').bind('click.nested-menu', self.onLiClick);
            $self.find('> li > ul > li').bind('click.nested-menu', self.onCloseAll);
            $(document).bind('click.nested-menu', self.onCloseAll);
        };

        self.onLiClick = function(e) {
            var $li = $(this);
            var $liUl = $li.find('ul');

            e.preventDefault();
            e.stopPropagation();

            $self.find('ul').stop().fadeOut('fast');

            if ($liUl.css('display') == 'none') {
                $liUl.stop().fadeIn('fast');
            } else {
                $liUl.stop().fadeOut('fast');
            }
        };

        self.onCloseAll = function(e) {
            e.preventDefault();
            e.stopPropagation();

            $self.find('ul').stop().fadeOut('fast');
        };

        self.destroy = function() {
            $self.find('> li').unbind('click.nested-menu');
            $self.find('> li > ul > li').unbind('click.nested-menu');
            $(document).unbind('click.nested-menu');
        };

        self.init(options);
    };
}(jQuery));