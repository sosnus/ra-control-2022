import asyncio

import random
import websockets
import json
import random

class robot():

    def __init__(self): 
        self.px=44
        self.py=44
        self.pz=44
        self.ox=44
        self.oy=44
        self.oz=44
        self.w=44
        self.po=44
        self.sa=44
        self.sb=44
        self.ham=44
        self.st=44
      
    def myfunc(self):
        print(  self.px)
        print(self.py)
        print(self.pz)
        print(self.ox)
        print(self.oy)
        print(self.oz)
        print(self.w)
        print(self.po)
        print(self.sa)
        print(self.sb)
        print(self.ham)
        print(self.st)
        
    def returnRandom(self):
        self.px=str(round(random.random()*100,2))
        self.py=str(round(random.random()*100,2))
        self.pz=str(round(random.random()*100,2))
        self.ox=str(round(random.random()*100,2))
        self.oy=str(round(random.random()*100,2))
        self.oz=str(round(random.random()*100,2))
        self.po=str(round(random.random()*100,2))
        self.sa=str(round(random.random()*100,2))
        self.sb=str(round(random.random()*100,2))
        self.ham=str(round(random.random()*100,2))
        self.st=str(round(random.random()*100,2))

async def time(websocket, path):
    p1=robot()
    while True:
        p1.returnRandom()
        p1.myfunc()
        f2=json.dumps(p1.__dict__)
        print(f2)
        p1.returnRandom()
        f2=json.dumps(p1.__dict__)
        await websocket.send(f2)
        await asyncio.sleep(random.random() * 3)

start_server = websockets.serve(time, 'srv12.mikr.us', 20272)
# var ws = newWebSocket("ws://srv12.mikr.us:20272/"),

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()