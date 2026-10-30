export interface LoginRequestDTO {
  email: string;
  senha: string;
}

export interface LoginResponseDTO {
  token: string;
  usuario: {
    id: string;
    nome: string;
    email: string;
    perfil: string;
  };
}

export interface ApiQuestaoDTO {
  id: string;
  enunciado: string;
  alternativas: {
    id: string;
    texto: string;
  }[];
  disciplina: string;
  dificuldade: 'FACIL' | 'MEDIO' | 'DIFICIL';
}

export interface ResponderQuestaoDTO {
  questaoId: string;
  alternativaId: string;
}

export interface RespostaQuestaoResponseDTO {
  correta: boolean;
  comentario: string;
}

export interface ApiSimuladoDTO {
  id: string;
  titulo: string;
  questoes_count: number;
  tempo_limite_minutos: number;
}

export interface ApiTopicoForumDTO {
  id: string;
  titulo: string;
  conteudo: string;
  autor_nome: string;
  criado_em: string;
  respostas_count: number;
}

export interface CriarTopicoDTO {
  titulo: string;
  conteudo: string;
}

export interface ApiPainelMetricasDTO {
  questoes_resolvidas: number;
  taxa_acerto: number;
  simulados_concluidos: number;
}

export interface QuestaoViewModel {
  id: string;
  statement: string;
  options: { id: string; text: string }[];
  subject: string;
  difficultyLabel: string;
}

export interface SimuladoViewModel {
  id: string;
  title: string;
  totalQuestions: number;
  durationMinutes: number;
}