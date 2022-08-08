export function getBaseUrlForEnvironment(env) {
  switch (env) {
    case "development":
      return "https://integrations-development.mavenmachines.com/";
    case "qa":
      return "https://integrations-qa.mavenmachines.com/";
    case "preprod":
      return "https://integrations-preprod.mavenmachines.com/";
    case "staging":
      return "https://integrations-staging.mavenmachines.com/";
    case "production":
      return "https://integrations.mavenmachines.com/";
  }
}

export function getApiKeyForEnvironment(env) {
  console.log("ENV", env);
  switch (env) {
    case "development":
      console.log("sug");
      return process.env.NEXT_PUBLIC_DEV_API_KEY;
    case "qa":
      return process.env.NEXT_PUBLIC_QAPREPRODSTAGING_API_KEY;
    case "preprod":
      return process.env.NEXT_PUBLIC_QAPREPRODSTAGING_API_KEY;
    case "staging":
      return process.env.NEXT_PUBLIC_QAPREPRODSTAGING_API_KEY;
    case "production":
      return process.env.NEXT_PUBLIC_MAVEN_PROD_API_KEY;
  }
}
