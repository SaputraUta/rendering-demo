import fs from "fs";

export default function ServerComponentTwo() {
  fs.readFileSync("src/components/server-component-two.tsx", "utf-8");
  return (
    <div>
        <p>server-component-two</p>
    </div>
  )
}
