import React from "react";
// @ts-ignore
import SyntaxHighlighter from "react-syntax-highlighter";

const account = {
  account_id: "ggoshanov2.testnet",
  dynamic_inputs: [],
  dynamic_outputs: [],
  static_streams: [
    "Bh9x4DEYQ1WRPeLpRKqjno8uTyRG8ULAJozEP9rtrHQW",
    "DNAc7Mw4smoy1MaTLsuiyycP2jnWS8hRiGbYUXEDrdv",
    "DXugqgh9QqDypZWiwWsaG1kCUGRsovagfNjCPtfWGyRL",
    "91pnWtxfEf6SSZR6dniCs4EvimBWcxPse4dJuCXLdc5z",
    "HvZxpPgx9oorsHzyuRhK4hYxRHw3QEuu4XDMzedsozfQ",
    "4b8vtrYHYRdNLrE4S2vedRc4RTAVa7aW6EKmDUBUepuW",
    "6gSmtuwnNYywbroDxLz9KcSxHRsxtLoe8Lm8yiyts6Lb",
  ],
  last_action: "1645003586729841596",
  ready_to_withdraw: [
    ["NEAR", "0"],
    ["ROKE", "0"],
  ],
  total_incoming: [],
  total_outgoing: [],
  total_received: [
    ["NEAR", "2967030000000000000000000"],
    ["ROKE", "990000000000000000"],
  ],
  is_external_update_enabled: false,
  cron_task: null,
};

const stream = {
  id: "HvZxpPgx9oorsHzyuRhK4hYxRHw3QEuu4XDMzedsozfQ",
  description: "",
  owner_id: "ggoshanov2.testnet",
  receiver_id: "pinkinice2.testnet",
  ticker: "ROKE",
  timestamp_created: "1639474003781375316",
  balance: "1000000000000000000",
  tokens_per_tick: "16666667",
  is_auto_deposit_enabled: false,
  status: "ACTIVE",
  tokens_total_withdrawn: "0",
  available_to_withdraw: "1000000000000000000",
  history_len: 3,
};

export function ViewStreamsSlide() {
  return (
    <div className="text-center text-2xl">
      <h1>Viewing Your Streams 🤑</h1>
      <div className="mb-10">
        <p>Streams are public, viewable by anyone</p>
      </div>
      <section className="flex flex-col items-center text-left">
        <SyntaxHighlighter>
          {`const account = await roketo.getAccount('someone.near')
const stream = await roketo.getStream({
  streamId: account.dynamic_outputs[0]
})`}
        </SyntaxHighlighter>
      </section>

      <section className="flex flex-col items-center text-left">
        <h2>Stream Object</h2>
        <SyntaxHighlighter>{`
{
  "id": "HvZxpPgx9oorsHzyuRhK4hYxRHw3QEuu4XDMzedsozfQ",
  "description": "",
  "owner_id": "someone.near",
  "receiver_id": "netflix.near",
  "ticker": "ROKE",
  "timestamp_created": "1639474003781375316",
  "balance": "800000000000000000",
  "tokens_per_tick": "16666667",
  "is_auto_deposit_enabled": false,
  "status": "ACTIVE",
  "tokens_total_withdrawn": "200000000000000000",
  "available_to_withdraw": "800000000000000000",
  "history_len": 3
}
            `}</SyntaxHighlighter>
      </section>
    </div>
  );
}
