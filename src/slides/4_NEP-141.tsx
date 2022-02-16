import React from "react";
// @ts-ignore
import SyntaxHighlighter from "react-syntax-highlighter";

export function NEP141TokensSlide() {
  const code = `
roketo.createStream({
  receiverId: "alice.near",
  speed: 1,
  deposit: 1000,
  token: "ROKE", 
});
  `;

  return (
    <div className="text-center text-2xl">
      <h1>NEP-141 tokens included 💎</h1>
      <div className="mb-10">
        <p>Invent something crazy with them 🔥</p>
      </div>
      <section className="flex flex-col items-center">
        <ul className="list-disc text-left">
          <li>
            <p>Tokens are whitelisted through the Roketo DAO</p>
          </li>
          <li>
            <p>
              Testnet ROKE Token:{" "}
              <code className="bg-slate-300">
                dev-1635511395820-24328868660221
              </code>
            </p>
          </li>
          <li>
            <a href="https://kikimora-labs.notion.site/Roke-to-Integration-Docs-9b5a05bf942a4a51b6b85f2791b362df">
              📖 Minting ROKE tokens & Learn About NEP-141
            </a>
          </li>
          <li>
            Reach us at discord if you want to whitelist your own testnet token
          </li>
        </ul>
      </section>
      <section className="flex flex-col items-center text-left">
        <SyntaxHighlighter>{code}</SyntaxHighlighter>
      </section>
    </div>
  );
}
