import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";
import AdminProfissionais from "../../components/admin/AdminProfissionais";
import AdminServicos from "../../components/admin/AdminServicos";

export default function AdminPage() {
  const [tab, setTab] = useState("profissionais");

  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      <Sidebar setTab={setTab} />

      <div className="flex-1 p-6">
        <Header />

        {tab === "profissionais" && <AdminProfissionais />}
        {tab === "servicos" && <AdminServicos />}
      </div>
    </div>
  );
}
