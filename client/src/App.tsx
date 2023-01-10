import { ChangeEvent, useState } from "react";
import FakeNews from "./components/FakeNews";
import Form from "./components/Form";

export default function App() {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<undefined | string>();
  const onChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  return (
    <div className="h-screen py-16 px-8 md:p-0 md:flex md:flex-col justify-center items-center">
      <div className="text-[#3ea743] font-bold text-4xl text-center md:text-left [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] shadow-[#3ea743]">
        MALICIOUS URL DETECTIONS
      </div>
      <div className="flex flex-col space-y-6 my-8 md:w-[60%]">
        <Form
          message={message}
          onChangeMessage={onChangeMessage}
          setMessageType={setMessageType}
        />
      </div>
      <div className="flex items-center justify-center my-16 lg:m-0">
        <FakeNews messageType={messageType} />
      </div>
    </div>
  );
}
