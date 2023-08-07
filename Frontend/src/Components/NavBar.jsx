import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function NavBar() {
  const { isAuthenticated, logout } = useAuth();
  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10">
      <Link to={isAuthenticated ? "/categorys" : "login"}>
        <h1 className="text-2xl font-bold text-white">Inari</h1>
      </Link>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li className="text-white">Bienvenido</li>
            <li>
              <NavLink
                to="/add-category"
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-xl"
              >
                Agregar Categoria
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-xl"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink
                to="/login"
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-xl"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-xl"
              >
                Registrar
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
