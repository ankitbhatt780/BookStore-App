// import { createContext, useState, useContext } from "react";

// export const AuthContext = createContext();
// export default function AuthProvider({ children }) {
//   const initialAuthUser = localStorage.getItem("user");
//   const [authUser, setAuthUser] = useState(
//     initialAuthUser ? JSON.parse(initialAuthUser) : undefined
//   );
//   return (
//     <AuthContext.Provider value={[authUser, setAuthUser]}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
// export const useAuth = () => useContext(AuthContext);

import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(() => {
    const initialAuthUser = localStorage.getItem("user");
    return initialAuthUser ? JSON.parse(initialAuthUser) : undefined;
  });

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
