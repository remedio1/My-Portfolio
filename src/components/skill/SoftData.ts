export interface Skill {
  name: string;
  description: string;
}

// Este objeto contém apenas as CHAVES para a tradução.
// É um dado estático e não viola nenhuma regra.
export const skillsKeys = [
  {
    nameKey: "comunicação_eficaz.name",
    descriptionKey: "comunicação_eficaz.description",
  },
  {
    nameKey: "resolução_de_problemas.name",
    descriptionKey: "resolução_de_problemas.description",
  },
  {
    nameKey: "trabalho_em_equipe.name",
    descriptionKey: "trabalho_em_equipe.description",
  },
  {
    nameKey: "gerenciamento_de_tempo.name",
    descriptionKey: "gerenciamento_de_tempo.description",
  },
  {
    nameKey: "proatividade.name",
    descriptionKey: "proatividade.description",
  },
  {
    nameKey: "empatia.name",
    descriptionKey: "empatia.description",
  },
];
