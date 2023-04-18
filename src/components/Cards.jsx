import React, { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteusers, loadusers } from "../store/actions";
import { useNavigate } from "react-router-dom";
import "../App.css"

const { Meta } = Card;
const Cards = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const { users } = useSelector((state) => state.data);

  const [showModal, setShowModal] = useState(false);

  const handleLinkClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    dispatch(loadusers());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure wanted to delete the user ?")) {
      dispatch(deleteusers(id));
    }
  };

  return (
    <div classname="cards">
      <div className="card">
        {users &&
          users.map((user) => (
            <Card
              hoverable
              style={{
                width: 300,
              }}
              li
              actions={[
                <EditOutlined
                  key="edit"
                  onClick={() => navigate(`/editUser/${user.id}`)}
                />,
                <DeleteOutlined
                  key={user.id}
                  onClick={() => handleDelete(user.id)}
                />,
              ]}
            >
              <Meta
                title={user.title}
                description={<a href={user.link} onClick={handleLinkClick}>{user.link}</a>}
              />
              {showModal && (
          <div className="iframe-modal">
            <div className="iframe-container">
              <button onClick={handleCloseModal}>Close</button>
              <iframe title="YouTube Video Player"
              width="560"
              height="315"
              src={user.id}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
            </div>
          </div>
        )}
            </Card>
          ))}

        
      </div>
    </div>
  );
};
export default Cards;
