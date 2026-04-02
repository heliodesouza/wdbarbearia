import { useState } from "react";

export default function Agenda() {
  const [appointments, setAppointments] = useState([]);
  const [name, setName] = useState("");

  function addAppointment() {
    if (!name) return;

    setAppointments([...appointments, name]);
    setName("");
  }

  return (
    <div className="mb-6">
      <h2 className="text-xl mb-2">📅  Essa Agenda</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome do cliente"
        className="p-2 text-black rounded mr-2"
      />

      <button
        onClick={addAppointment}
        className="bg-white text-black px-4 py-2 rounded"
      >
        Adicionar
      </button>

      <ul className="mt-3">
        {appointments.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}