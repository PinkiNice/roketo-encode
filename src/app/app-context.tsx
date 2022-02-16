import { createNearInstance } from "@/near";
import { initRoketo, Roketo } from "@/roketo";
import { Near, WalletConnection } from "near-api-js";
import React, { useEffect, useState } from "react";
import { useContext } from "react";

type AppServices = {
  roketo: Roketo;
  near: Near;
  walletConnection: WalletConnection;
};
const AppContext = React.createContext<AppServices | null>(null);

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [context, setContext] = useState<AppServices | null>(null);

  useEffect(() => {
    const init = async () => {
      const near = await createNearInstance();
      const walletConnection = new WalletConnection(near, "roketo");
      const account = await walletConnection.account();

      const roketo = await initRoketo({
        account,
        walletConnection,
      });

      setContext({
        near,
        roketo,
        walletConnection,
      });
    };
    init();
  }, []);

  return (
    <AppContext.Provider value={context}>
      {context ? children : null}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw "Not initialized yet";
  }

  return context;
}
