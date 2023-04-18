import React from "react";
import { PlayCircleFilled, PlusCircleOutlined } from "@ant-design/icons";
import { Button} from "antd";
import { useNavigate } from "react-router-dom";
import "../nav.css";

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <div className="Nav">
      <div className="navbar">
        <div className="new">
      < PlayCircleFilled  style={{fontSize: "2.5rem",color: "#e50916" }}/>
        <div className="nav"><strong>Streamo</strong></div>
        </div>
      </div>
      <div className="navbar">
        <ul className="nav">
          <li className="na">
            <a className="home" href="/">
              Home
            </a>
          </li>
          <li className="na">
            <a className="about" href="">
              Category
            </a>
          </li>
          <li className="na">
            <a className="involve" href="/register">
              History
            </a>
          </li>
        </ul>

        <div>
        <Button type="dashed" style={{width: 200, height:100}} ghost onClick={()=> navigate("/addUser")}>
          <PlusCircleOutlined/>
        </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
