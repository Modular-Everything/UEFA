import S from "@sanity/desk-tool/structure-builder";
import Iframe from "sanity-plugin-iframe-pane";

import resolveProductionUrl from "./resolveProductionUrl";

export const getDefaultDocumentNode = () => {
  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: (doc) => resolveProductionUrl(doc),
      })
      .title("Preview"),
  ]);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>
  S.list()
    .title("Dashboard")
    .items([
      S.documentTypeListItem("client"),
      S.documentTypeListItem("deck"),
      S.documentTypeListItem("users"),
    ]);
