define({
    
    load: function( name, req, load, config )
    {
        req([ 'text!' + config.baseUrl + name + '.css' ], function( css ) {
            var style = document.createElement( 'style' );
            style.type = "text/css";
            style.innerHTML = css;
            
            document.getElementsByTagName( 'head' )[ 0 ].appendChild( style );
        });
    }
    
});