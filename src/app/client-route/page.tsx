"use client";
import { serverSideFunction } from "@/utils/server-utils"
export default function ClientRoute() {
    const result = serverSideFunction();
  return (
    <div>
        <p>ClientRoutePage</p>
        <hr />
        <p>Result: {result}</p>
    </div>
  )
}
