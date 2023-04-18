import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addusers } from "../store/actions";

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

const Adduser = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const onFinish =(values)=>{
    dispatch(addusers({"title":values.title,"link": values.link,"category": values.category}));
    navigate("/");
  }

  return (
    <Form
      {...layout}
      name="nest-messages"
      validateMessages={validateMessages}
      onFinish={onFinish}
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
        <Input />
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
        <Input />
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
        <Input />
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
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Adduser;
