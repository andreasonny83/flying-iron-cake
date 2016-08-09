(function ( $ ) {

    $.fn.ficShowMore = function() {

        var maxInitialHeight = 150;

        this.innerHeight(maxInitialHeight);
        this.css( "overflow", "hidden");

        this.find( "*[data-fic-trigger]" ).click(function(){
            console.log("bar");
            $( "p" ).css( "color", "red" );
        });
        this.find("p").css( "color", "green" );
        console.log(this.innerHeight());
        return this;
    };

    // Retrieve the viewport width and build up conditionals for enable/disable or switch between effects

    // Retrieve the target element height and cut it with a blur effect at the set height, depending of the viewport width and device orientation

    // Set an event that trigger the show action, like when you scroll to the target element
    //this.css( "color", "green" );

}( jQuery ));

$( "div[data-fic-container]" ).ficShowMore();
