import { Arrow } from "../../icons/Arrow";
import * as S from "./BackButton.styles";

export function BackButton({ instanceRef, moveTo }) {
  return (
    <S.BackButton
      type="button"
      onClick={() => instanceRef.current.moveToIdx(moveTo)}
      className="back"
      aria-label="Back to previous slide"
    >
      <Arrow />
    </S.BackButton>
  );
}
