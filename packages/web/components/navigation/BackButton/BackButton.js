import { Arrow } from "../../icons/Arrow";
import * as S from "./BackButton.styles";

export function BackButton({ instanceRef, setViaSpainLink, moveTo }) {
  return (
    <S.BackButton
      type="button"
      onClick={() => {
        instanceRef.current.moveToIdx(moveTo);
        setViaSpainLink(false);
      }}
      className="back"
      aria-label="Back to previous slide"
    >
      <Arrow />
    </S.BackButton>
  );
}
