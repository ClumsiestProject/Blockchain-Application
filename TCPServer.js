var net = require( 'net' );

var TCPServer = net.createServer( function ( socket ) {
    console.log( 'Someone Connects' );
    TCPServer.maxConnections = 3;
    TCPServer.getConnections( function( err, count ) {
        console.log( 'The count of client is ' + count );
    });
    
    var address = 'RemoteIP : ' + socket.remoteAddress + '   RemoteFamily : ' + socket.remoteFamily;
    address = address + '    RemotePort : ' + socket.remotePort + '    LocalAddress : ' + socket.localAddress;
    address = address + '    LocalPort : ' + socket.localPort;
    var message = 'Client, The TCP Server address is ' + JSON.stringify( address );

    socket.write( message, function() {
        var writeSize = socket.bytesWritten;
        console.log( message + ' has send! ');
        console.log( 'The size of message is ' + writeSize );
    });

    socket.on( 'data', function( data ) {
        console.log( data.toString() );
        var readSize = socket.bytesRead;
        console.log( 'The size of data is ' + readSize );
    });

});

TCPServer.listen( 18001, function() {
    console.log( 'TCP Server is listening ... ' );
});