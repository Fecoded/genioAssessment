import { Routes as Switch, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Wallet } from "./pages/Wallet";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" element={<Dashboard />} />
      <Route path="/wallet" element={<Wallet />} />
    </Switch>
  );
};

export default Routes;
