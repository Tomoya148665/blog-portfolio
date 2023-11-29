import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// ex) Change John’s role to "administrator" please.
const BASE_COMMAND =
  `Please convert "Who" to xxx, "Changed column" to yyy, and "Changed Value" to zzz in the following JSON format as I input the article.` +
  `{ "user": xxx, "column": yyy, "value": zzz }`;

const Chat = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = async () => {
    const command = `${BASE_COMMAND}\n${input}`;
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: command,
        },
      ],
    });
    setOutput(completion.data.choices[0].message?.content || "");
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-lg mx-auto my-10 grid gap-8">
        <textarea
          className="textarea w-full input-bordered"
          placeholder="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <div className="btn btn-active" onClick={handleSubmit}>
          Submit
        </div>
        <div className="border-2 min-h-[10rem]">
          <p>{output}</p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
