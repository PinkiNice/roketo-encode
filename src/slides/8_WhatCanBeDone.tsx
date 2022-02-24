import React from "react";

export function WhatCanBeDone() {
  return (
    <div className="text-center text-2xl">
      <h1>Possible use-cases</h1>
      <div className="mb-10">
        <p>We really want you to go crazy here 🤪</p>
      </div>
      <section className="flex flex-col items-center">
        <ul className="list-disc text-left space-y-4">
          <li>
            <b>Salary Framework</b> <br />
            Get rid of pay-day's by switching to streams?
            <br />
            (Auto-cancel when members leaves dao)
          </li>
          <li>
            <b>DAO Vesting Solution</b> <br /> Use streams as a trustless
            vesting solution <br /> to lock tokens for a period?
          </li>
          <li>
            {" "}
            <b>Subscription Service</b> <br /> Pay for your netflix via streams?{" "}
            <br />
            (Access private resources)
          </li>
          {/* <li>
            {" "}
            <b>Continous Token Distribution</b>
            <br /> Continously mint&distribute tokens <br />
            by weightening incoming streams? <br /> (Distribute 100 tokens a
            week)
          </li> */}
          <li>
            <b>???</b>
          </li>
        </ul>
      </section>
      <section className="flex flex-col items-center mt-32"></section>
    </div>
  );
}
