import BigNumber from "bignumber.js";
import React from "react";
// @ts-ignore
import SyntaxHighlighter from "react-syntax-highlighter";

// # Manage your Streams

// Just 4 basic operations

// ```js
// // Give your employee unpaid day-off
// roketo.pauseStream({ streamId });

// // Start paying them again after a break
// roketo.startStream({ streamId });

// // Add more funds as you need
// roketo.depositStream({ streamId });

// // Kill the stream, to raise their salaries
// // (or fire them)
// roketo.stopStream({ streamId });
// ```

export function TokensPerTickSlide() {
  const code = `
  // Send 1 NEAR over 1 day, 2 hours and 15 minutes
  const totalAmount = 1 * 1e18; // 1 NEAR

  const days = 1;
  const hours = 2;
  const minutes = 15;

  // define multipliers, those can be found in helpers.ts
  const SECONDS_IN_MINUTE = 60;
  const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * 60;
  const SECONDS_IN_DAY = SECONDS_IN_HOUR * 24;
  // Ticks do ticking in nanoseconds
  const SECONDS_TO_NANO = 1e9

  const durationInSeconds =
    days * SECONDS_IN_DAY +
    minutes * SECONDS_IN_MINUTE +
    hours * SECONDS_IN_HOUR;

  // ! Should not be less than 1 !
  const tokensPerTick = new BigNumber(totalAmount)
    .dividedToIntegerBy(durationInSeconds * SECONDS_TO_NANO);
  `;

  return (
    <div className="text-center text-2xl">
      <h1>Beware: Big Numbers Ahead</h1>
      <div className="mb-10">
        <p>Carefully calculating stream speeds</p>
      </div>
      <section className="flex flex-col items-center text-left">
        <SyntaxHighlighter>{code}</SyntaxHighlighter>
      </section>
    </div>
  );
}
