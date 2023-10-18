import { useQuery } from "@tanstack/react-query";
import { viewAllUserAPI } from "../api/userAPI";

export const useViewAllUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: viewAllUserAPI,
  });

  return { data, isLoading };
};

