"use client";
import { useEffect } from "react";
import { getChannel } from "../lib/getChannel";

export function useBroadcastChannelListener<TMessage>(
    channelName: string,
    onMessage: (message: TMessage) => void
) {
    useEffect(() => {
        const channel = getChannel(channelName);
        if (!channel) return;

        const listener = (event: MessageEvent<TMessage>) => onMessage(event.data);
        channel.addEventListener("message", listener);

        return () => channel.removeEventListener("message", listener);
    }, [channelName, onMessage]);
}