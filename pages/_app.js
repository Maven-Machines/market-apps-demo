import "../styles/globals.css";
import Layout from "../components/layout";
import { useState, useEffect } from "react";
import {
  getApiKeyForEnvironment,
  getBaseUrlForEnvironment,
} from "../utility/config";

const APP_ID = "APP_ID";

function MyApp({ Component, pageProps }) {
  const [hasLoadedData, setLoadedData] = useState(false);
  const [driver, setDriver] = useState(null);
  const [deviceLocation, setDeviceLocation] = useState(null);

  useEffect(() => {
    async function setupSdk() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const requestContext = urlParams.get("requestContext");

      try {
        const decoded = decodeURIComponent(requestContext);
        const parsedContext = JSON.parse(decoded);
        const env = parsedContext.environment;

        maven.configure({
          sdkBaseUrl: getBaseUrlForEnvironment(env),
        });

        const session = await maven.getSessionFromRequestContext(
          APP_ID,
          getApiKeyForEnvironment(env),
          requestContext
        );
        const driver = await session.getDriver();
		const deviceLocation = await session.getLatestDeviceLocation();
        setLoadedData(true);
        setDriver(driver);
        setDeviceLocation(deviceLocation);
      } catch (e) {
        console.log(e);
        setLoadedData(true);
      }
    }

    setupSdk();
  }, []);

  return (
    <Layout hasLoadedData={hasLoadedData}>
      <Component {...pageProps} hasLoadedData={hasLoadedData} driver={driver} deviceLocation={deviceLocation}/>
    </Layout>
  );
}

export default MyApp;
