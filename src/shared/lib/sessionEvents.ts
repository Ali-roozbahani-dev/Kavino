
export type SessionEvent = "login" | "logout";
type Listener = (event: SessionEvent) => void;

const listeners = new Set<Listener>();

export const sessionEvents = {
  emit(event: SessionEvent) {
    listeners.forEach((fn) => fn(event));
  },
  subscribe(fn: Listener) {
    listeners.add(fn);
    return () => {
      listeners.delete(fn);
    };
  },
};