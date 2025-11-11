
import { useSocialAuth } from "@/hooks/useSocialAuth";
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from "react-native";

export default function App() {

  const { handleSocialAuth, isLoading } = useSocialAuth();

  return (
    <View className="flex-1  bg-white">
      <View className="flex-1 px-8  justify-between">
        <View className="flex-1 justify-center">
          {/* DEMO IMAGE */}
          <View className="items-center">
            <Image source={require("../../assets/images/auth2.png")} className="w-96 h-96" resizeMode="contain" />
          </View>

          {/* BUTTONS */}
          <View className="flex-col gap-2">
            <TouchableOpacity className="flex-row items-center justify-center bg-white border border-gray-300 rounded-full py-3 px-5"
              onPress={() => handleSocialAuth("oauth_google")}
              disabled={isLoading}
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5, // for Android
              }}
            >
              { isLoading ? (
                <ActivityIndicator size="small" color="#4285F4" className="mr-3" />
              ) : (
                <View className="flex-row items-center justify-center ">
                <Image source={require("../../assets/images/google.png")} className="size-10 mr-3" resizeMode="contain" />
                <Text className="text-black font-medium text-base">Continue with Google</Text>
              </View>
              )}

              
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-center bg-white border border-gray-300 rounded-full py-3 px-5"
              onPress={() => handleSocialAuth("oauth_apple")}
              disabled={isLoading}
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5, // for Android
              }}
            >

              {
                isLoading ? (
                  <ActivityIndicator size="small" color="#000000" className="mr-3" />
                ) : (
                  <View className="flex-row items-center justify-center ">
                    <Image source={require("../../assets/images/apple.png")} className="size-8 mr-3" resizeMode="contain" />
                    <Text className="text-black font-medium text-base">Continue with Apple</Text>
                  </View>
                )
              }

            </TouchableOpacity>

          </View>
          {/* TERMS AND PRIVACY */}
          <Text className="text-center text-gray-500 text-xs leading-4 mt-6 px-2">
            By signing up, you agree to our <Text className="text-blue-500">Terms</Text>
            {", "}
            <Text className="text-blue-500">Privacy Policy</Text>
            {", and "}
            <Text className="text-blue-500">Cookie Use</Text>.
          </Text>
        </View>
      </View>

    </View>
  );
}