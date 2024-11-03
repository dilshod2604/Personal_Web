import React from "react";
import scss from "./Contacts.module.scss";
import { Button, Form, Input } from "antd";
import { BackgroundGradient } from "@/components/ui/components/background-gradient";
import { RiMailSendLine } from "react-icons/ri";
import axios from "axios";

interface InputValue {
  name: string;
  lastName: string;
  email: string;
  message: string;
}

const Contacts: React.FC = () => {
  const [form] = Form.useForm();

  const TG_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
  const CHAD_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAD_ID;

  const botsMessageModel = (data: InputValue) => {
    let messageTG = `Name: <b>${data.name}</b>\n`;
    messageTG += `LastName: <b>${data.lastName}</b>\n`;
    messageTG += `Email: <b>${data.email}</b>\n`;
    messageTG += `Message: <b>${data.message}</b>\n`;
    return messageTG;
  };

  const onFinish = async (value: InputValue) => {
    try {
      await axios.post(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
        chat_id: CHAD_ID,
        parse_mode: "html",
        text: botsMessageModel(value),
      });
      form.resetFields();
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <section id="contacts" className={scss.Contacts}>
      <div className="container">
        <div className={scss.contacts_content}>
          <div className={scss.contacts_title}>
            <h1 className={scss.contacts_title_text}>
              Let&apos;s Get In Touch
            </h1>
          </div>
          <div className={scss.form_box}>
            <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <Form form={form} className={scss.form} onFinish={onFinish}>
                <Form.Item name="name">
                  <Input placeholder="Name" />
                </Form.Item>
                <Form.Item name="lastName">
                  <Input placeholder="Last name" />
                </Form.Item>
                <Form.Item name="email">
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item name="message">
                  <Input.TextArea placeholder="Message" />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="default"
                    htmlType="submit"
                    className={scss.form_btn}
                    icon={<RiMailSendLine />}
                  >
                    SEND
                  </Button>
                </Form.Item>
              </Form>
            </BackgroundGradient>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
