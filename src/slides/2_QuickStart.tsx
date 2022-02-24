import { useAppContext } from "@/app/app-context";
import { RoketoAccount, RoketoStream } from "@/roketo/interfaces";
import { RoketoContractApi } from "@/roketo/roketo-contract-api";
import { useState } from "react";
import JSONPretty from "react-json-pretty";
// @ts-ignore
import SyntaxHighlighter from "react-syntax-highlighter";
import useSWR from "swr";

export function QuickStart() {
  return (
    <div className="text-center  text-2xl">
      <h1>🛠 Quick Start 👷</h1>

      <section>
        <h3 className="text-bold">Near JS Api</h3>
        <div className="text-xl">
          <p> You need this to connect to blockchain </p>
          <a href="https://docs.near.org/docs/api/naj-quick-reference">
            https://docs.near.org/docs/api/naj-quick-reference
          </a>
        </div>
      </section>

      <section>
        <h3 className="text-bold">Contract API & Description</h3>
        <div className="text-xl">
          <p> For cross-contract calls and integration</p>
          <a href="https://github.com/PinkiNice/roketo-encode/blob/master/contract-api.md">
            https://github.com/PinkiNice/roketo-encode/blob/master/contract-api.md
          </a>
        </div>
      </section>

      <section className="flex flex-col items-center text-xl">
        <h3>JavaScript</h3>
        <a
          className="block"
          href="https://github.com/PinkiNice/roketo-encode/blob/master/src/roketo/interfaces/roketo-api.ts"
        >
          https://github.com/PinkiNice/roketo-encode/blob/master/src/roketo/interfaces/roketo-api.ts
        </a>

        <ul className="list-disc text-left my-4">
          <li>All contract methods have TypeScript definitions</li>
          <li>Not yet SDK, just copy paste</li>
        </ul>
      </section>
    </div>
  );
}

export function QuickStartCodeExample() {
  const code = `import { initRoketo } from "@/roketo";
import { connect, keyStores } from "near-api-js";

// connect to NEAR blockchain
const keyStore = new keyStores.BrowserLocalStorageKeyStore();
const near = await connect({
  nodeUrl: NEAR_CONFIG.nodeUrl,
  walletUrl: NEAR_CONFIG.walletUrl,
  networkId: NEAR_CONFIG.networkId,
  keyStore,
  headers: {},
});
const walletConnection = new WalletConnection(near, "roketo");

// initialize Roketo API
const roketo = await initRoketo({
  walletConnection,
});

// ready to call Roketo methods!
// for example: roketo.api.getCurrentAccount
`;

  return (
    <div className="text-center  text-2xl">
      <h1>🛠 Connect in 1 minute 👷</h1>

      <section className="flex flex-col items-center text-xl">
        <div className="text-left inline-block">
          <SyntaxHighlighter>{code}</SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}

const theme = {
  main: "line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;",
  error: "line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;",
  key: "color:#f92672;",
  string: "color:#fd971f;",
  value: "color:#a6e22e;",
  boolean: "color:#ac81fe;",
};
export function QuickStartFetchAccount() {
  const [account, setAccount] = useState<RoketoAccount | null>(null);
  const { roketo } = useAppContext();

  return (
    <div className="text-center  text-2xl">
      <h1>Fetch Account Data</h1>

      <section className="flex flex-col items-center text-xl">
        <SyntaxHighlighter className="mb-4">
          const onClick = roketo.api.getCurrentAccount
        </SyntaxHighlighter>
        <button
          onClick={async () => {
            setAccount(await roketo.api.getCurrentAccount());
          }}
        >
          getCurrentAccount
        </button>
      </section>

      <div className="text-left inline-block">
        {account ? (
          <JSONPretty
            className="p-2"
            data={JSON.stringify(account)}
            theme={theme}
          ></JSONPretty>
        ) : null}
      </div>
    </div>
  );
}

export function QuickStartFetchStream() {
  const [stream, setStream] = useState<RoketoStream | null>(null);

  const { roketo } = useAppContext();
  const code = `const onClick = () => roketo.api.getStream({
  streamId: account.static_streams[0]
})`;
  return (
    <div className="text-center  text-2xl">
      <h1>Fetch Stream Data</h1>

      <section className="flex flex-col items-center text-xl">
        <SyntaxHighlighter className="mb-4 text-left">{code}</SyntaxHighlighter>
        <button
          onClick={async () => {
            const account = await roketo.api.getCurrentAccount();
            const stream = await roketo.api.getStream({
              streamId: account.static_streams[0],
            });
            setStream(stream);
          }}
        >
          fetch stream
        </button>
      </section>

      <div className="text-left inline-block">
        {stream ? (
          <JSONPretty
            className="p-2"
            data={JSON.stringify(stream)}
            theme={theme}
          ></JSONPretty>
        ) : null}
      </div>
    </div>
  );
}
