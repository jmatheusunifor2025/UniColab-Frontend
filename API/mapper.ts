import { ApiQuestaoDTO, QuestaoViewModel } from '../types/api';

export function mapQuestaoToViewModel(dto: ApiQuestaoDTO): QuestaoViewModel {
  const dificuldadeMap: Record<ApiQuestaoDTO['dificuldade'], string> = {
    FACIL: 'Fácil',
    MEDIO: 'Médio',
    DIFICIL: 'Difícil',
  };

  return {
    id: dto.id,
    statement: dto.enunciado,
    options: dto.alternativas.map((alt) => ({
      id: alt.id,
      text: alt.texto,
    })),
    subject: dto.disciplina,
    difficultyLabel: dificuldadeMap[dto.dificuldade] || 'Geral',
  };
}