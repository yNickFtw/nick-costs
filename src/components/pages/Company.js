import styles from "./Company.module.css";

function Company() {
  return (
    <div className={styles.about_section}>
      <h1>
        O que é a <span>NickCosts</span>
      </h1>

      <p>
        A plataforma de gerenciamento de projetos NickCosts é uma solução
        inovadora para gerenciar e otimizar o orçamento e o desempenho de
        projetos. Fundada em 2023, a equipe da NickCosts tem como objetivo
        tornar o gerenciamento de projetos mais fácil e eficiente para empresas
        e indivíduos.
      </p>

      <p>
        Ela é projetada para ser fácil de usar e fornece uma ampla variedade de
        recursos para ajudar a gerenciar projetos de maneira eficaz. Os usuários
        podem criar orçamentos detalhados, acompanhar despesas, gerenciar
        tarefas e colaborar com equipes. Além disso, a plataforma fornece
        relatórios avançados e ferramentas de análise para ajudar a entender o
        desempenho dos projetos e tomar decisões informadas.
      </p>

      <p>
        Se você está procurando uma maneira fácil e eficaz de gerenciar
        projetos, experimente a plataforma NickCosts hoje e veja como ela pode
        ajudá-lo a alcançar seus objetivos!
      </p>
    </div>
  );
}

export default Company;
