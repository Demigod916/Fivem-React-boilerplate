import { useEffect, useState } from "react";

function App() {
  const [openUI, setUIOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const handleMessage = (event: MessageEvent) => {
    let message = event.data;
    switch (message.type) {
      case "openUI":
        setUIOpen(message.toggle);
        break;
      // case "newCase":
      //   logic
      //   break;
      default:
        break;
    }
  };

  return openUI ? (
    <div
      className="TEST"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        translate: "-50% -50%",
        fontSize: "50px",
      }}
    >
      Hello World
    </div>
  ) : (
    <></>
  );
}

export default App;
