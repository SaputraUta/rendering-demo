"use client";
import { useState } from "react";

export default function ClientComponentTwo() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <p>client-component-two</p>
    </div>
  )
}
