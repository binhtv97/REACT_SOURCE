import React from "react";

export default function SkipEffectRenderFirst() {
  const [forceUpdate, setForcUpdate] = React.useState(Date.now());

  React.useEffect(() => {
    // code something here ...
    console.log("run skip effect render first");
  }, [forceUpdate]);

  return (
    <div className="App">
      <h2>Skip first useEffect</h2>

      <button type="button" onClick={() => setForcUpdate(Date.now())}>Force Update</button>
    </div>
  );
}