import {
  useMetamask,
  useWalletConnect,
  useCoinbaseWallet,
  useNetwork,
  useAddress,
  useDisconnect,
} from '@thirdweb-dev/react';

import { FaCoins, FaConnectdevelop, FaLink, FaUnlink } from 'react-icons/fa';

export const ConnectWallet = () => {
  const connectWithCoinbaseWallet = useCoinbaseWallet();
  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const disconnectWallet = useDisconnect();
  const address = useAddress();
  const network = useNetwork();

  const buttonStyle = {
    margin: '5px',
    padding: '10px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const connectedStyle = {
    color: 'green',
    fontWeight: 'bold',
  };

  const disconnectedStyle = {
    color: 'red',
    fontWeight: 'bold',
  };

  const responsiveStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  };

  // If a wallet is connected, show address, chainId and disconnect button
  if (address) {
    return (
      <div style={responsiveStyle}>
        <div style={connectedStyle}>
          <FaCoins /> Connected Address: {address}
        </div>
        <div style={connectedStyle}>
          <FaLink /> Chain ID: {network[0].data.chain && network[0].data.chain.id}
        </div>
        <button style={{ ...buttonStyle, ...disconnectedStyle }} onClick={disconnectWallet}>
          <FaUnlink /> Disconnect
        </button>
      </div>
    );
  }

  // If no wallet is connected, show connect wallet options
  return (
    <div style={responsiveStyle}>
      <button style={{ ...buttonStyle, backgroundColor: 'blue', color: 'white' }} onClick={() => connectWithCoinbaseWallet()}>
        <FaCoins /> Connect Coinbase Wallet
      </button>
      <button style={{ ...buttonStyle, backgroundColor: 'orange', color: 'white' }} onClick={() => connectWithMetamask()}>
        <FaConnectdevelop /> Connect MetaMask
      </button>
      <button style={{ ...buttonStyle, backgroundColor: 'purple', color: 'white' }} onClick={() => connectWithWalletConnect()}>
        <FaLink /> Connect WalletConnect
      </button>
    </div>
  );
};
