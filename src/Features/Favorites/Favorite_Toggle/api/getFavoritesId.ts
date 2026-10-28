import axios from "axios";
import { api } from "@/shared/lib/axios_instance";
import { FavoritesId } from "../types/favoritesId";
import { EMPTY_FAV_IDS } from "../empty_fav_ids";

export async function getFavoritesId(): Promise<FavoritesId> {
  try {
    const { data } = await api.get<FavoritesId>("/favorites/product-ids/");
    return data;
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response?.status === 401
    ) {
      return EMPTY_FAV_IDS;
    }

    throw error;
  }
}