const channels = new Map<string, BroadcastChannel>(); // یک دیکشنری برای نگهداری تمام چنل ها

export function getChannel(channelName: string): BroadcastChannel | null {
  if (typeof window === "undefined" || typeof BroadcastChannel === "undefined") {
    return null;
  }

  let channel = channels.get(channelName);
  if (!channel) {
    channel = new BroadcastChannel(channelName);
    channels.set(channelName, channel);
  }
  return channel;
}