import "../styles/globals.css";
import Layout from "../components/layout";
import { useState, useEffect } from "react";

const API_KEY = "d8dae0c6-2d99-4cb5-921f-8f17707cea20";
const APP_ID = "APP_ID";

function MyApp({ Component, pageProps }) {
  const [hasLoadedData, setLoadedData] = useState(false);
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    async function setupSdk() {
      maven.configure({
        sdkBaseUrl: "https://integrations-qa.mavenmachines.com/",
      });

      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const requestContext = urlParams.get("requestContext");
      // const requestContext = '%7B%0A%20%20%22employeeId%22%3A%2045%2C%0A%20%20%22deviceLocation%22%3A%20%7B%0A%20%20%20%20%22timestamp%22%3A%201659024285233%2C%0A%20%20%20%20%22latitude%22%3A%2040.46365%2C%20%0A%20%20%20%20%22longitude%22%3A%20-79.95387%0A%20%20%7D%2C%0A%20%20%22marketAppSessionToken%22%3A%20%2231d6cfe0d16ae931b73c59d7e0c089c0%22%0A%7D';
      // const requestContext = encodeURIComponent(
      //   JSON.stringify({
      //     employeeId: 2,
      //     companyId: 1,
      //     deviceLocation: {
      //       lat: "23.444",
      //       lng: "1.233",
      //     },
      //     marketAppSessionToken: "e9ff1c78-c413-4d32-af43-ed2b29a269b4",
      //   })
      // );

      try {
        const session = await maven.generateSessionFromToken(
          APP_ID,
          API_KEY,
          requestContext
        );
        const driver = await session.getDriver();
        setLoadedData(true);
        setDriver(driver);
      } catch (e) {
        setLoadedData(true);
      }
    }

    setupSdk();
  }, []);

  return (
    <Layout hasLoadedData={hasLoadedData}>
      <Component {...pageProps} hasLoadedData={hasLoadedData} driver={driver} />
    </Layout>
  );
}

export default MyApp;
