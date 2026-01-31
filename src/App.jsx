import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import UserCard from "./components/UserCard";

function App() {
  const [userData, setUserData] = useState(null);

  const handleSubmit = (e, data) => {
    e.preventDefault();
    setUserData(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-8 p-6">
      <RegistrationForm onSubmit={handleSubmit} />

      {userData && <UserCard user={userData} />}
    </div>
  );
}

export default App;
