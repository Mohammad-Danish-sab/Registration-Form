function UserCard({ user }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-xl font-semibold text-center mb-4">User Details</h2>

      {user.photo && (
        <img
          src={user.photo}
          alt="User"
          className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
        />
      )}

      <div className="space-y-2">
        <p>
          <b>Name:</b> {user.firstName} {user.lastName}
        </p>
        <p>
          <b>Email:</b> {user.email}
        </p>
        <p>
           <b>Password:</b> {user.password}
        </p>
        <p>
          <b>Phone:</b> {user.phone}
        </p>
        <p>
          <b>DOB:</b> {user.dob}
        </p>
        <p>
          <b>Address:</b> {user.address}
        </p>
      </div>
    </div>
  );
}

export default UserCard;
