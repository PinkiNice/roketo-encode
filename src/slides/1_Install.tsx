import { useAppContext } from "@/app/app-context";
import React from "react";
import useSWR from "swr";

export function InstallSlide() {
  const context = useAppContext();

  const { data, error } = useSWR(
    "account",
    context.roketo.api.getCurrentAccount
  );

  return (
    <div>
      <h1 className="text-6xl"> DeFi Streams via Roketo </h1>
      <p className="text-2xl">{context.walletConnection.getAccountId()}</p>
      {JSON.stringify(data)}
      <p>https://github.com/PinkiNice/roketo-encode</p>
      <button
        className="bg-red-500"
        onClick={() => context.roketo.api.updateAccount({})}
      >
        Update account
      </button>
    </div>
  );
}
