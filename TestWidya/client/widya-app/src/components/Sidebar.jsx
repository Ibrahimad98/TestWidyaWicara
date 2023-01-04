import { useNavigate, Link } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  function LogOut() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse text-start p-5" id="sidebar-menu">
      <div className="position-sticky pt-1">
        <h3 className="mb-3">Admin Panel</h3>
        <ul className="nav flex-column">
          <li className="nav-item me-2 mb-3">
            <Link className="text-dark icon material-symbols-outlined" to="/">
              Dashboard
            </Link>
          </li>
          <li className="nav-item me-2 mb-3">
            <Link className="text-dark icon material-symbols-outlined " to="/profiles">
              Profile
            </Link>
          </li>
          <li className="nav-item me-2 mb-3">
            <Link className="text-dark icon material-symbols-outlined me-2 mb-4" style={{ textDecoration: "none" }} to="/register">
              Register New Account
            </Link>
          </li>
          <li className="nav-item me-2 mb-3">
            <a onClick={LogOut} className="material-icons text-dark icon material-symbols-outlined" href="#" id="nav-logout">
              logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
    // End Sidebar
  );
}
