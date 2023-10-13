import { AppProps } from 'next/app';
import { ChainId } from "@thirdweb-dev/sdk";
import { ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }: AppProps) {
  const desiredChainId = ChainId.Mumbai; // Use Mumbai (80001) chain ID

  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
