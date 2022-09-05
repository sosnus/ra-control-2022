function reconnect(obj){
    var mySocket = obj.mySocket;
    try {
        obj.mySocket=new WebSocket(mySocket.url);
    }
    return;
    }

    if (message.type === 'NEW_MESSAGE') {
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(data);
        }
      });
    }

  
    expect {
        setTimeout(reconnect, 8000, obj);
    }


mysocket=new Websocket(myurl);
setInterval(() => {
    if (socket.bufferedAmount == 0) {
      socket.send(moreData());
    }
  }, 100);