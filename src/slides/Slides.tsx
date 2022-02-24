import { useParams, Link } from "react-router-dom";
import { HelloSlide } from "./1_Hello";
import {
  QuickStart,
  QuickStartCodeExample,
  QuickStartFetchAccount,
  QuickStartFetchStream,
} from "./2_QuickStart";
import { ManageStreams } from "./3_ManageStreams";
import { TokensPerTickSlide } from "./5_TokensPerTick";
import { NEP141TokensSlide } from "./4_NEP-141";
import { ViewStreamsSlide } from "./6_ViewStreams";
import { BalanceWithdrawSlide } from "./7_BalanceWithdraw";
import { WhatCanBeDone } from "./8_WhatCanBeDone";
import { ReachUs } from "./9_ReachUs";

const slides = [
  HelloSlide,
  QuickStart,
  QuickStartCodeExample,
  QuickStartFetchAccount,
  QuickStartFetchStream,
  ManageStreams,
  NEP141TokensSlide,
  TokensPerTickSlide,
  //ViewStreamsSlide,
  BalanceWithdrawSlide,
  WhatCanBeDone,
  ReachUs,
];

// . DeFi | Payment Streaming
// .. describe what roketo is,
// .. how it differs from usual payments,
// .. how it is innovative
//
// . Useful Links
// .. this repo is located here,
// .. docs are here
//
// . Lets pay someone
// .. Create a stream to pay monthly salary to employee
// .. calculate tokensPerTick: [code example]
// .. roketo.createStream: [code example]
//
// . Viewing stream
// .. roketo.getStream: [code example]
//
// . Stopping stream
// .. Stop the stream to give a day-off
// .. roketo.stopStream: [code example]
//
// . Restart stream
// .. Restore employee's salary
// .. roketo.startStream: [code example]
//
// . Give a raise
// .. Suppose we want to raise employee's salary
// .. roketo.stopStream: [code example]
// .. and create a new one

function SlidesNavigation({ slidesCount }: { slidesCount: number }) {
  const { slide } = useParams();
  const currentSlide = isNaN(Number(slide)) ? 1 : Number(slide);

  const prev = Math.max(1, currentSlide - 1);
  const next = Math.min(currentSlide + 1, slidesCount);
  const isLast = next === currentSlide;
  const isFirst = prev === currentSlide;

  // useEffect(() => {
  //   const listener = (e: Event) => {
  //     if (e.key)
  //   }
  // })

  return (
    <div className="flex justify-between align-center text-4xl bottom-10 fixed w-full pl-10 pr-10 left-0">
      <Link to={"/" + prev.toString()}>{isFirst ? "✋" : "👈"}</Link>
      <Link to={"/" + next.toString()}>{isLast ? "✋" : "👉"}</Link>
    </div>
  );
}

export function Slides() {
  const { slide } = useParams();
  const SlideComponent = slides[isNaN(Number(slide)) ? 0 : Number(slide) - 1];

  return (
    <div className="flex flex-col flex-grow">
      <div className="flex-grow flex flex-col">
        <SlideComponent />
      </div>
      <div className="mt-8">
        <SlidesNavigation slidesCount={slides.length} />
      </div>
    </div>
  );
}
