import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editusers, updateusers } from "../store/actions";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 12,
  },
};

const validateMessages = {
  required: "${label} is required!",
};

const Edituser = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    title:" ",
    link: " ",
    category:" "
  })

  let { id } = useParams();
  const { user } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(editusers(id));
  }, [id]);

  useEffect(() => {
    if(user){
      setFormValues({...user});
    }else{
      setFormValues({})
    }
  }, [user]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateusers(formValues, id));
    navigate("/");
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      validateMessages={validateMessages}
      initialValues={formValues}
    >
      <Form.Item
        name="title"
        label="Title"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input name="title" value={formValues.title} onChange={handleInputChange} />
      </Form.Item>
      <Form.Item
        name="link"
        label="Link"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input name="link" value={formValues.link} onChange={handleInputChange} />
      </Form.Item>
      <Form.Item
        name="category"
        label="Category"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input name="category" value={formValues.category} onChange={handleInputChange} />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={() => navigate("/")}>
          Go Back
        </Button>
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Edituser;
