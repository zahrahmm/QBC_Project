import { useAuth } from "./AuthProvider";

export function Profile() {
  const { user, logout } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <h1>Hello, {user.name}</h1>
          <button onClick={logout}>Log Out</button>
        </>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
}
