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

export function ManageStreams() {
  const code = `
  // Give your employee unpaid day-off
  // [owner, receiver]
  roketo.pauseStream({ streamId });
  
  // Start paying them again after a break
  // [owner]
  roketo.startStream({ streamId });
  
  // Add more funds as you need
  // [anyone]
  roketo.depositStream({ streamId });
  
  // Kill the stream, to raise their salaries
  // (or to fire them)
  // [owner, receiver]
  roketo.stopStream({ streamId });
  `;
  return (
    <div className="text-center text-2xl">
      <h1>Manage your Streams</h1>
      <div className="mb-10">
        <p>Just 4 basic operations</p>
      </div>
      <section>
        <div className="text-left inline-block">
          <SyntaxHighlighter>{code}</SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}

export function ManageStreamsCreate() {
  const code = `
  // Give your employee unpaid day-off
  // [owner, receiver]
  roketo.pauseStream({ streamId });
  
  // Start paying them again after a break
  // [owner]
  roketo.startStream({ streamId });
  
  // Add more funds as you need
  // [anyone]
  roketo.depositStream({ streamId });
  
  // Kill the stream, to raise their salaries
  // (or to fire them)
  // [owner, receiver]
  roketo.stopStream({ streamId });
  `;
  return (
    <div className="text-center text-2xl">
      <h1>Manage your Streams</h1>
      <div className="mb-10">
        <p>Just 4 basic operations</p>
      </div>
      <section>
        <div className="text-left inline-block">
          <SyntaxHighlighter>{code}</SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}
export function ManageStreamsPause() {
  const code = `
  // Give your employee unpaid day-off
  // [owner, receiver]
  roketo.pauseStream({ streamId });
  
  // Start paying them again after a break
  // [owner]
  roketo.startStream({ streamId });
  
  // Add more funds as you need
  // [anyone]
  roketo.depositStream({ streamId });
  
  // Kill the stream, to raise their salaries
  // (or to fire them)
  // [owner, receiver]
  roketo.stopStream({ streamId });
  `;
  return (
    <div className="text-center text-2xl">
      <h1>Manage your Streams</h1>
      <div className="mb-10">
        <p>Just 4 basic operations</p>
      </div>
      <section>
        <div className="text-left inline-block">
          <SyntaxHighlighter>{code}</SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}
export function ManageStreamsDeposit() {
  const code = `
  // Give your employee unpaid day-off
  // [owner, receiver]
  roketo.pauseStream({ streamId });
  
  // Start paying them again after a break
  // [owner]
  roketo.startStream({ streamId });
  
  // Add more funds as you need
  // [anyone]
  roketo.depositStream({ streamId });
  
  // Kill the stream, to raise their salaries
  // (or to fire them)
  // [owner, receiver]
  roketo.stopStream({ streamId });
  `;
  return (
    <div className="text-center text-2xl">
      <h1>Manage your Streams</h1>
      <div className="mb-10">
        <p>Just 4 basic operations</p>
      </div>
      <section>
        <div className="text-left inline-block">
          <SyntaxHighlighter>{code}</SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}

export function ManageStreamsStop() {
  const code = `
  // Give your employee unpaid day-off
  // [owner, receiver]
  roketo.pauseStream({ streamId });
  
  // Start paying them again after a break
  // [owner]
  roketo.startStream({ streamId });
  
  // Add more funds as you need
  // [anyone]
  roketo.depositStream({ streamId });
  
  // Kill the stream, to raise their salaries
  // (or to fire them)
  // [owner, receiver]
  roketo.stopStream({ streamId });
  `;
  return (
    <div className="text-center text-2xl">
      <h1>Manage your Streams</h1>
      <div className="mb-10">
        <p>Just 4 basic operations</p>
      </div>
      <section>
        <div className="text-left inline-block">
          <SyntaxHighlighter>{code}</SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}
