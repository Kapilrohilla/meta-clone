import {createContext} from 'react';
import {io} from 'socket.io-client';
import type {Socket} from 'socket.io-client';
//@ts-ignore
export const SocketContext = createContext<Socket>({});

const socket = io('http://65.0.59.137:8080/');
const SocketContextProvider = ({children}: {children: React.JSX.Element}) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
export default SocketContextProvider;
