// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
//Document types

import team from "./documents/team";
import menu from "./documents/menu";
import projects from "./documents/project";
import blog from "./documents/blog";
import relationship from "./documents/pages/relationship";
import work from "./documents/pages/work";
import initiatives from "./documents/pages/Initiatives";
import about from "./documents/pages/about";

//Object types

import figure from "./objects/Common/figure";
import bioPortableText from "./objects/PortableTextEditors/bioPortableText";
import projectMember from "./objects/Common/projectMember";
import blogPortableText from "./objects/PortableTextEditors/blogPortableText";
import simplePortableText from "./objects/PortableTextEditors/simplePortableText";
import youtube from "./objects/External/youtube";
import line from "./objects/Common/line";
import tweet from "./objects/External/tweet";
import instagram from "./objects/External/instagram";
import submenu from "./objects/Menu/subMenu";
import secondarysubmenu from "./objects/Menu/secondarySubMenu";
import titleslug from "./objects/Menu/titleslug";
import contentAndImage from "./objects/Common/contentAndImage";
import jobs from "./objects/Common/jobs";
import projectAndCategory from "./objects/projectCategories";
import contentAndHeading from "./objects/Common/contentAndHeading";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    //Objects
    figure,
    bioPortableText,
    projectMember,
    blogPortableText,
    simplePortableText,
    youtube,
    line,
    tweet,
    instagram,
    submenu,
    titleslug,
    secondarysubmenu,
    contentAndImage,
    jobs,
    projectAndCategory,
    contentAndHeading,
    //documents

    team,
    menu,
    projects,
    blog,
    relationship,
    work,
    initiatives,
    about
  ])
});
