// Retrieve the viewport width and build up conditionals for enable/disable or switch between effects

// Retrieve the target element height and cut it with a blur effect at the set height, depending of the viewport width and device orientation

// Set an event that trigger the show action, like when you scroll to the target element
//this.css( "color", "green" );
;( function( $, window, document, undefined ) {
    "use strict";

    var pluginName = "ficShowMore";
    var defaults = {
        maxHeight: 150
    };

    function Plugin ( element, options ) {
        this.element = element;
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    $.extend( Plugin.prototype, {
        init: function() {
            // console.log( "ready" );
            $( this.element ).css( "overflow", "hidden" );

            $( this.element ).find( "*[data-fic-trigger]" ).click(function() {
                // console.log( "bar" );
                $( "p" ).css( "color", "red" );
            } );

            $( this.element ).find( "p" ).css( "color", "green" );
            // console.log($( this.element ).innerHeight());
        }
    });

    $.fn[ pluginName ] = function( options ) {
        return this.each(function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                  $.data( this, "plugin_" +
                          pluginName, new Plugin( this, options ) );
            }
        } );
    };
} )( jQuery, window, document );
