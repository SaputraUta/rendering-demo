import { serverSideFunction } from "@/utils/server-utils"
export default function ServerRoute() {
    const result = serverSideFunction();
    return (
      <div>
          <p>ServerRoute</p>
          <hr />
          <p>Result: {result}</p>
      </div>
    )
  }
  