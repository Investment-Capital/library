import WebSocket from "isomorphic-ws";
import constructUrl from "./constructUrl";

const webSocket = <T = any>(path: string) => {
  const ws = new WebSocket(constructUrl("ws", path));

  return {
    close: () => ws.close(),
    onMessage: (callback: (data: T) => any) => {
      ws.onmessage = (event: any) => callback(JSON.parse(event.data));
    },
  };
};

export default webSocket;
