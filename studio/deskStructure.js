import S from "@sanity/desk-tool/structure-builder";

import EyeIcon from "part:@sanity/base/eye-icon";
import EditIcon from "part:@sanity/base/edit-icon";
import { MdSettings, MdHome, MdContacts, MdMenu } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { GiPathDistance, GiStairsGoal } from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa";

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
        .title("Site Global Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        )
        .icon(MdSettings),
      S.listItem()
        .title("Home")
        .schemaType("home")
        .child(S.documentTypeList("home").title("Home"))
        .icon(MdHome),
      ,
      S.listItem()
        .title("Our Work")
        .schemaType("ourWork")
        .child(S.documentTypeList("ourWork").title("Our Work"))
        .icon(GiStairsGoal),
      ,
      S.listItem()
        .title("Team")
        .schemaType("team")
        .child(S.documentTypeList("team").title("Team"))
        .icon(IoIosPeople),
      ,
      S.listItem()
        .title("Team Page Content")
        .schemaType("teamPageContent")
        .child(S.documentTypeList("teamPageContent").title("Team Page Content"))
        .icon(IoIosPeople),
      ,
      S.listItem()
        .title("Menu")
        .schemaType("menu")
        .child(S.documentTypeList("menu").title("Menu"))
        .icon(MdMenu),
      ,
      S.listItem()
        .title("The Way")
        .schemaType("theWay")
        .child(
          S.editor()
            .schemaType("theWay")
            .title("The Way")
            .documentId("theWay")
        )
        .icon(GiPathDistance),
      ,
      S.listItem()
        .title("Customers")
        .schemaType("customers")
        .child(S.documentTypeList("customers").title("Customers"))
        .icon(FaRegHandshake),
      ,
      S.listItem()
        .title("Careers")
        .schemaType("careers")
        .child(S.documentTypeList("careers").title("Careers"))
        .icon(GiStairsGoal),
      ,
      S.listItem()
        .title("Contact Us")
        .schemaType("contactUs")
        .child(S.documentTypeList("contactUs").title("Contact Us"))
        .icon(MdContacts),
      ,
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
        ),
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
        )
      //...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
