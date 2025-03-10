import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Property Search</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/properties/add-property">Add Property</Link> 
        <Link to="/signup">Sign Up</Link> 
        <Link to="/login">Login</Link>  
      </div>
    </nav>
  );
}
 
export default Navbar;