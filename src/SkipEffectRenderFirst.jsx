import React from "react";

export default function SkipEffectRenderFirst() {
  let skipFirstEffectRef = React.useRef(true);
  const [forceUpdate, setForcUpdate] = React.useState(Date.now());

  React.useEffect(() => {
    console.log("skipFirstEffectRef: ", skipFirstEffectRef);
    // code something here ...
    if(skipFirstEffectRef.current) {
      skipFirstEffectRef.current = false;
      return;
    }
    console.log("run skip effect render first");
  }, [forceUpdate]);
  

  console.log("run SkipEffectRenderFirst");

  return (
    <div className="App">
      <h2>Skip first useEffect</h2>

      <button type="button" onClick={() => setForcUpdate(Date.now())}>Force Update</button>
    </div>
  );
}