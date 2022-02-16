import React from "react";
// @ts-ignore
import SyntaxHighlighter from "react-syntax-highlighter";

// suppose you have a lot of incoming streams and you need all that money
export function BalanceWithdrawSlide() {
  const code = "roketo.updateAccount()";

  return (
    <div className="text-center text-2xl">
      <h1>How to withdraw from a million streams</h1>
      <div className="mb-10">
        <p>Single line to rule them all 🤯</p>
      </div>
      {/* <section className="flex flex-col items-center">
        <ul className="list-disc text-left">
          <li></li>
        </ul>
      </section> */}
      <section className="flex flex-col items-center text-left mt-32">
        <SyntaxHighlighter>{code}</SyntaxHighlighter>
      </section>
    </div>
  );
}
