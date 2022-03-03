import { Arrow } from "../../icons/Arrow";
import * as S from "./BackButton.styles";

export function BackButton({ fullpageApi, moveTo }) {
  return (
    <S.BackButton
      type="button"
      onClick={() => fullpageApi.moveTo(moveTo)}
      className="back"
      aria-label="Back to previous slide"
    >
      <Arrow />
    </S.BackButton>
  );
}
