import { http } from '../http';
import { ApiPainelMetricasDTO } from '../types/api';

export const painelApi = {
  obterMetricas: async (): Promise<ApiPainelMetricasDTO> => {
    return http<ApiPainelMetricasDTO>('/painel/metricas');
  },
};