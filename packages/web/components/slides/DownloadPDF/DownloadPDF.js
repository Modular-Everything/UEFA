import { ButtonEl } from "../../elements/Button";
import { Content } from "../../elements/Content";
import { Download } from "../../elements/Icons/assets/Download";
import * as S from "./DownloadPDF.styles";

function openPrint() {
  if (typeof window !== undefined) {
    window.print();
  }
}

export function DownloadPDF() {
  return (
    <S.DownloadPDF className="downloadPDF">
      <Content>
        <div className="container">
          <Download />

          <div>
            <h4>Download PDF</h4>
            <p>Please consider the environment before printing this PDF</p>
          </div>

          <ButtonEl
            label="Click here to download"
            onClick={() => openPrint()}
          />
        </div>
      </Content>
    </S.DownloadPDF>
  );
}
