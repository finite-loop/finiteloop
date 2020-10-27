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

const innerListTypes = listItem =>
  !["page", "page1", "page2"].includes(listItem.getId());

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
      S.listItem()
        .title("Pages")
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("About Page")
                .schemaType("about")
                .child(S.documentTypeList("about").title("About")),
              S.listItem()
                .title("Relationship Page")
                .schemaType("relationship")
                .child(
                  S.documentTypeList("relationship").title("Relationship")
                ),
              S.listItem()
                .title("Work Page")
                .schemaType("work")
                .child(S.documentTypeList("work").title("Work")),
              S.listItem()
                .title("Initiatives")
                .schemaType("initiatives")
                .child(S.documentTypeList("initiatives").title("Initiatives"))

              //...S.documentTypeListItems().filter(innerListTypes)
            ])
        )
      //...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
