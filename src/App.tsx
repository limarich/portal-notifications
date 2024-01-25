import { useEffect, useState } from "react";
import "./App.css";
import { createPortal } from "react-dom";
import { Modal } from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (Notification.permission === "denied") {
      alert("Altere sua permição de notificação para prosseguir");
      Notification.requestPermission();
    }
  }, []);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          if (Notification.permission === "granted") {
            setIsModalOpen(true);
          } else {
            alert("Altere sua permição de notificação para prosseguir");
          }
        }}
      >
        Notificar
      </button>
      {isModalOpen &&
        Notification.permission === "granted" &&
        createPortal(
          <Modal onClose={() => setIsModalOpen(false)} />,
          document.body
        )}
    </>
  );
}

export default App;
