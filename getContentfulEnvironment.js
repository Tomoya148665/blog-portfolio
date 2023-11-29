const contentfulManagement = require("contentful-management");
const dotenv = require("dotenv");

dotenv.config();

const MANAGEMENT_TOKEN = process.env.VITE_CONTENTFUL_MANAGEMENT_TOKEN || "";
const SPACE_ID = process.env.VITE_CONTENTFUL_SPACE_ID || "";
const ENVIRONMENT = process.env.VITE_CONTENTFUL_ENVIRONMENT || "";

const getContentfulEnvironment = () => {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: MANAGEMENT_TOKEN,
  });

  return contentfulClient
    .getSpace(SPACE_ID)
    .then((space) => space.getEnvironment(ENVIRONMENT));
};

module.exports = getContentfulEnvironment;
