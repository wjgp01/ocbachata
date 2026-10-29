"use client";

import { type ReactNode, useSyncExternalStore } from "react";
import { tickets } from "@/content/event";

// The deadline only needs checking on load, so there is nothing to subscribe to.
const subscribe = () => () => {};
const presaleOpen = () => Date.now() < Date.parse(tickets.presaleEndsAt);

// Shows pre-sale messaging until the deadline passes, then the fallback (if any).
export function PresaleNotice({ children, fallback = null }: { children: ReactNode; fallback?: ReactNode }) {
  const open = useSyncExternalStore(subscribe, presaleOpen, () => true);
  return open ? children : fallback;
}
