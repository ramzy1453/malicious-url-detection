import { ChangeEventHandler, Dispatch, SetStateAction } from "react";

type Props = {
  message: string;
  onChangeMessage: ChangeEventHandler;
  setMessageType: Dispatch<SetStateAction<undefined | string>>;
};

export default function Form(props: Props) {
  const onSubmit = async () => {
    if (props.message === "") {
      props.setMessageType(undefined);
    }
    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ news: props.message }),
      });
      const data = await response.json();
      props.setMessageType(data.prediction.pop());
    } catch (error) {
      props.setMessageType("error");
    }
  };

  return (
    <>
      <input
        className="outline-none border-none py-2 px-3"
        id="message"
        type="text"
        value={props.message}
        onChange={props.onChangeMessage}
      />
      <button
        onClick={onSubmit}
        className="bg-blue-700 text-white hover:bg-blue-500 transition-all py-2"
      >
        Predict
      </button>
    </>
  );
}
