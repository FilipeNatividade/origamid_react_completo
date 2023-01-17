import { ArrayDois } from "./ArraysDois";
import { ChangeData } from "./ChangeData";
import { ContextApp } from "./ContextExamplo/ContextApp";
import { CustomHookApp } from "./CustomHook/CustomHookApp";
import { AppChallenge } from "./DesafioComponentes/AppChallenge";
import { ChallengeHooks } from "./DesafioHooks/ChallengeHooks";

const bodyApp = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const App = () => {
  return (
    <div style={bodyApp}>
      <hr style={{ width: "100%" }} />
      <CustomHookApp />
      <hr style={{ width: "100%" }} />
      <ContextApp />
      <hr style={{ width: "100%" }} />
      <ChallengeHooks />
      <hr style={{ width: "100%" }} />
      <AppChallenge />
      <hr style={{ width: "100%" }} />
      <ArrayDois />
      <hr style={{ width: "100%" }} />
      <ChangeData />
    </div>
  );
};

// se vc digitar rafc(react arrow function component), o vs code ja tras o componente pronto pra vc
