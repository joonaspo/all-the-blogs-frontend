import axios from 'axios';
import { Tag } from '../types';

const baseUrl = 'api/tags';

export const getAllTags = async () => {
  const { data } = await axios.get<Tag[]>(`${baseUrl}/all`);
  return data;
};
