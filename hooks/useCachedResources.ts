import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "rubik-bold": require("../assets/fonts/Rubik/Rubik-Bold.ttf"),
          "poppins-regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
          "poppins-semibold": require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
          "poppins-bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
          "roboto-medium": require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
          "inter-regular": require("../assets/fonts/Inter/Inter-Regular.ttf"),
          "inter-bold": require("../assets/fonts/Inter/Inter-Bold.ttf"),
          "inter-medium": require("../assets/fonts/Inter/Inter-Medium.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
