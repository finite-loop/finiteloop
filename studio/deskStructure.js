import S from "@sanity/desk-tool/structure-builder";

import EyeIcon from "part:@sanity/base/eye-icon";
import EditIcon from "part:@sanity/base/edit-icon";
import IframePreview from "./components/Iframe/IframePreview";

const remoteURL = "https://admin.finiteloop.io/";
const localURL = "http://localhost:8000";
const previewURL =
  window.location.hostname === "localhost" ? localURL : remoteURL;

const hiddenDocTypes = listItem =>
  !["blog", "team", "menu", "projects"].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Blogs")
        .schemaType("blog")
        .child(
          S.documentTypeList("blog")
            .title("Blogs")
            .child(documentId =>
              S.document(documentId)
                .schemaType("blog")
                .views([
                  S.view.form().icon(EditIcon),
                  S.view
                    .component(IframePreview)
                    .options({ previewURL })
                    .title("Web Preview")
                    .icon(EyeIcon)
                ])
            )
        ),
      S.listItem()
        .title("Team")
        .schemaType("team")
        .child(S.documentTypeList("team").title("Team")),
      S.listItem()
        .title("Menu")
        .schemaType("menu")
        .child(S.documentTypeList("menu").title("Menu")),
      S.listItem()
        .title("Projects")
        .schemaType("projects")
        .child(S.documentTypeList("projects").title("Projects")),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
