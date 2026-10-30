import { http } from './src/api/http';
import { ApiSimuladoDTO } from '../types/api';

export const simuladosApi = {
  listar: async (): Promise<ApiSimuladoDTO[]> => {
    return http<ApiSimuladoDTO[]>('/simulados');
  },

  iniciar: async (simuladoId: string): Promise<{ tentativaId: string }> => {
    return http<{ tentativaId: string }>(`/simulados/${simuladoId}/iniciar`, {
      method: 'POST',
    });
  },
};