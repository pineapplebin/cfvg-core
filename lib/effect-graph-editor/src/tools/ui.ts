import type { MouseEvent as ReactMouseEvent } from 'react';

export type MergedGestureEvent = {
  nativeEvent: TouchEvent | MouseEvent;
  offsetX: number;
  offsetY: number;

  preventDefault: () => void;
  stopPropagation: () => void;
};

export function calculateGestureEvent(
  ev: TouchEvent | MouseEvent | ReactMouseEvent,
  { target }: { target?: Element } = {}
): MergedGestureEvent {
  let currentTarget: Element | null = null;

  if (target) {
    currentTarget = target;
  } else if (ev.currentTarget instanceof Element) {
    currentTarget = ev.currentTarget;
  } else if (ev.target instanceof Element) {
    currentTarget = ev.target;
  }

  let currentTargetRect = currentTarget?.getBoundingClientRect();
  const pageX = 'pageX' in ev ? ev.pageX : ev.touches[0].pageX;
  const pageY = 'pageY' in ev ? ev.pageY : ev.touches[0].pageY;
  const offsetX = currentTargetRect ? pageX - currentTargetRect.left : 0;
  const offsetY = currentTargetRect ? pageY - currentTargetRect.top : 0;

  return {
    nativeEvent: 'nativeEvent' in ev ? ev.nativeEvent : ev,
    offsetX,
    offsetY,
    preventDefault: () => ev.preventDefault(),
    stopPropagation: () => ev.stopPropagation(),
  };
}
