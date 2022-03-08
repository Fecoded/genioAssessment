import { Wrapper } from "../components";
import { AsideLeftMenu } from "../components/aside/AsideLeftMenu";
import { AsideRightMenuWrapper } from "../components/aside/AsideRightMenuWrapper";
import { Wallet as WalletPage } from "../components/wallet";

export const Wallet: React.FC = () => (
  <Wrapper>
    <AsideLeftMenu />
    <AsideRightMenuWrapper>
      <WalletPage />
    </AsideRightMenuWrapper>
  </Wrapper>
);
