import * as React from "react";

const Debug = ({ data = null }: { data?: any }) => {
  return data ? (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  ) : null;
};

export default Debug;
