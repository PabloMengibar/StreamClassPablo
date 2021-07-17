require("dotenv").config();

const Serie = require("../models/Serie");

const series = [
  {
    id: "1",
    title: "Enseña Vela",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae porro distinctio. Nesciunt mollitia harum porro fuga laborum nihil assumenda eaque expedita quam quia numquam, alias necessitatibus tenetur libero velit iure illum error vitae deserunt nulla! Magnam saepe pariatur dolorum expedita corporis, incidunt accusantium mollitia voluptates.",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1622793421/poseidon/evqjn1klh9gnq7dy7mog.jpg",
    sportsPlayerId: "2",
    categoryId: "1",
  },
  {
    id: "2",
    title: "Enseña Gimnasia Rítmica",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae porro distinctio. Nesciunt mollitia harum porro fuga laborum nihil assumenda eaque expedita quam quia numquam, alias necessitatibus tenetur libero velit iure illum error vitae deserunt nulla! Magnam saepe pariatur dolorum expedita corporis, incidunt accusantium mollitia voluptates.",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1622793421/poseidon/evqjn1klh9gnq7dy7mog.jpg",
    sportsPlayerId: "3",
    categoryId: "5",
  },
  {
    id: "3",
    title: "Enseña Fórmula 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae porro distinctio. Nesciunt mollitia harum porro fuga laborum nihil assumenda eaque expedita quam quia numquam, alias necessitatibus tenetur libero velit iure illum error vitae deserunt nulla! Magnam saepe pariatur dolorum expedita corporis, incidunt accusantium mollitia voluptates.",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1622793421/poseidon/dqzcytx56usnv1oyzzn0.jpg",
    sportsPlayerId: "4",
    categoryId: "7",
  },
  {
    id: "4",
    title: "Enseña Tenis",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae porro distinctio. Nesciunt mollitia harum porro fuga laborum nihil assumenda eaque expedita quam quia numquam, alias necessitatibus tenetur libero velit iure illum error vitae deserunt nulla! Magnam saepe pariatur dolorum expedita corporis, incidunt accusantium mollitia voluptates.",
    photo:
      "https://res.cloudinary.com/madeleinetestcloud/image/upload/v1622793421/poseidon/evqjn1klh9gnq7dy7mog.jpg",
    sportsPlayerId: "1",
    categoryId: "7",
  },
];

Serie.bulkCreate(series).then(() => console.log("Las series han sido creadas"));
