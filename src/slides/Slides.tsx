import { useParams, useNavigate, Link } from "react-router-dom";
import { InstallSlide } from "./1_Install";
import { CreateStreamsSlide } from "./2_CreateStreams";
import { TokensPerTickSlide } from "./3_TokensPerTick";
import { ViewStreamsSlide } from "./4_ViewStreams";
import { BalanceWithdrawSlide } from "./5_BalanceWithdraw";
import { WhatCanBeDone } from "./6_WhatCanBeDone";
import { ReachUs } from "./7_ReachUs";

const slides = [
  InstallSlide,
  CreateStreamsSlide,
  TokensPerTickSlide,
  ViewStreamsSlide,
  BalanceWithdrawSlide,
  WhatCanBeDone,
  ReachUs,
];

function SlidesNavigation({ slidesCount }: { slidesCount: number }) {
  const { slide } = useParams();
  const currentSlide = isNaN(Number(slide)) ? 1 : Number(slide);

  const prev = Math.max(1, currentSlide - 1);
  const next = Math.min(currentSlide + 1, slidesCount);
  const isLast = next === currentSlide;
  const isFirst = prev === currentSlide;

  return (
    <div className="flex justify-between align-center text-4xl">
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
      <div className="flex-grow">
        <SlideComponent />
      </div>
      <div className="mt-8">
        <SlidesNavigation slidesCount={slides.length} />
      </div>
    </div>
  );
}
