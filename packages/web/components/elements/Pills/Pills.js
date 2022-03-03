import { Pill } from "../Pill";
import * as S from "./Pills.styles";

export function Pills({ pills, colors, inView }) {
  return (
    <S.Pills className="pills">
      {pills?.map((pill) => (
        <Pill
          key={pill?._key}
          data={pill?.data}
          icon={pill?.icons}
          context={pill?.context}
          colors={colors}
          className={inView ? "visible" : "hidden"}
        />
      ))}
    </S.Pills>
  );
}
