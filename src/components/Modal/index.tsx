import { useState } from "react";
import "./styles.css";

interface Props {
  onClose: () => void;
}

export const Modal = ({ onClose }: Props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleCreateNotification = () => {
    new Notification(title, {
      body: body,
    });
    setTitle("");
    setBody("");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h1>Criar Notificação</h1>

        <form action="">
          <div className="input-control">
            <span>Título da notificação</span>
            <input
              type="text"
              placeholder="informe um título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input-control">
            <span>Assunto</span>
            <textarea value={body} onChange={(e) => setBody(e.target.value)} />
          </div>
          <div className="modal-actions">
            <button onClick={onClose}>Cancelar</button>
            <button onClick={handleCreateNotification}>Criar</button>
          </div>
        </form>
      </div>
    </div>
  );
};
