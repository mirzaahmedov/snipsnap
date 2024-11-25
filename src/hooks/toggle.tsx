import { useState, useCallback } from "react";

const useToggle = (initialState: boolean = false) => {
  const [state, setIsOpen] = useState(initialState);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return {
    isOpen: state,
    open,
    close,
    toggle,
    setState: setIsOpen,
  };
};

export { useToggle };
