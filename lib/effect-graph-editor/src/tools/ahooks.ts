import { useMemo, useRef } from 'react';

type Noop = (this: any, ...args: any[]) => any;

type PickFunction<T extends Noop> = (
  this: ThisParameterType<T>,
  ...args: Parameters<T>
) => ReturnType<T>;

export function useMemorizedFn<Fn extends Noop>(fn: Fn): Fn {
  const ref = useRef<Fn>(fn);

  ref.current = useMemo(() => fn, [fn]);

  const memoizedFn = useRef<PickFunction<Fn>>();
  if (!memoizedFn.current) {
    memoizedFn.current = function (this, ...args) {
      return ref.current.apply(this, args);
    };
  }

  return memoizedFn.current as Fn;
}

export function preventDefault<Ev extends { preventDefault: () => void }>(
  ev: Ev
): void {
  return ev.preventDefault();
}
