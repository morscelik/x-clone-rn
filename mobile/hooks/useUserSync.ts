
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-expo";
import { useApiClient, userApi } from "../utils/api";

export const useUserSync = () => {
    const { isSignedIn } = useAuth();
    const api = useApiClient();
  
    const syncUserMutation = useMutation({
      mutationFn: () => userApi.syncUser(api),
      onSuccess: (response: any) => {
        console.log("User synced successfully:", response.data.user);
      },
      onError: (error: any) => {
        console.error("User sync failed:", error);
        // Daha detaylı hata bilgisi
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        } else if (error.request) {
          console.error("Request:", error.request);
        } else {
          console.error("Error message:", error.message);
        }
      },
    });
  
    useEffect(() => {
      if (isSignedIn && !syncUserMutation.data) {
        syncUserMutation.mutate();
      }
    }, [isSignedIn]);
  
    return null;
  };