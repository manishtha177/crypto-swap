import React, { createContext, useState, useMemo } from 'react';

interface Icontext {
  isWalletConnected: boolean;
  setIsWalletConnected: Function;
}

interface IProps {
  children: React.ReactNode;
}

export const WalletContext = createContext<Icontext>({
  isWalletConnected: false,
  setIsWalletConnected: () => {},
});

export function WalletProvider({ children }: IProps) {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const value: Icontext = useMemo(
    () => ({ isWalletConnected, setIsWalletConnected }),
    [isWalletConnected]
  );

  return (
    <>
      <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
    </>
  );
}
