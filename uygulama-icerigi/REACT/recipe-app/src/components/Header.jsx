import React, { useContext } from "react";
import { ThemeContex } from "../context/ThemeContex";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ThemeSlider = () => {
  const { theme, toggleTheme } = useContext(ThemeContex);

  // const [isToggled, setIsToggled] = useState(theme === 'dark')

  const handleToggle = () => {
    // setIsToggled(!isToggled)
    toggleTheme();
  };

  return (
    <div onClick={handleToggle} className={`slider-container ${theme}`}>
      <div className="slider-button"></div>
    </div>
  );
};

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="logo">Recipe Platform</div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>{" "}
          </li>
          <li>
            <Link to={"/add-recipe"}>Add Recipe</Link>
          </li>
          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>
          <button onClick={isAuthenticated ? handleLogout : handleLogin}>
            {isAuthenticated ? "Logout" : "Login"}
          </button>
          <ThemeSlider />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
