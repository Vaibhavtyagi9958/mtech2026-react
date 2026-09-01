import Breadcrumb from 'react-bootstrap/Breadcrumb';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toast from 'react-bootstrap/Toast';
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const { id, name } = location.state || {};

  return (
    <div>
      <h1>Id: {id}</h1>
      <h1>Name: {name}</h1>
    </div>
  );
}

export default Header;