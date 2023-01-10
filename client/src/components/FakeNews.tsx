type Props = {
  messageType: string | undefined;
};

export default function FakeNews(props: Props) {
  if (props.messageType === "error") {
    return (
      <div className="text-red-500 text-xl text-center">
        An error occured at the level of the API
      </div>
    );
  }
  const text = `it's a ${props.messageType} link`;
  return (
    <>
      <div
        className={`${
          props.messageType === undefined
            ? "invisible"
            : props.messageType !== "benign"
            ? "text-red-500"
            : "text-green-500"
        } text-4xl text-center`}
      >
        {text}
      </div>
    </>
  );
}
