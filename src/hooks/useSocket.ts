import { useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import Config from 'react-native-config';

let socket: Socket | undefined;
const useSocket = (): [Socket | undefined, () => void] => {
    const disconnect = useCallback(() => {
        if (socket) {
            socket.disconnect();
            socket = undefined;
        }
    }, []);
    /*소켓 연결 중복 방지 소켓이없을때만 연결*/
    if (!socket) {
        socket = io(`${Config.API_URL}`, {
            transports: ['websocket'],
        });
    }
    return [socket, disconnect];
};

export default useSocket;
