import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Topbar() {
  const { user } = useContext(AuthContext);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-lg font-semibold">Dashboard</h1>

      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-300">Hi, {user?.name}</span>
        <img
          src={`https://ui-avatars.com/api/?name=${user?.name}&background=0D8ABC&color=fff`}
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
}
