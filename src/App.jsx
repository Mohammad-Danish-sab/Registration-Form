import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);

  const handleSubmit = (e, data) => {
    e.preventDefault();
    setUsers((prevUsers) => [...prevUsers, data]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-8 p-6">
     <h1 className="text-2xl font-bold text-center mb-6">User Registration</h1>
      {/* <div className="flex flex-col items-center gap-8"> */}
        <RegistrationForm onSubmit={handleSubmit} />

      {users.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gp-6 mt-8">
          {users.map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
        </div>
      )}
      </div>
  );
}

export default App;
