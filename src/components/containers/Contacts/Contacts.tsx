import React from "react";
import scss from "./Contacts.module.scss";
import { Button, Form, Input } from "antd";
import { BackgroundGradient } from "@/components/ui/components/background-gradient";
import { RiMailSendLine } from "react-icons/ri";

const Contacts: React.FC = () => {
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
              <Form className={scss.form}>
                <Form.Item>
                  <Input placeholder="Name" />
                </Form.Item>
                <Form.Item>
                  <Input placeholder="Last name" />
                </Form.Item>
                <Form.Item>
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item>
                  <Input.TextArea placeholder="Message" />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="default"
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
