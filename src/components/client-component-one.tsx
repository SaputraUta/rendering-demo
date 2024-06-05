"use client";
import { useState } from "react";
import ServerComponentOne from "./server-component-one";

export default function ClientComponentOne({children} : { children: React.ReactNode }) {
    const [count, setCount] = useState(0);
  return (
    <div>
        <p>client-component-one</p>
        {children}
    </div>
  )
}
