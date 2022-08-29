import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../context/auth.context";

const styleNav = {
  backgroundColor: "#ffdbf8",
};
const styleUl = {
  color: "#090057",
};
const Navbar = () => {
  const { user } = useAuth();
  return (
    <nav
      style={styleNav}
      className="navbar navbar-expand-sm  "
      aria-label="Third navbar example"
    >
      <div className="container">
        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
          <li className="nav-item ">
            <Link style={styleUl} className="nav-link" to="/">
              Home{" "}
            </Link>
          </li>
          <li className="nav-item">
            <NavLink style={styleUl} className="nav-link" to="/about">
              About{" "}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={styleUl} className="nav-link" to="/book">
              Books{" "}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={styleUl} className="nav-link" to="/wishList">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                className="bi bi-suit-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
              </svg>{" "}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={styleUl} className="nav-link" to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>{" "}
            </NavLink>
          </li>
          {user?.biz && (
            <li className="nav-item">
              <NavLink
                style={styleUl}
                className="nav-link"
                to="/addBookToStore"
              >
                Add Book To Store{" "}
              </NavLink>
            </li>
          )}
        </ul>
        <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
          {user ? (
            <li className="nav-item">
              <NavLink style={styleUl} className="nav-link" to="/logout">
                Log Out{" "}
              </NavLink>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <NavLink style={styleUl} className="nav-link" to="/login">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink style={styleUl} className="nav-link" to="/signUp">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    className="bi bi-person-plus"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    <path
                      fill-rule="evenodd"
                      d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                    />
                  </svg>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink style={styleUl} className="nav-link" to="/signupbiz">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    className="bi bi-person-plus"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    <path
                      fill-rule="evenodd"
                      d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                    />
                  </svg>
                  business{" "}
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
