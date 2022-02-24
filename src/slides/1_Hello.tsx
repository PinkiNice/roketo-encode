// @ts-ignore
import SyntaxHighlighter from "react-syntax-highlighter";

export function HelloSlide() {
  const code = `roketo.createStream({
  receiverId: "netflix.near",
  speed: 1,
  deposit: 1000,
  token: "NEAR", // You may send NEP-141 tokens as well
  description: "Are you still watching?",
});`;

  return (
    <div className="text-center text-2xl">
      <h1>DeFi Streaming with Roketo 🚀</h1>
      <p className="text-center text-2xl mb-10">
        Earn or spend every second, literally
      </p>
      <div className="inline-block text-left">
        <SyntaxHighlighter>{code}</SyntaxHighlighter>
      </div>

      <div className="mt-20">Check out this code here:</div>
      <div>
        <a href="https://github.com/PinkiNice/roketo-encode">
          https://github.com/PinkiNice/roketo-encode
        </a>
      </div>
    </div>
  );
}
