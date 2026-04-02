import AdminProfissionais from "../../components/admin/AdminProfissionais";
import AdminServicos from "../../components/admin/AdminServicos";
import AdminAgenda from "./AdminAgenda";

export default function Admin() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        📊 Painel da Barbearia
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-4 rounded-xl">
          <AdminProfissionais />
        </div>

        <div className="bg-zinc-900 p-4 rounded-xl">
          <AdminServicos />
        </div>

        <div className="bg-zinc-900 p-4 rounded-xl">
          <AdminAgenda />
        </div>
      </div>
    </div>
  );
}
