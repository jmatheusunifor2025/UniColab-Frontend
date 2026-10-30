// src/mappers/simuladoMapper.ts
import { ApiSimuladoDTO, SimuladoViewModel } from '../types/api';

export function mapSimuladoToViewModel(dto: ApiSimuladoDTO): SimuladoViewModel {
  return {
    id: dto.id,
    title: dto.titulo,
    totalQuestions: dto.questoes_count,
    durationMinutes: dto.tempo_limite_minutos,
  };
}