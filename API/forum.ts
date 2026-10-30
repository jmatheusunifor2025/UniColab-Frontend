import { http } from './api/http';
import { ApiTopicoForumDTO, CriarTopicoDTO } from '../types/api';

export const forumApi = {
  listarTopicos: async (): Promise<ApiTopicoForumDTO[]> => {
    return http<ApiTopicoForumDTO[]>('/forum/topicos');
  },

  criarTopico: async (payload: CriarTopicoDTO): Promise<ApiTopicoForumDTO> => {
    return http<ApiTopicoForumDTO>('/forum/topicos', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },
};