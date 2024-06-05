import fs from "fs";

export default function ServerComponentOne() {
  fs.readFileSync("src/components/server-component-one.tsx", "utf-8");
  return (
    <div>
        <p>server-component-one</p>
    </div>
  )
}
