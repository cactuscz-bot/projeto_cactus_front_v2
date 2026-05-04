"use client";

import { PostRequests } from "@/src/services/api/post/postRequests";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useMemo, useState } from "react";

const ITENS_PER_PAGE = 6;

export default function useListagemPosts() {
  const [visibleCount, setVisibleCount] = useState(ITENS_PER_PAGE);

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["postagens"],
    queryFn: async () => {
      return await PostRequests.getAll();
    },
  });

  const visiblePosts = useMemo(() => {
    return data?.slice(0, visibleCount);
  }, [data, visibleCount]);

  const hasMore = isSuccess && visibleCount < data.length;

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) => prev + ITENS_PER_PAGE);
  }, [setVisibleCount]);

  return {
    data,
    isLoading,
    isSuccess,
    visiblePosts,
    hasMore,
    handleLoadMore,
  };
}
