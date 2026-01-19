import { fetchJSON } from '@/service/api';

export async function fetchGridPress() {
  try {
    return await fetchJSON('/src/assets/data/gridPressData.json');
  } catch (error) {
    console.error('[fetchGridPress] Error:', error);
    throw error;
  }
}

export async function fetchListPress() {
  try {
    return await fetchJSON('/src/assets/data/listPressData.json');
  } catch (error) {
    console.error('[fetchListPress] Error:', error);
    throw error;
  }
}

export async function fetchCategory() {
  try {
    return await fetchJSON('/src/assets/data/categoryData.json');
  } catch (error) {
    console.error('[fetchCategory] Error:', error);
    throw error;
  }
}
