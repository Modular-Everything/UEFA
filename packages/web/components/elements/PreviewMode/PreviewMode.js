import Link from "next/link";

import * as S from "./PreviewMode.styles";

export function PreviewMode({ preview }) {
  if (!preview) {
    return null;
  }

  return (
    <S.PreviewMode>
      {preview && (
        <Link href="/api/exit-preview">
          <a>Preview Mode Activated</a>
        </Link>
      )}
    </S.PreviewMode>
  );
}
