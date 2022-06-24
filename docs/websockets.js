function reconnect(obj){
    var mySocket = obj.mySocket;
    try {
        obj.mySocket=new WebSocket(mySocket.url);
    }
    expect {
        setTimeout(reconnect, 8000, obj);
    }
}

mysocket=new Websocket(myurl);
mysocket.close()
var wrapperObject = {mysocket};
reconnect(wrapperObject);