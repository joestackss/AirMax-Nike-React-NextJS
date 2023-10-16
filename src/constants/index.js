import {
  airMaxA,
  airMaxB,
  airMaxC,
  airMaxD,
  airMaxE,
  airMaxF,
  clientOne,
  clientTwo,
  clientThree,
} from "../assets/images";

export const navigationUrl = [
  { href: "#home", label: "Home" },
  { href: "#arrivals", label: "New Arrivals" },
  { href: "#offers", label: "Offers" },
  { href: "#reviews", label: "Reviews" },
];

export const products = [
  {
    imgURL: airMaxA,
    name: "Nike Mid Blazer",
    price: "$120.20",
  },
  {
    imgURL: airMaxB,
    name: "Nike Fly Zoom",
    price: "$125.20",
  },
  {
    imgURL: airMaxC,
    name: "Nike Air Max",
    price: "$172.20",
  },

  {
    imgURL: airMaxD,
    name: "Nike Mid Blazer",
    price: "$130.20",
  },
  {
    imgURL: airMaxE,
    name: "Nike Fly Zoom",
    price: "$91.20",
  },
  {
    imgURL: airMaxF,
    name: "Nike Air Max",
    price: "$82.20",
  },
];

export const testimonials = [
  {
    imgURL: clientOne,
    customerName: "Sultan",
    rating: 4.4,
    feedback:
      "The sneakers are fire and exactly what I was looking for. I'll definitely be coming back!",
  },
  {
    imgURL: clientTwo,
    customerName: "Tabby",
    rating: 4.5,
    feedback:
      "Sneakers are great. I love the quality and the design. You just got a new customer!",
  },
  {
    imgURL: clientThree,
    customerName: "Jerry",
    rating: 3.9,
    feedback:
      "Fireeeeeee. I love the kicks, there are great! I will make some cool beats with them!",
  },
];

export const footerLinks = [
  {
    title: "Nike Air Max",
    links: [
      { name: "Air Max 1", link: "/" },
      { name: "Air Max 90", link: "/" },
      { name: "Air Max 95", link: "/" },
      { name: "Air Max 97", link: "/" },
      { name: "Air Max 270", link: "/" },
      { name: "Air Max 720", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How to Shop", link: "/" },
      { name: "Returns Policy", link: "/" },
      { name: "Shipping Info", link: "/" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { name: "Email: customer@airmax.com", link: "mailto:customer@nike.com" },
      { name: "Phone: +2342554862354", link: "tel:+92554862354" },
    ],
  },
];
