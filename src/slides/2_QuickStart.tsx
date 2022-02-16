// @ts-ignore
import SyntaxHighlighter from "react-syntax-highlighter";

export function QuickStart() {
  const code = `
import { initRoketo } from "@/roketo"

const roketo = initRoketo({
  near,
  walletConnection
})

const account = roketo.api.getAccount();
  `;

  return (
    <div className="text-center  text-2xl">
      <h1>🛠 Quick Start 👷</h1>

      <section>
        <h2 className="text-bold">Contract API & Description</h2>
        <p> For cross-contract calls and integration</p>
        <a href="https://github.com/PinkiNice/roketo-encode/blob/master/contract-api.md">
          https://github.com/PinkiNice/roketo-encode/blob/master/contract-api.md
        </a>
      </section>

      <section className="flex flex-col items-center">
        <h2 className="text-bold mt-5">JavaScript</h2>
        <a
          className="block"
          href="https://github.com/PinkiNice/roketo-encode/blob/master/src/roketo/interfaces/roketo-api.ts"
        >
          https://github.com/PinkiNice/roketo-encode/blob/master/src/roketo/interfaces/roketo-api.ts
        </a>

        <ul className="list-disc text-left my-4">
          <li>All contract methods have TypeScript definitions</li>
          <li>Not yet SDK, just copy paste</li>
          <li>As simple as that</li>
        </ul>

        <div className="text-left inline-block">
          <SyntaxHighlighter>{code}</SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}
