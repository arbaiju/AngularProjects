/**
 * Created by arxxbx on 10/15/2014.
 */
$( document ).ready(function() {
    $( "a" ).click(function( event ) {
        alert( "The link will no longer take you to jquery.com" );
        event.preventDefault();
        $( "a" ).addClass( "test" );
        $( this ).hide( "slow" );

        fill(17, 0, 255);

// a handy dandy ruler across the top
        var x = 0;
        text(x, x, 10);
        text(x+50, x+50, 10);
        text(x+100, x+100, 10);
        text(x+150, x+150, 10);
        text(x+200, x+200, 10);
        text(x+250, x+250, 10);
        text(x+300, x+300, 10);
        text(x+350, x+350, 10);


    });

});
