export const ptBR = {
  meta: {
    localeLabel: 'Idioma',
    localeEnglish: 'Inglês',
    localePortuguese: 'Português (Brasil)',
    themeLabel: 'Tema',
    themeDescription: 'Tema dos componentes',
    themeDark: 'Escuro',
    themeLight: 'Claro',
  },
  ui: {
    componentDocumentation: 'Documentação do componente',
    preview: 'Preview',
    guidelines: 'Guidelines',
    overview: 'Overview',
    doLabel: 'Do',
    dontLabel: 'Não faça',
    antiPatterns: 'Anti-patterns',
    scaleLabel: 'Escala',
    foundationsLabel: 'Foundations',
    typographySample: 'O rato roeu a roupa do rei de Roma',
    pxLabel: 'px',
  },
  docs: {
    overview: {
      title: 'Vareo design system',
      intro:
        'Vareo DS é um design system dark-first e modular, criado para acelerar produtos internos sem perder consistência visual e operacional.',
      inThisDocument: 'Neste documento',
      toc: ['O que este sistema resolve', 'Princípios', 'Camadas da V1', 'Responsividade e acessibilidade', 'Boas práticas'],
      solvesTitle: 'O que este sistema resolve',
      solvesIntro: 'Vareo DS resolve três necessidades recorrentes em times de produto:',
      solvesItems: [
        'Consistência entre contextos. A mesma linguagem visual funciona em dashboards, páginas institucionais, marketing e fluxos mobile sem parecer fragmentada.',
        'Velocidade com manutenção simples. Componentes previsíveis, tokens semânticos e regras visuais centralizadas melhoram a entrega sem aumentar a dívida de design.',
        'Contrato compartilhado de produto. Designers, engenheiros e produto se alinham na mesma linguagem por meio de tokens, variantes e stories como documentação viva.',
      ],
      principlesTitle: 'Princípios',
      principlesIntro: 'Estas quatro regras sustentam a coerência do sistema:',
      layersTitle: 'Camadas da V1',
      layersIntro: 'O sistema está organizado em três camadas:',
      layers: [
        { name: 'Foundations', description: 'Tipografia, espaçamento, radius, sombras, foco, estados e motion discreto.' },
        { name: 'Components', description: 'Primitives reutilizáveis com variantes consistentes para produto e marketing.' },
        { name: 'Templates', description: 'Exemplos reais para validar o sistema em cenários da vareo.tech.' },
      ],
      sidebarNote: 'Use a barra lateral do Storybook para explorar cada camada.',
      layerTableColumns: ['Camada', 'Descrição'],
      responsivenessTitle: 'Responsividade e acessibilidade',
      responsivenessLabel: 'Responsividade',
      responsivenessItems: [
        'Decisões mobile-first com breakpoints semânticos.',
        'Grid de 12 colunas para composição previsível.',
        'Ritmo vertical baseado em espaçamento consistente.',
      ],
      accessibilityLabel: 'Acessibilidade',
      accessibilityItems: [
        'Estados de foco visíveis com ring semântico.',
        'Contraste claro para textos e ações.',
        'Base construída sobre primitives acessíveis (Radix UI).',
      ],
      bestPracticesTitle: 'Boas práticas',
    },
    components: {
      title: 'Catálogo de componentes',
      intro:
        'Cada componente do Vareo DS funciona como um contrato de produto: propósito, anatomia, estados, interação, uso correto e anti-patterns. Use a barra lateral para navegar diretamente por um componente ou explore as categorias abaixo.',
      summary:
        'O catálogo do Vareo DS aponta para entradas individuais de componentes, cada uma com sua própria página de documentação e stories isoladas para canvas, controls e interações.',
      inThisDocument: 'Neste documento',
      toc: ['Estrutura da página', 'Forms', 'Data display', 'Layout', 'Navigation', 'Feedback', 'Overlays'],
      pageStructureTitle: 'Estrutura da página',
      pageStructureItems: [
        'Aba Docs — quando usar, variantes, orientação de do e don’t, exemplos de uso e referência de props.',
        'Story Overview — anatomia visual com componentes reais.',
        'Stories de interação — play functions para foco, clique, digitação e overlays.',
        'Acessibilidade — verificações automáticas de violações nos testes.',
      ],
      categories: {
        forms: 'Forms',
        dataDisplay: 'Data display',
        layout: 'Layout',
        navigation: 'Navigation',
        feedback: 'Feedback',
        overlays: 'Overlays',
      },
      tableColumns: ['Componente', 'Descrição', 'Stories', 'Testes'],
      componentRows: {
        forms: [
          { component: 'Button', description: 'Comunica prioridade, ação e risco.', stories: '5', tests: '✓' },
          { component: 'Input', description: 'Campo de texto base para busca, cadastro e filtros.', stories: '3', tests: '✓' },
          { component: 'Select', description: 'Escolha controlada com conteúdo compacto e leitura clara.', stories: '3', tests: '✓' },
          { component: 'Textarea', description: 'Campo de texto longo com redimensionamento e suporte a validação.', stories: '3', tests: '✓' },
          { component: 'Date Picker', description: 'Seleção discreta de datas para filtros e agendamentos.', stories: '3', tests: '✓' },
          { component: 'Checkbox', description: 'Controle binário ou de multi-seleção independente.', stories: '2', tests: '✓' },
          { component: 'Radio Group', description: 'Seleção exclusiva em um conjunto pequeno.', stories: '2', tests: '✓' },
          { component: 'Switch', description: 'Alternância imediata de configuração liga/desliga.', stories: '2', tests: '✓' },
          { component: 'Label', description: 'Nomeia campos e associa semanticamente.', stories: '1', tests: '—' },
          { component: 'Helper Text', description: 'Orientação de apoio abaixo do campo.', stories: '1', tests: '—' },
          { component: 'Validation Message', description: 'Feedback de erro ou sucesso próximo ao campo.', stories: '1', tests: '—' },
          { component: 'Separator', description: 'Divide longas seções em grupos legíveis.', stories: '1', tests: '—' },
        ],
        dataDisplay: [
          { component: 'Table', description: 'Comparação densa e leitura escaneável.', stories: '1', tests: '—' },
          { component: 'Avatar', description: 'Identificação visual curta para usuários e propriedade.', stories: '1', tests: '—' },
          { component: 'Badge', description: 'Status curtos e metadados.', stories: '1', tests: '—' },
          { component: 'Tag', description: 'Rótulos compactos removíveis ou estáticos.', stories: '1', tests: '—' },
          { component: 'Tabs', description: 'Alternância visível entre painéis equivalentes.', stories: '2', tests: '✓' },
          { component: 'Accordion', description: 'Divulgação progressiva em fluxo vertical.', stories: '1', tests: '—' },
        ],
        layout: [{ component: 'Card', description: 'Base estrutural para blocos de conteúdo agrupados.', stories: '1', tests: '—' }],
        navigation: [
          { component: 'Breadcrumb', description: 'Contexto de localização e navegação hierárquica.', stories: '1', tests: '—' },
          { component: 'Pagination', description: 'Navegação por página com foco acessível e estado ativo visível.', stories: '2', tests: '✓' },
        ],
        feedback: [
          { component: 'Alert', description: 'Mensagens contextuais sobre risco, progresso ou informação importante.', stories: '1', tests: '—' },
          { component: 'Empty State', description: 'Explica ausência e sugere próximo passo.', stories: '1', tests: '—' },
          { component: 'Loading State', description: 'Indica trabalho em andamento com feedback calmo.', stories: '1', tests: '—' },
          { component: 'Skeleton', description: 'Mantém o ritmo do layout enquanto o conteúdo carrega.', stories: '1', tests: '—' },
        ],
        overlays: [
          { component: 'Dialog', description: 'Camada focada com foco preso.', stories: '2', tests: '✓' },
          { component: 'Sheet', description: 'Painel lateral que preserva o contexto de fundo.', stories: '1', tests: '—' },
          { component: 'Tooltip', description: 'Ajuda contextual curta próxima ao gatilho.', stories: '1', tests: '—' },
          { component: 'Dropdown Menu', description: 'Lista compacta de ações perto do gatilho.', stories: '2', tests: '✓' },
          { component: 'Toast', description: 'Notificação temporária de sucesso ou erro.', stories: '1', tests: '—' },
        ],
      },
      summaryTitle: 'Resumo',
    },
    testing: {
      title: 'Testes e qualidade',
      intro:
        'Storybook é a fonte de verdade do design system. Além de documentar, ele valida interação, foco, conteúdo acessível e cobertura das stories críticas.',
      inThisDocument: 'Neste documento',
      toc: ['Pilares de qualidade', 'Cobertura por componente', 'Comandos de teste', 'Padrão de play function', 'Convenções de teste'],
      pillarsTitle: 'Pilares de qualidade',
      pillarsIntro: 'O sistema valida qualidade em três dimensões:',
      playFunctionsTitle: 'Play functions',
      playFunctionsBody:
        'Elas simulam foco, clique, digitação, abertura de overlays e mudanças de estado. Cada play function roda como teste automatizado do Storybook via addon-vitest.',
      a11yTitle: 'Acessibilidade (a11y)',
      a11yBody:
        'O addon-a11y integra axe-core para detectar regressões de acessibilidade em cada story. ARIA roles, foco, contraste e comportamento com leitores de tela são revisados continuamente.',
      coverageTitle: 'Cobertura',
      coverageBody:
        'A cobertura é gerada pelo addon do Vitest com base nas stories testadas. Cada componente interativo deve ter pelo menos uma play function cobrindo seu fluxo crítico.',
      componentCoverageTitle: 'Cobertura por componente',
      coverageColumns: ['Componente', 'Categoria', 'Stories', 'Play function', 'Status'],
      testCommandsTitle: 'Comandos de teste',
      playPatternTitle: 'Padrão de play function',
      conventionsTitle: 'Convenções de teste',
      conventions: [
        'Use queries com canvas dentro do limite da story.',
        'Use userEvent para simular interação real.',
        "Adicione tags: ['test'] no meta quando a story precisar rodar no CI.",
        'Sempre teste foco, clique e estados finais visíveis.',
        'Nomeie stories de interação com o sufixo Interaction.',
      ],
      coverageRows: [
        { component: 'Button', category: 'Ações', stories: '3', playFunction: '✓', status: 'testado' },
        { component: 'Input', category: 'Formulários', stories: '2', playFunction: '✓', status: 'testado' },
        { component: 'Select', category: 'Formulários', stories: '2', playFunction: '✓', status: 'testado' },
        { component: 'Textarea', category: 'Formulários', stories: '2', playFunction: '✓', status: 'testado' },
        { component: 'DatePicker', category: 'Formulários', stories: '2', playFunction: '✓', status: 'testado' },
        { component: 'Choice Controls', category: 'Formulários', stories: '2', playFunction: '✓', status: 'testado' },
        { component: 'Dialog & Drawer', category: 'Overlays', stories: '2', playFunction: '✓', status: 'testado' },
        { component: 'Tooltip/Dropdown/Toast', category: 'Overlays', stories: '2', playFunction: '✓', status: 'testado' },
        { component: 'Tabs & Accordion', category: 'Visualização de dados', stories: '2', playFunction: '✓', status: 'testado' },
        { component: 'Pagination', category: 'Navegação', stories: '2', playFunction: '✓', status: 'testado' },
        { component: 'Alert', category: 'Feedback', stories: '1', playFunction: '—', status: 'parcial' },
        { component: 'Table', category: 'Visualização de dados', stories: '1', playFunction: '—', status: 'planejado' },
        { component: 'Avatar', category: 'Visualização de dados', stories: '1', playFunction: '—', status: 'planejado' },
        { component: 'Badge & Tag', category: 'Visualização de dados', stories: '1', playFunction: '—', status: 'planejado' },
        { component: 'Card', category: 'Layout', stories: '1', playFunction: '—', status: 'planejado' },
        { component: 'Breadcrumb', category: 'Navegação', stories: '1', playFunction: '—', status: 'planejado' },
        { component: 'Empty/Loading/Skeleton', category: 'Feedback', stories: '1', playFunction: '—', status: 'planejado' },
        { component: 'Helpers', category: 'Formulários', stories: '1', playFunction: '—', status: 'planejado' },
      ],
      coverageStatus: {
        tested: 'Testado',
        partial: 'Parcial',
        planned: 'Planejado',
      },
      testCommandsCode: `# Run all component tests with play functions
npm run test-storybook

# Watch mode for iterative story development
npm run test-storybook:watch

# Generate coverage through the Vitest addon
npm run test-storybook:coverage`,
      playPatternCode: `export const Interaction: Story = {
  args: { children: 'Run action' },
  play: async ({ canvas, userEvent, args }) => {
    const button = canvas.getByRole('button', {
      name: 'Run action',
    })
    await userEvent.tab()
    await expect(button).toHaveFocus()
    await userEvent.click(button)
    await expect(args.onClick).toHaveBeenCalled()
  },
}`,
    },
    guidelines: {
      button: {
        purpose: 'Executar ações com hierarquia visual clara.',
        do: ['Use primary para a ação dominante.', 'Use estados de loading para feedback imediato.', 'Evite mais de uma ação primary no mesmo grupo.'],
        dont: ['Não use ações destrutivas sem risco real.', 'Não misture muitos tamanhos na mesma área de ações.'],
      },
      field: {
        purpose: 'Capturar dados com contexto, clareza e validação visível.',
        do: ['Agrupe campos relacionados por contexto.', 'Use helper text e mensagens de validação.', 'Mantenha labels explícitas e persistentes.'],
        dont: ['Não use apenas borda vermelha para comunicar erro.', 'Não use placeholder como label principal.'],
      },
      navigation: {
        purpose: 'Orientar usuários sobre a tarefa atual, o contexto e as próximas ações.',
        do: ['Mostre localização com breadcrumbs e headings.', 'Deixe o item ativo visualmente claro.', 'Separe ações globais dos itens de navegação.'],
        dont: ['Não crie navegação sem estado ativo.', 'Não misture ações primárias com links utilitários.'],
      },
    },
    brand: {
      principles: [
        'Dark-first com alto contraste e leitura confortável.',
        'Componentes previsíveis e compactos em contextos B2B e varejo.',
        'Uso moderado de cor para indicar hierarquia, feedback e estado.',
        'Documentação e APIs de componentes pensadas para designers e developers.',
      ],
      templates: [
        { title: 'Dashboard SaaS', description: 'Métricas, produtividade e gestão operacional.' },
        { title: 'Landing page', description: 'Aquisição com mensagem direta e CTA forte.' },
        { title: 'Institucional', description: 'Posicionamento, confiança e prova social.' },
        { title: 'Mobile-oriented', description: 'Fluxos densos com ergonomia e foco em ações primárias.' },
        { title: 'Software de varejo', description: 'Operação diária, catálogo e suporte ao ponto de venda.' },
      ],
    },
    componentDocs: {
      tocTitle: 'Sumário',
      tocItems: ['Quando usar', 'Variantes', 'Faça e Não faça', 'Uso', 'Props'],
      whenToUse: 'Quando usar',
      variants: 'Variantes',
      dos: 'Faça',
      donts: 'Não faça',
      usage: 'Uso',
      props: 'Props',
      variantColumn: 'Variante',
      purposeColumn: 'Propósito',
    },
    stories: {
      actions: {
        docsDescription: 'Botões comunicam prioridade, ação e risco. Use contraste, tamanho e posicionamento para expressar hierarquia sem ruído visual.',
        kicker: 'Components / Actions',
        title: 'Botões com hierarquia real',
        subtitle: 'Ações devem comunicar prioridade, contexto e segurança visual sem depender de cor excessiva ou decoração.',
        badge: 'Primary, secondary, icon e destructive',
        showcaseTitle: 'Action showcase',
        showcaseDescription: 'Estados principais exibidos em um preview mais próximo do uso real.',
        variants: 'Variantes',
        primaryAction: 'Ação principal',
        deleteItem: 'Excluir item',
        interactionAction: 'Executar ação',
        save: 'Salvar',
        secondary: 'Secundária',
        outline: 'Outline',
        ghost: 'Ghost',
        delete: 'Excluir',
        disabled: 'Desabilitado',
        contextualActions: 'Ações contextuais',
        addItem: 'Adicionar item',
        moreActions: 'Mais ações',
        compact: 'Compacto',
        largeAction: 'Ação grande',
        usageNote: 'Nota de uso',
        usageBody: 'Reserve primary para a ação dominante da área. Use secondary e ghost para ações de apoio e contexto.',
        quickRead: 'Leitura rápida',
        primaryLabel: 'Principal',
        secondaryOutlineLabel: 'Secundária / Outline',
        destructiveLabel: 'Destrutiva',
        primaryBody: 'Use para a ação principal da tela, modal ou bloco.',
        secondaryBody: 'Use para ações auxiliares que não devem competir pela atenção principal.',
        destructiveBody: 'Use somente para ações com risco real e contexto explícito.',
      },
      forms: {
        docsDescription: 'Campos, controles de seleção e wrappers de formulário do Vareo DS. Use labels explícitas, helper text curto e feedback contextual de validação.',
        kicker: 'Components / Forms',
        title: 'Campos com contexto, validação e estados reais',
        accountName: 'Nome da conta',
        accountNameDescription: 'Use o nome operacional exibido em tabelas, filtros e detalhes.',
        defaultInput: 'Input padrão',
        defaultInputPlaceholder: 'Workspace principal',
        defaultInputHelp: 'Labels continuam visíveis mesmo quando o campo está vazio.',
        datePicker: 'Seletor de data',
        datePickerHelp: 'Use para datas pontuais e previsíveis.',
        segment: 'Segmento',
        retail: 'Varejo',
        saas: 'SaaS',
        services: 'Serviços',
        readonly: 'Somente leitura',
        readonlyValue: 'Plano enterprise',
        readonlyHelp: 'Use quando o valor importa, mas não pode ser editado no contexto atual.',
        longContent: 'Conteúdo longo',
        longContentValue: 'Contexto operacional extenso, integrações com ERP, observações de rollout e dependências de negócio.',
        catalogSync: 'Ativar sincronização automática de catálogos durante a madrugada.',
        operationalAlerts: 'Alertas operacionais',
        operationalAlertsHelp: 'Feedback imediato para filas críticas.',
        radioGroup: 'Grupo de rádio',
        planOptions: [
          { value: 'starter', label: 'Starter' },
          { value: 'growth', label: 'Growth' },
          { value: 'enterprise', label: 'Enterprise' },
        ],
        saveChanges: 'Salvar alterações',
        saveDraft: 'Salvar rascunho',
        cancel: 'Cancelar',
        statesAndPractices: 'Estados e boas práticas',
        validationMessageLabel: 'Mensagem de validação',
        validationMessage: 'Revise o documento da empresa: formato inválido para cadastro fiscal.',
        successMessageLabel: 'Mensagem de sucesso',
        successMessage: 'Os dados foram validados e estão prontos para publicação.',
        errorLabel: 'Erro',
        successLabel: 'Sucesso',
        invalidIdentifier: 'Use um identificador válido com 14 dígitos.',
        successIdentifier: 'Documento validado com sucesso.',
      },
      navigation: {
        docsDescription: 'Header, top navigation, side navigation e footer ajudam a manter orientação, contexto e navegação previsível em produtos operacionais.',
        newAction: 'Nova ação',
        orders: 'Pedidos',
        settings: 'Configurações',
        dashboard: 'Dashboard',
        workspace: 'Workspace',
        core: 'Core',
        config: 'Config',
        operations: 'Operação',
        finance: 'Financeiro',
        permissions: 'Permissões',
        integrations: 'Integrações',
        pageHeader: 'Header de página',
        pageHeaderDescription: 'Use para combinar breadcrumb, contexto atual e ação dominante.',
        filter: 'Filtrar',
        export: 'Exportar',
        footer: 'O footer deve ser discreto, estável e útil para contexto institucional ou links de apoio.',
      },
      feedback: {
        docsDescription: 'Estados de sistema, overlays e feedback imediato. Cada padrão precisa comunicar risco, progresso ou contexto sem depender apenas de cor.',
        kicker: 'Components / Feedback & Overlays',
        title: 'Feedback perceptível e contextual',
        subtitle: 'Estados, overlays e comunicações rápidas devem orientar a próxima ação com clareza.',
        tagLabel: 'Feedback',
        maintenanceTitle: 'Janela de manutenção',
        maintenanceDescription: 'Dois tenants serão migrados às 02:00 com rollback disponível.',
        slaTitle: 'Fila sob atenção',
        slaDescription: 'Há 18 pedidos acima do SLA previsto. Reavalie a regra de expedição.',
        emptyTicketsTitle: 'Sem tickets em aberto',
        emptyTicketsDescription: 'Quando o estado for vazio, explique o contexto e a próxima ação possível.',
        emptyTicketsAction: 'Abrir novo ticket',
        guidelinesTitle: 'Guidelines',
        guidelinesBody: 'Sempre explique impacto, contexto e próximo passo. Estado visual sozinho não basta.',
        whenToUseModal: 'Quando usar modal',
        whenToUseModalBody: 'Use para decisões pontuais, confirmação e edição focada.',
        whenToUseDrawer: 'Quando usar drawer',
        whenToUseDrawerBody: 'Use quando a tarefa precisa manter o contexto da tela principal.',
        openDialog: 'Abrir diálogo',
        newConfigTitle: 'Nova configuração',
        newConfigDescription: 'Use modais para decisões curtas e concentradas.',
        confirm: 'Confirmar',
        cancel: 'Cancelar',
        openDrawer: 'Abrir gaveta',
        operationalSummaryTitle: 'Resumo operacional',
        operationalSummaryDescription: 'Use drawer quando o usuário precisar manter o contexto ao lado.',
        menu: 'Menu',
        viewQueue: 'Ver fila',
        triggerToast: 'Disparar toast',
        toastSuccess: 'Toast disparado com sucesso',
        tooltipBody: 'Feedback contextual e discreto.',
        tooltipTrigger: 'Tooltip',
        skeletonTitle: 'Skeleton',
        noServiceTitle: 'Nenhum serviço disponível',
        noServiceDescription: 'Explique o porquê do vazio e a próxima ação recomendada.',
        noServiceAction: 'Criar serviço',
        publishingTitle: 'Publicando componentes',
        publishingDescription: 'Atualize o usuário durante operações com duração perceptível.',
        deployStarted: 'Deploy iniciado',
        deployDescription: 'Os componentes estão sendo publicados agora.',
      },
      dataDisplay: {
        docsDescription: 'Padrões para dados, navegação contextual e leitura rápida. A prioridade é escaneabilidade, densidade equilibrada e clareza entre conteúdo primário e apoio.',
        kicker: 'Components / Data display',
        title: 'Dados, navegação e agrupamento contextual',
        designSystem: 'Design system',
        table: 'Tabela',
        people: 'Equipe',
        accordion: 'Acordeão',
        id: 'ID',
        account: 'Conta',
        status: 'Status',
        segment: 'Segmento',
        active: 'Ativo',
        inRollout: 'Em rollout',
        underReview: 'Em revisão',
        team: 'Time',
        squad: 'squad',
        squadDescription: 'Acompanhando rollout e consistência.',
        whenToUseTable: 'Quando usar tabela?',
        whenToUseTableBody: 'Para comparação densa, filtro recorrente e análise operacional.',
        whenToUseCards: 'Quando usar cards?',
        whenToUseCardsBody: 'Para resumos, agrupamentos e blocos com pouca variação estrutural.',
      },
      templates: {
        docsDescription: 'Padrões de página para login, dashboard, listagem, cadastro, detalhe, processo e estados de confirmação. Todos usam apenas componentes do Vareo DS.',
      },
      foundations: {
        docsDescription: 'Fundações visuais e tokens semânticos do Vareo DS. Toda decisão visual deve nascer desses contratos, não de valores isolados.',
        semanticPaletteTitle: 'Paleta semântica',
        semanticPaletteDescription: 'Os tokens são organizados para criar contraste claro entre canvas, superfícies e estados sem aumentar o ruído visual.',
        foundationScaleTitle: 'Escala e ritmo do sistema',
        foundationScaleDescription: 'As escalas sustentam densidade controlada, leitura confortável e consistência entre produto, docs e templates.',
        tokenArchitectureTitle: 'Arquitetura de tokens',
        tokenArchitectureDescription: 'A estrutura está pronta para evolução de tema, escala e consistência de longo prazo entre componentes e templates.',
        tokenUsage: {
          background: 'Canvas base do produto.',
          surface: 'Cards, painéis e regiões principais.',
          'surface-muted': 'Blocos secundários e agrupamentos internos.',
          foreground: 'Texto primário e títulos.',
          muted: 'Áreas neutras, placeholders e superfícies de apoio.',
          'muted-foreground': 'Texto secundário.',
          border: 'Separadores e contornos.',
          input: 'Contorno de campos e superfícies editáveis.',
          ring: 'Foco visível e destaque acessível.',
          primary: 'Ação dominante e principal destaque.',
          secondary: 'Ações de suporte e navegação secundária.',
          accent: 'Ênfase complementar.',
          success: 'Confirmação e estados positivos.',
          warning: 'Atenção moderada e risco controlado.',
          destructive: 'Erros e ações destrutivas.',
          info: 'Informação contextual.',
          disabled: 'Elementos indisponíveis.',
        },
      },
      button: {
        doc: {
          title: 'Botão',
          description: 'Botão comunica prioridade, ação e risco em interfaces onde a clareza importa, garantindo decisões explícitas.',
          whenToUse: [
            'Destaque a ação dominante que merece atenção imediata.',
            'Ofereça alternativas claras com secondary ou outline em grupos de ações.',
            'Evidencie status importantes (loading, confirmação destrutiva) para guiar as interações.',
          ],
          variants: [
            { variant: 'Primary', purpose: 'Chamado principal, alta prioridade para fechar fluxos.' },
            { variant: 'Secondary', purpose: 'Ação de suporte sem o mesmo peso.' },
            { variant: 'Outline', purpose: 'Ação leve dentro de toolbars densas.' },
            { variant: 'Ghost', purpose: 'Ação transparente para interações sutis.' },
            { variant: 'Destructive', purpose: 'Alertas para ações com risco real, como exclusão.' },
            { variant: 'Icon (IconButton)', purpose: 'Gatilho compacto para ações com ícone único.' },
          ],
          dos: [
            'Use primary para a ação dominante de cada bloco.',
            'Mostre o estado de loading imediatamente quando a ação estiver em processamento.',
            'Combine tamanhos de forma consistente; alinhe com a hierarquia textual.',
          ],
          donts: [
            'Não use estilos destrutivos sem risco real.',
            'Não misture vários tamanhos na mesma linha de ações para evitar ruído visual.',
          ],
          usageCode: `<Button variant="primary" size="md" loading>
  Confirmar
</Button>`,
        },
      },
      alert: {
        docsDescription: 'Alert renderizado sozinho, com variant e conteúdo controlados pelo painel.',
        doc: {
          title: 'Alerta',
          description: 'Alert exibe mensagens contextuais que chamam atenção para risco, progresso ou informações importantes de forma consistente.',
          whenToUse: [
            'Quando for preciso destacar um aviso, sucesso ou nota informativa na tela atual.',
            'Quando a orientação contextual deve permanecer até o usuário agir ou dispensar o alerta.',
            'Quando uma mensagem curta precisa de hierarquia via `AlertTitle` e `AlertDescription`.',
          ],
          variants: [
            { variant: 'default', purpose: 'Tom neutro para orientações gerais e avisos leves.' },
            { variant: 'info', purpose: 'Ênfase sutil para atualizações informativas ou estados do sistema.' },
            { variant: 'success', purpose: 'Feedback afirmativo após ações bem-sucedidas.' },
            { variant: 'destructive', purpose: 'Chama atenção para erros, falhas ou problemas urgentes.' },
          ],
          dos: [
            'Use `AlertTitle` para manter o cabeçalho escaneável e `AlertDescription` para os detalhes.',
            'Combine o tom (`info`, `success`, `destructive`) com o estado real para evitar confusão.',
          ],
          donts: [
            'Não esconda alertas de falhas atrás de outros componentes.',
            'Não misture tons conflitantes no mesmo alerta (por exemplo, texto `destructive` com estilo `success`).',
          ],
          usageCode: `<Alert variant="success">
  <AlertTitle>Pagamento capturado</AlertTitle>
  <AlertDescription>O cartão do usuário foi cobrado e o recibo enviado por e-mail.</AlertDescription>
</Alert>`,
        },
      },
      skeleton: {
        doc: {
          title: 'Skeleton',
          description: 'Skeleton sugere o layout final antes que o conteúdo real esteja pronto.',
          whenToUse: ['Use para reduzir saltos de layout durante o carregamento.'],
          variants: [{ variant: 'Default', purpose: 'Bloco de espaço reservado neutro.' }],
          dos: ['Combine a forma do skeleton com o layout esperado.'],
          donts: ['Não combine skeleton com conteúdo final já carregado no mesmo slot.'],
          usageCode: '<Skeleton className="h-10 w-full" />',
        },
      },
      'loading-state': {
        docsDescription: 'Loading State informa que o sistema ainda está processando ou buscando dados.',
        doc: {
          title: 'Loading State',
          description: 'Loading State tranquiliza os usuários enquanto o trabalho ainda está em andamento.',
          whenToUse: ['Use quando o trabalho assíncrono está em andamento e a página precisa de um estado de espera claro.'],
          variants: [{ variant: 'Default', purpose: 'Mensagem curta de carregamento com spinner.' }],
          dos: ['Mantenha a mensagem calma e breve.'],
          donts: ['Não sugira falha enquanto o conteúdo ainda está carregando.'],
          usageCode: '<LoadingState description="Buscando dashboard..." />',
        },
      },
      'empty-state': {
        docsDescription: 'Empty State orienta a próxima ação quando ainda não há conteúdo.',
        doc: {
          title: 'Empty State',
          description: 'Empty State explica a ausência e sugere a próxima ação útil.',
          whenToUse: ['Use quando os dados estão ausentes, mas a interface permanece saudável.'],
          variants: [{ variant: 'Default', purpose: 'Explica por que a página está vazia e o que fazer a seguir.' }],
          dos: ['Ofereça uma próxima ação clara.'],
          donts: ['Não deixe a área em branco sem contexto.'],
          usageCode: '<EmptyState title="Nenhum pedido ainda" actionLabel="Criar pedido" />',
        },
      },
      toast: {
        docsDescription: 'Toast comunica resultados temporários sem interromper o fluxo.',
        doc: {
          title: 'Toast',
          description: 'Toast confirma resultados brevemente sem bloquear a interface.',
          whenToUse: ['Use para feedback leve de sucesso ou erro após uma ação.'],
          variants: [
            { variant: 'Success', purpose: 'Confirma a conclusão.' },
            { variant: 'Error', purpose: 'Sinaliza um resultado com falha.' },
          ],
          dos: ['Mantenha a mensagem concisa.'],
          donts: ['Não coloque instruções longas dentro de um toast.'],
          usageCode: "toast.success('Salvo com sucesso')",
        },
      },
      'dropdown-menu': {
        docsDescription: 'Dropdown menu reúne ações compactas próximas ao gatilho.',
        doc: {
          title: 'Dropdown Menu',
          description: 'Dropdown Menu expõe ações secundárias sem aumentar o ruído do layout.',
          whenToUse: ['Use para ações contextuais compactas.'],
          variants: [{ variant: 'Default', purpose: 'Abre uma lista de ações perto do gatilho.' }],
          dos: ['Mantenha os rótulos orientados a tarefas e fáceis de escanear.'],
          donts: ['Não esconda a ação primária apenas dentro de um dropdown.'],
          usageCode: `<DropdownMenu>
  <DropdownMenuTrigger>Ações</DropdownMenuTrigger>
</DropdownMenu>`,
        },
      },
      tooltip: {
        docsDescription: 'Tooltip explica affordances rapidamente em hover ou foco.',
        doc: {
          title: 'Tooltip',
          description: 'Tooltip fornece ajuda contextual curta perto do gatilho.',
          whenToUse: ['Use para esclarecimentos breves que não devem ocupar espaço no layout.'],
          variants: [{ variant: 'Default', purpose: 'Dica contextual de hover/foco.' }],
          dos: ['Mantenha o conteúdo breve.'],
          donts: ['Não coloque instruções essenciais apenas dentro do tooltip.'],
          usageCode: '<TooltipContent>Ajuda contextual</TooltipContent>',
        },
      },
      sheet: {
        docsDescription: 'Sheet expõe contexto lateral sem remover totalmente a tela base.',
        doc: {
          title: 'Sheet',
          description: 'Sheet revela detalhes suplementares enquanto mantém o contexto principal visível.',
          whenToUse: ['Use quando os usuários ainda precisam do contexto da página subjacente.'],
          variants: [{ variant: 'Right sheet', purpose: 'Painel de tarefa ou detalhe suplementar.' }],
          dos: ['Mantenha o conteúdo orientado a tarefas e contextual.'],
          donts: ['Não use sheet quando o isolamento total do modal for necessário.'],
          usageCode: `<Sheet>
  <SheetTrigger>Abrir detalhes</SheetTrigger>
</Sheet>`,
        },
      },
      dialog: {
        docsDescription: 'Dialog protege foco e prioriza decisões pontuais.',
        doc: {
          title: 'Dialog',
          description: 'Dialog cria uma camada focada para decisões de alta prioridade.',
          whenToUse: ['Use quando os usuários devem confirmar ou revisar uma tarefa focada.'],
          variants: [{ variant: 'Default', purpose: 'Camada de decisão modal com foco retido.' }],
          dos: ['Mantenha o título, a descrição e as ações explícitos.'],
          donts: ['Não use dialog para informações passivas de baixa prioridade.'],
          usageCode: `<Dialog>
  <DialogTrigger>Excluir</DialogTrigger>
</Dialog>`,
        },
      },
      accordion: {
        docsDescription: 'Accordion revela conteúdo progressivamente em listas verticais.',
        doc: {
          title: 'Accordion',
          description: 'Accordion expande e recolhe o conteúdo progressivamente dentro de um fluxo vertical.',
          whenToUse: ['Use para detalhes opcionais e divulgação progressiva.'],
          variants: [{ variant: 'Single', purpose: 'Abre um item por vez.' }],
          dos: ['Use rótulos de gatilho claros.'],
          donts: ['Não esconda conteúdo primário essencial por padrão.'],
          usageCode: '<Accordion type="single" collapsible />',
        },
      },
      tabs: {
        docsDescription: 'Tabs organizam painéis equivalentes com troca visível de contexto.',
        doc: {
          title: 'Tabs',
          description: 'Tabs alternam entre painéis relacionados sem sair da página atual.',
          whenToUse: ['Use para seções equivalentes com a mesma hierarquia.'],
          variants: [{ variant: 'Default', purpose: 'Alterna o conteúdo do painel visível.' }],
          dos: ['Mantenha os rótulos curtos e paralelos.'],
          donts: ['Não sobrecarregue um único grupo de abas com muitos destinos.'],
          usageCode: '<Tabs defaultValue="overview" />',
        },
      },
      tag: {
        docsDescription: 'Tag representa atributos ou filtros compactos, com opção de remoção visual.',
        doc: {
          title: 'Tag',
          description: 'Tag agrupa pequenos atributos e filtros removíveis em um formato de chip compacto.',
          whenToUse: ['Use para categorias, filtros selecionados ou rótulos compactos.'],
          variants: [
            { variant: 'Default', purpose: 'Rótulo de chip padrão.' },
            { variant: 'Removable', purpose: 'Exibe recurso de remoção.' },
          ],
          dos: ['Use tags removíveis quando os usuários puderem limpar um filtro.'],
          donts: ['Não sobrecarregue as tags com conteúdo de frase completa.'],
          usageCode: '<Tag removable>Release 1.2</Tag>',
        },
      },
      badge: {
        docsDescription: 'Badge destaca status ou metadados curtos em interfaces densas.',
        primaryLabel: 'Principal',
        doc: {
          title: 'Badge',
          description: 'Badge exibe status curto e metadados em interfaces densas.',
          whenToUse: ['Use para marcar status, categoria ou metadados compactos.'],
          variants: [
            { variant: 'Primary', purpose: 'Status principal destacado.' },
            { variant: 'Secondary', purpose: 'Metadados de menor ênfase.' },
            { variant: 'Success', purpose: 'Estado positivo.' },
            { variant: 'Warning', purpose: 'Estado de cautela.' },
            { variant: 'Destructive', purpose: 'Estado crítico.' },
          ],
          dos: ['Mantenha os rótulos dos badges curtos.'],
          donts: ['Não use badge para frases longas.'],
          usageCode: '<Badge variant="success">Sincronizado</Badge>',
        },
      },
      separator: {
        docsDescription: 'Separator organiza blocos longos de conteúdo ou formulário.',
        doc: {
          title: 'Separator',
          description: 'Separator introduz ritmo visual entre seções relacionadas.',
          whenToUse: ['Use para quebrar formulários longos ou informações agrupadas.'],
          variants: [{ variant: 'Horizontal', purpose: 'Separa seções empilhadas.' }],
          dos: ['Use quando o espaçamento sozinho não for suficiente.'],
          donts: ['Não empilhe muitos separadores próximos uns dos outros.'],
          usageCode: '<Separator />',
        },
      },
      'validation-message': {
        docsDescription: 'Validation message comunica erro ou sucesso próximo ao campo.',
        doc: {
          title: 'Validation Message',
          description: 'Validation Message esclarece o sucesso ou erro diretamente onde o usuário precisa.',
          whenToUse: ['Use após feedback de validação ou envio.'],
          variants: [
            { variant: 'Error', purpose: 'Explica o que deve ser corrigido.' },
            { variant: 'Success', purpose: 'Confirma o estado válido.' },
          ],
          dos: ['Coloque-o perto do controle afetado.'],
          donts: ['Não mostre feedback de validação muito cedo.'],
          usageCode: '<ValidationMessage tone="error">Email inválido</ValidationMessage>',
        },
      },
      'helper-text': {
        docsDescription: 'Helper text adiciona contexto útil abaixo do campo.',
        doc: {
          title: 'Helper Text',
          description: 'Helper Text fornece instruções de suporte sem sobrecarregar o campo.',
          whenToUse: ['Use para restrições ou orientações não óbvias.'],
          variants: [{ variant: 'Default', purpose: 'Texto instrucional secundário.' }],
          dos: ['Mantenha o texto de ajuda conciso e prático.'],
          donts: ['Não repita o rótulo ou o placeholder.'],
          usageCode: '<HelperText>Use um nome de empresa voltado para o público.</HelperText>',
        },
      },
      label: {
        docsDescription: 'Label define o nome do campo de forma semântica e consistente.',
        doc: {
          title: 'Label',
          description: 'Label nomeia um campo claramente e ancora o significado do formulário.',
          whenToUse: ['Use em cada controle de formulário que exija um nome explícito.'],
          variants: [{ variant: 'Default', purpose: 'Rótulo de campo padrão.' }],
          dos: ['Mantenha os rótulos concisos e descritivos.'],
          donts: ['Não dependa apenas do placeholder como rótulo.'],
          usageCode: '<Label htmlFor="email">Email</Label>',
        },
      },
      switch: {
        docsDescription: 'Switch para toggles on/off imediatos.',
        doc: {
          title: 'Switch',
          description: 'Switch comunica um estado ligado/desligado imediato para uma única configuração.',
          whenToUse: [
            'Use para uma preferência binária que pode ser alterada instantaneamente.',
            'Use quando o estado atual deve permanecer visível o tempo todo.',
          ],
          variants: [
            { variant: 'Default', purpose: 'Alternância padrão ligada/desligada.' },
            { variant: 'Disabled', purpose: 'Impede a interação enquanto preserva o contexto.' },
          ],
          dos: ['Combine com um rótulo claro próximo.', 'Use para mudanças de estado imediatas.'],
          donts: ['Não use switch para configurações acionadas por envio.'],
          usageCode: '<Switch aria-label="Ativar alertas" defaultChecked />',
        },
      },
      'radio-group': {
        docsDescription: 'Radio group para escolhas mutuamente exclusivas.',
        doc: {
          title: 'Radio Group',
          description: 'Radio Group suporta uma única escolha dentro de um conjunto definido de opções.',
          whenToUse: [
            'Use quando exatamente uma opção deve permanecer selecionada.',
            'Use para planos, modos ou filtros mutuamente exclusivos.',
          ],
          variants: [{ variant: 'Default', purpose: 'Seleção única entre pares.' }],
          dos: ['Mantenha todas as opções visíveis juntas.', 'Ordene as escolhas logicamente.'],
          donts: ['Não use radio group para comportamento de múltipla seleção.'],
          usageCode: '<RadioGroup defaultValue="growth" />',
        },
      },
      checkbox: {
        docsDescription: 'Checkbox para seleção múltipla e confirmação explícita.',
        doc: {
          title: 'Checkbox',
          description: 'Checkbox suporta seleção múltipla e estados de aceitação explícitos.',
          whenToUse: [
            'Use quando os usuários podem selecionar zero, uma ou muitas opções.',
            'Use para consentimento explícito ou configurações opcionais.',
          ],
          variants: [
            { variant: 'Default', purpose: 'Seleção binária padrão.' },
            { variant: 'Disabled', purpose: 'Mostra seleção indisponível.' },
          ],
          dos: ['Mantenha os rótulos curtos e específicos.', 'Use checkbox apenas para escolhas independentes.'],
          donts: ['Não use checkbox quando apenas uma opção puder ser escolhida.'],
          usageCode: '<Checkbox aria-label="Ativar relatórios" defaultChecked />',
        },
      },
      pagination: {
        docsDescription: 'Paginação renderizada sozinha, com página ativa controlável.',
        doc: {
          title: 'Pagination',
          description: 'Pagination mantém as listagens gerenciáveis quando os dados fluem além de uma única viewport e mantém o ritmo do usuário em listagens extensas.',
          whenToUse: [
            'Quando a navegação na página precisa mostrar claramente a posição para grandes conjuntos de dados.',
            'Quando uma sensação de progresso pelas páginas melhora a confiança e evita a perda de contexto.',
            'Quando você pode mostrar tanto os recursos anterior/próximo quanto os links diretos da página sem aglomeração.',
          ],
          variants: [
            { variant: 'Pagination', purpose: 'Raiz que define a região de navegação.' },
            { variant: 'PaginationContent', purpose: 'Wrapper estrutural mantendo o espaçamento consistente.' },
            { variant: 'PaginationItem', purpose: 'Item numérico ou de controle, acessível e focalizável.' },
            { variant: 'PaginationLink', purpose: 'Link real que recebe `isActive` para destacar a página atual.' },
            { variant: 'PaginationPrevious', purpose: 'Link para a página anterior, desativado no início.' },
            { variant: 'PaginationNext', purpose: 'Link para a próxima página, desativado no final.' },
            { variant: 'PaginationEllipsis', purpose: 'Espaço reservado quando as páginas colapsam para economizar espaço.' },
          ],
          dos: [
            'Destaque a página atual com `isActive` para que ela seja lida como um marcador de progresso.',
            'Forneça reticências quando houver muitas páginas para evitar aglomeração.',
          ],
          donts: [
            'Não dependa da paginação quando a rolagem infinita já se adequar ao ritmo dos dados.',
            'Não substitua a navegação por pontos, a menos que eles também suportem o foco do teclado.',
          ],
          usageCode: `<Pagination>
  <PaginationPrevious href="/reports?page=1">Anterior</PaginationPrevious>
  <PaginationItem>
    <PaginationLink href="/reports?page=1">1</PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="/reports?page=2" isActive>
      2
    </PaginationLink>
  </PaginationItem>
  <PaginationNext href="/reports?page=3">Próximo</PaginationNext>
</Pagination>`,
        },
      },
      breadcrumb: {
        docsDescription: 'Breadcrumb aparece isolado com labels configuráveis via args.',
        doc: {
          title: 'Breadcrumb',
          description: 'Breadcrumb mostra a localização atual e reduz a ambiguidade em fluxos profundos, garantindo clareza e ritmo mesmo quando o usuário avança em camadas.',
          whenToUse: [
            'Quando um caminho aninhado deve ser exibido com uma trilha e título claros.',
            'Quando você precisa emparelhar o caminho de navegação com ações globais separadas visualmente.',
            'Quando o item ativo deve parecer distinto para evitar navegação acidental.',
          ],
          variants: [
            { variant: 'Breadcrumb', purpose: 'Wrapper que agrupa toda a trilha e mantém a semântica clara.' },
            { variant: 'BreadcrumbList', purpose: 'Container de layout para etapas ordenadas com semântica de lista.' },
            { variant: 'BreadcrumbItem', purpose: 'Cada etapa, opcionalmente vinculada e separada para sugerir profundidade.' },
            { variant: 'BreadcrumbLink', purpose: 'Etapa interativa que leva a telas e seções ancestrais.' },
            { variant: 'BreadcrumbSeparator', purpose: 'Marcador de orientação decorativo entre as etapas para o ritmo.' },
            { variant: 'BreadcrumbPage', purpose: 'Item atual, não interativo, que ancora o contexto.' },
          ],
          dos: [
            'Mantenha o último item como texto simples para sinalizar a tela atual.',
            'Emparelhe a trilha com um título para que os usuários leiam a localização e a intenção juntos.',
          ],
          donts: [
            'Não sobrecarregue o breadcrumb com ações ou controles não relacionados.',
            'Não omita separadores quando existirem múltiplos níveis.',
          ],
          usageCode: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink href="/apps">Apps</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbPage>Configurações</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
        },
      },
      card: {
        docsDescription: 'Card base renderizado sozinho no canvas, com conteúdo controlado por args.',
        doc: {
          title: 'Card',
          description: 'Base estrutural para blocos de contexto, agrupamento e leitura rápida em dashboards.',
          whenToUse: [
            'Agrupe dados ou controles relacionados dentro de um painel claro.',
            'Sirva como pontos de ancoragem em dashboards e configurações com foco em insights rápidos.',
            'Destaque resumos mantendo o alinhamento com o sistema visual.',
          ],
          variants: [
            { variant: 'Card', purpose: 'Container de superfície com preenchimento e fundo neutro.' },
            { variant: 'CardHeader', purpose: 'Seção superior para títulos ou chamada para ação.' },
            { variant: 'CardTitle', purpose: 'Título grande que resume o bloco.' },
            { variant: 'CardDescription', purpose: 'Texto de suporte com contexto adicional ao título.' },
            { variant: 'CardContent', purpose: 'Corpo onde os principais elementos são renderizados.' },
            { variant: 'CardFooter', purpose: 'Área inferior para ações secundárias ou metadados densos.' },
          ],
          dos: [
            'Mantenha os cards previsíveis em altura e espaçamento.',
            'Use cabeçalho e rodapé para manter uma hierarquia clara.',
            'Aplique divisores sutis ou sobreposições de fundo quando vários cards se alinham.',
          ],
          donts: [
            'Não sobrecarregue um card com múltiplos CTAs conflitantes visualmente.',
            'Evite conteúdo não alinhado que quebre a grade visual.',
            'Não aninhe cards desnecessariamente; preferira o empilhamento simples.',
          ],
          usageCode: `<Card>
  <CardHeader>
    <CardTitle>Dashboard</CardTitle>
    <CardDescription>Resumos do mês atual</CardDescription>
  </CardHeader>
  <CardContent>Métricas aqui...</CardContent>
  <CardFooter>
    <Button variant="ghost">Ver detalhes</Button>
  </CardFooter>
</Card>`,
        },
      },
      avatar: {
        docsDescription: 'Avatar isolado com fallback e imagem configuráveis via args.',
        alt: 'Avatar da Vareo',
        fallback: 'VT',
        doc: {
          title: 'Avatar',
          description: 'Identificadores visuais curtos para usuários e squads, mantendo o contexto e a propriedade em interfaces densas.',
          whenToUse: [
            'Mostre a propriedade de uma tarefa, ticket ou nota com um rosto reconhecível.',
            'Emparelhe com metadados contextuais para transmitir responsabilidade rapidamente.',
            'Exiba iniciais de fallback quando a imagem não estiver disponível.',
          ],
          variants: [
            { variant: 'Avatar', purpose: 'Moldura circular que escala via className personalizada para o layout.' },
            { variant: 'AvatarFallback', purpose: 'Renderiza iniciais ou ícone quando a imagem falha ao carregar.' },
            { variant: 'AvatarImage', purpose: 'Carrega foto remota com comportamento de fallback automaticamente.' },
          ],
          dos: [
            'Forneça texto `alt` significativo ao usar AvatarImage.',
            'Mantenha os tamanhos consistentes com os tokens de espaçamento da interface.',
            'Use letras de fallback pensadamente para manter o reconhecimento.',
          ],
          donts: [
            'Não dependa apenas de avatares para comunicar status; adicione rótulos.',
            'Evite esticar a área da imagem; combine a proporção com o layout.',
            'Não misture iniciais e ícones no mesmo slot sem motivo.',
          ],
          usageCode: `<Avatar className="w-10 h-10">
  <AvatarImage src="/photos/ana.jpg" alt="Ana Souza" />
  <AvatarFallback>AS</AvatarFallback>
</Avatar>`,
        },
      },
      table: {
        docsDescription: 'Tabela renderizada sozinha com dataset mínimo e escaneável.',
        doc: {
          title: 'Table',
          description: 'Superfície de comparação densa para dados operacionais e análises rápidas.',
          whenToUse: [
            'Mostre tarefas analíticas recorrentes ou KPIs lado a lado.',
            'Renderize listagens operacionais onde as linhas correspondem a registros concretos.',
            'Compare métricas com layout denso e indicadores visuais.',
          ],
          variants: [
            { variant: 'Table', purpose: 'Container base para linhas e colunas com tratamento de overflow.' },
            { variant: 'TableHeader', purpose: 'Envolve o cabeçalho para denotar nomes de colunas.' },
            { variant: 'TableBody', purpose: 'Agrupa linhas de dados reais.' },
            { variant: 'TableRow', purpose: 'Representa uma linha única, destacando o estado se necessário.' },
            { variant: 'TableHead', purpose: 'Célula para títulos com ênfase e alinhamento.' },
            { variant: 'TableCell', purpose: 'Célula de corpo usada para conteúdo textual ou numérico.' },
          ],
          dos: [
            'Alinhe valores numéricos consistentemente para facilitar a leitura.',
            'Use rótulos de cabeçalho que descrevam claramente a métrica.',
            'Limite a densidade das linhas quando os dados se tornarem difíceis de distinguir.',
          ],
          donts: [
            'Não dependa apenas da cor para o significado; adicione ícones ou texto.',
            'Evite usar tabelas para conteúdo de narrativa; prefira cards ou listas.',
            'Não sobrecarregue cada linha com colunas demais sem justificativa.',
          ],
          usageCode: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Time</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Growth</TableCell>
      <TableCell>Operacional</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
        },
      },
      'date-picker': {
        docsDescription: 'Entrada de data discreta para filtros, agendamento e marcos operacionais.',
        doc: {
          title: 'DatePicker',
          description: 'DatePicker expõe uma entrada de data discreta para filtros, agendamento e marcos operacionais com comportamentos nativos e suporte a aria-invalid.',
          whenToUse: [
            'Defina datas precisas para filtros, entregas e compromissos.',
            'Bloqueie a entrada para somente leitura quando a data não deve mudar.',
            'Sinalize erros com aria-invalid quando a validação falhar.',
          ],
          variants: [
            { variant: 'Default', purpose: 'Campo de data editável com seletor de calendário.' },
            { variant: 'Readonly', purpose: 'Exibe a data sem permitir edições.' },
            { variant: 'Error', purpose: 'Comunica intervalo inválido ou valor ausente.' },
          ],
          dos: [
            'Use o recurso nativo de seletor de data para consistência.',
            'Forneça texto de ajuda quando os intervalos de datas forem importantes.',
            'Respeite o modo somente leitura quando os dados devem ser preservados.',
          ],
          donts: [
            'Não substitua o controle nativo por uma roda de data personalizada desnecessariamente.',
            'Evite permitir formatos inconsistentes mantendo a entrada nativa.',
          ],
          usageCode: '<DatePicker label="Entrega" aria-invalid={isInvalid} />',
        },
      },
      textarea: {
        docsDescription: 'Textarea para conteúdo livre. O canvas mostra apenas o campo com controls básicos.',
        doc: {
          title: 'Textarea',
          description: 'Textarea é projetado para texto longo, comentários operacionais e campos de conteúdo livre, oferecendo controle de redimensionamento para conforto.',
          whenToUse: [
            'Colete descrições extensas, notas de operação ou feedback.',
            'Permita que os usuários redimensionem quando for necessário mais espaço.',
            'Valide o conteúdo e mostre mensagens perto da área de texto.',
          ],
          variants: [
            { variant: 'Default', purpose: 'Modo normal de edição de várias linhas.' },
            { variant: 'Placeholder', purpose: 'Dica para o conteúdo esperado.' },
            { variant: 'Validation', purpose: 'Sinaliza erros com indicação visual.' },
          ],
          dos: [
            'Forneça contexto via placeholder e texto de ajuda.',
            'Permita o redimensionamento natural para acomodar mais texto.',
            'Exiba lições de validação com mensagens claras.',
          ],
          donts: [
            'Não dependa de um campo de linha única quando o conteúdo for verboso.',
            'Evite desativar o redimensionamento, a menos que seja necessário para o controle do layout.',
          ],
          usageCode: '<Textarea label="Observações" placeholder="Descreva o caso detalhadamente" />',
        },
      },
      select: {
        docsDescription: 'Select com trigger e lista compacta. O canvas isola o controle com args previsíveis.',
        doc: {
          title: 'Select',
          description: 'Select orquestra escolhas controladas com foco acessível, composto por gatilho, valor, conteúdo e itens para manter as interações consistentes.',
          whenToUse: [
            'Deixe os usuários escolherem uma única opção de uma lista predefinida.',
            'Exiba estados de foco e garanta que a navegação pelo teclado permaneça previsível.',
            'Sinalize erros com aria-invalid quando a seleção for obrigatória.',
          ],
          variants: [
            { variant: 'SelectTrigger', purpose: 'Abre a região do dropdown.' },
            { variant: 'SelectValue', purpose: 'Exibe a opção escolhida.' },
            { variant: 'SelectContent', purpose: 'Envolve a lista de SelectItem.' },
            { variant: 'SelectItem', purpose: 'Representa cada opção com feedback de foco.' },
          ],
          dos: [
            'Mantenha o Select controlado e sincronize o valor com o estado do formulário.',
            'Preserve uma ordem de foco consistente para acessibilidade.',
            'Aplique aria-invalid para comunicar erros.',
          ],
          donts: [
            'Evite misturar vários padrões de seleção na mesma linha.',
            'Não esconda o estado selecionado; sempre mostre o valor atual.',
          ],
          usageCode: `<Select aria-invalid={hasError}>
  <SelectTrigger />
  <SelectContent>
    <SelectItem value="1">Opção 1</SelectItem>
  </SelectContent>
</Select>`,
        },
      },
      input: {
        docsDescription: 'Input é o campo de texto base para busca, cadastro e filtros, sempre acompanhado de um label visível para acessibilidade.',
        defaultPlaceholder: 'Nome do workspace',
        defaultAriaLabel: 'Nome do workspace',
        searchPlaceholder: 'Buscar',
        searchAriaLabel: 'Campo de busca',
        doc: {
          title: 'Input',
          description: 'Input é o campo de texto base para busca, registro e filtros, sempre emparelhado com um rótulo visível para acessibilidade.',
          whenToUse: [
            'Capture texto de linha única, como nomes, e-mails ou termos de busca.',
            'Combine com texto de ajuda e mensagens de validação para clareza.',
            'Reforce o contexto agrupando campos com rótulos relacionados.',
          ],
          variants: [
            { variant: 'Default', purpose: 'Estado editável padrão para entrada do usuário.' },
            { variant: 'Readonly', purpose: 'Exibe dados sem permitir edições.' },
            { variant: 'Disabled', purpose: 'Indica que uma ação não está disponível.' },
            { variant: 'Invalid', purpose: 'Destaca erros via estado inválido e mensagens.' },
          ],
          dos: [
            'Sempre use rótulos visíveis para descrever cada campo.',
            'Agrupe campos relacionados por contexto, alinhando verticalmente se necessário.',
            'Forneça texto de ajuda e mensagens de validação perto do input.',
          ],
          donts: [
            'Não esconda o rótulo nem dependa apenas do texto do placeholder.',
            'Não sobrecarregue um único input com responsabilidades demais.',
          ],
          usageCode: '<Input label="Nome" helperText="Use o nome completo" />',
        },
      },
    },
  },
} as const
