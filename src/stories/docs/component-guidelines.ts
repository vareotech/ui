export const componentGuidelines = {
  button: {
    purpose: 'Executar ações com hierarquia visual clara.',
    do: ['Use primary para a ação dominante.', 'Use loading para feedback imediato.', 'Evite mais de uma ação primary no mesmo bloco.'],
    dont: ['Não use destructive sem risco real.', 'Não misture muitos tamanhos na mesma faixa de ações.'],
  },
  field: {
    purpose: 'Capturar dados com contexto, clareza e validação visível.',
    do: ['Agrupe campos por contexto.', 'Use helper text e mensagem de validação.', 'Mantenha labels explícitas.'],
    dont: ['Não esconda erro apenas em borda vermelha.', 'Não use placeholders como label principal.'],
  },
  navigation: {
    purpose: 'Orientar a tarefa, o contexto atual e as próximas ações.',
    do: ['Mostre localização com breadcrumb e heading.', 'Deixe item ativo evidente.', 'Agrupe ações globais separadamente.'],
    dont: ['Não crie navegação sem estado ativo.', 'Não misture ações primárias com links utilitários.'],
  },
} as const
