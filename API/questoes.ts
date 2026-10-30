import { http } from '../http';
import { ApiQuestaoDTO, ResponderQuestaoDTO, RespostaQuestaoResponseDTO } from '../types/api';

export const questoesApi = {
  listar: async (): Promise<ApiQuestaoDTO[]> => {
    return http<ApiQuestaoDTO[]>('/questoes');
  },

  obterPorId: async (id: string): Promise<ApiQuestaoDTO> => {
    return http<ApiQuestaoDTO>(`/questoes/${id}`);
  },

  responder: async (payload: ResponderQuestaoDTO): Promise<RespostaQuestaoResponseDTO> => {
    return http<RespostaQuestaoResponseDTO>('/questoes/responder', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },
};