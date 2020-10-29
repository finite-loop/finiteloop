export default {
  name: "contactUs",
  type: "document",
  title: "Contact Us",
  fields: [
    {
      title: "Page Title",
      name: "title",
      type: "string"
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      title: "Heading",
      name: "heading",
      type: "text",
      rows: "3"
    },
    {
      title: "Sub Heading",
      name: "SubHeading",
      type: "text",
      rows: "3"
    },
    {
      title: "Address 1",
      name: "address1",
      type: "string"
    },
    {
      title: "Address 2",
      name: "address2",
      type: "string"
    },
    {
      title: "CityPIN",
      name: "cityPin",
      type: "string"
    },

    {
      title: "State country",
      name: "statecountry",
      type: "string"
    },
    {
      title: "Phone",
      name: "phone",
      type: "string"
    },
    {
      title: "email",
      name: "email",
      type: "string"
    },
    {
      title: "Submit Message",
      name: "SubmitMessage",
      type: "text",
      rows: "3"
    },
    {
      title: "Footer Content",
      name: "footerContent",
      type: "text",
      rows: "3"
    },
    {
      title: "Map Center Latitude",
      name: "mapCenterLat",
      type: "number"
    },
    {
      title: "Map Center Longitude",
      name: "mapCenterLong",
      type: "number"
    },
    {
      title: "Map Position Latitude",
      name: "mapPositionLat",
      type: "number"
    },
    {
      title: "Map Position Longitude",
      name: "mapPositionLong",
      type: "number"
    }
  ]
};
