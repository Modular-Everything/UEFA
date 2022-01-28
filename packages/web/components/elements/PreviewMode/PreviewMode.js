import Link from "next/link";

import * as S from "./PreviewMode.styles";

export function PreviewMode({ preview }) {
  if (!preview) {
    return null;
  }

  return (
    <S.PreviewMode>
      {preview && <Link href="/api/exit-preview">Preview Mode Activated!</Link>}
    </S.PreviewMode>
  );
}
