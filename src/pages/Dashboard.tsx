import { Wrapper } from "../components";
import { AsideLeftMenu } from "../components/aside/AsideLeftMenu";
import { AsideRightMenuWrapper } from "../components/aside/AsideRightMenuWrapper";
import { Dashboard as HomePage } from "../components/dashboard";

export const Dashboard: React.FC = () => (
  <Wrapper>
    <AsideLeftMenu />
    <AsideRightMenuWrapper>
      <HomePage />
    </AsideRightMenuWrapper>
  </Wrapper>
);
