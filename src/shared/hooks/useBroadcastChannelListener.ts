"use client";
import { useEffect } from "react";

export function useBroadcastChannelListener<TMessage>(
    channelName: string,
    onMessage: (message: TMessage) => void
) {
    useEffect(() => {
        const channel = new BroadcastChannel(channelName);
        channel.onmessage = (event: MessageEvent<TMessage>) => {
            onMessage(event.data);
        };
        return () => channel.close();
    }, [channelName, onMessage]);
}