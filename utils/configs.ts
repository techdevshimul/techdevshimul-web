const apiMainUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
const apiBaseUrl = apiMainUrl + "/api/v1";

const configs = {
  apiBaseUrl,
};

export default configs;
