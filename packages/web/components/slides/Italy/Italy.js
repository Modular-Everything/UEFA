import { Headline } from "../../elements/Headline";
import * as S from "./Italy.styles";
import { Pattern } from "./Pattern";

export function Italy({ data }) {
  return (
    <S.Italy>
      <div className="content">
        <Headline data={{ headline: data?.headline }} />
      </div>
      <Pattern />
    </S.Italy>
  );
}
