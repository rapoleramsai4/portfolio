"use client";

import { useEffect, useState } from "react";

export function RotatingRole({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (roles.length <= 1) return;
    const interval = setInterval(() => {
      setVisible(false);
      const timeout = setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length);
        setVisible(true);
      }, 300);
      return () => clearTimeout(timeout);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <span
      className={`inline-block text-accent transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {roles[index]}
    </span>
  );
}
