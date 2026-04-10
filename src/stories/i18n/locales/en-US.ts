export const enUS = {
  meta: {
    localeLabel: 'Locale',
    localeEnglish: 'English',
    localePortuguese: 'Portuguese (Brazil)',
    themeLabel: 'Theme',
    themeDescription: 'Theme mode for components',
    themeDark: 'Dark',
    themeLight: 'Light',
  },
  ui: {
    componentDocumentation: 'Component documentation',
    preview: 'Preview',
    guidelines: 'Guidelines',
    overview: 'Overview',
    doLabel: 'Do',
    dontLabel: "Don't",
    antiPatterns: 'Anti-patterns',
    scaleLabel: 'Scale',
    foundationsLabel: 'Foundations',
    typographySample: 'The quick brown fox jumps over the lazy dog',
    pxLabel: 'px',
  },
  docs: {
    overview: {
      title: 'Vareo design system',
      intro:
        'Vareo DS is a dark-first, modular design system built to accelerate internal product development while preserving visual and operational consistency.',
      inThisDocument: 'In this document',
      toc: ['What this system solves', 'Principles', 'V1 layers', 'Responsiveness and accessibility', 'Best practices'],
      solvesTitle: 'What this system solves',
      solvesIntro: 'Vareo DS addresses three recurring needs across product teams:',
      solvesItems: [
        'Consistency across contexts. The same visual language works across dashboards, institutional pages, marketing surfaces, and mobile flows without feeling fragmented.',
        'Speed with maintainable foundations. Predictable components, semantic tokens, and centralized visual rules improve delivery speed without increasing design debt.',
        'A shared product contract. Designers, engineers, and product managers align around the same language through tokens, variants, and stories as living documentation.',
      ],
      principlesTitle: 'Principles',
      principlesIntro: 'These four rules keep the system coherent:',
      layersTitle: 'V1 layers',
      layersIntro: 'The system is organized into three layers:',
      layers: [
        { name: 'Foundations', description: 'Typography, spacing, radius, shadows, focus, states, and restrained motion.' },
        { name: 'Components', description: 'Reusable primitives with consistent variants for product and marketing.' },
        { name: 'Templates', description: 'Real examples that validate the system in vareo.tech scenarios.' },
      ],
      sidebarNote: 'Use the Storybook sidebar to explore each layer.',
      layerTableColumns: ['Layer', 'Description'],
      responsivenessTitle: 'Responsiveness and accessibility',
      responsivenessLabel: 'Responsiveness',
      responsivenessItems: [
        'Mobile-first decisions with semantic breakpoints.',
        'A 12-column grid for predictable composition.',
        'Vertical rhythm based on consistent spacing.',
      ],
      accessibilityLabel: 'Accessibility',
      accessibilityItems: [
        'Visible focus states with a semantic ring.',
        'Clear contrast for text and actions.',
        'A foundation built on accessible primitives (Radix UI).',
      ],
      bestPracticesTitle: 'Best practices',
    },
    components: {
      title: 'Component catalog',
      intro:
        'Every component in Vareo DS acts as a product contract: purpose, anatomy, states, interaction, correct usage, and anti-patterns. Use the sidebar to navigate directly to a component or browse the categories below.',
      summary:
        'The Vareo DS catalog points to individual component entries, each with its own prose docs page and isolated stories for canvas, controls, and interactions.',
      inThisDocument: 'In this document',
      toc: ['Page structure', 'Forms', 'Data display', 'Layout', 'Navigation', 'Feedback', 'Overlays'],
      pageStructureTitle: 'Page structure',
      pageStructureItems: [
        'Docs tab — when to use, variants, do and don’t guidance, usage examples, and props reference.',
        'Overview story — visual anatomy with live components.',
        'Interaction stories — play functions for focus, click, typing, and overlays.',
        'Accessibility — automated checks for violations in test runs.',
      ],
      categories: {
        forms: 'Forms',
        dataDisplay: 'Data display',
        layout: 'Layout',
        navigation: 'Navigation',
        feedback: 'Feedback',
        overlays: 'Overlays',
      },
      tableColumns: ['Component', 'Description', 'Stories', 'Tests'],
      componentRows: {
        forms: [
          { component: 'Button', description: 'Communicates priority, action, and risk.', stories: '5', tests: '✓' },
          { component: 'Input', description: 'Base text field for search, registration, and filters.', stories: '3', tests: '✓' },
          { component: 'Select', description: 'Controlled choice with compact content and clear reading.', stories: '3', tests: '✓' },
          { component: 'Textarea', description: 'Long text field with resize and validation support.', stories: '3', tests: '✓' },
          { component: 'Date Picker', description: 'Discrete date selection for filters and scheduling.', stories: '3', tests: '✓' },
          { component: 'Checkbox', description: 'Independent binary or multi-select control.', stories: '2', tests: '✓' },
          { component: 'Radio Group', description: 'Exclusive selection within a small set.', stories: '2', tests: '✓' },
          { component: 'Switch', description: 'Immediate on/off setting toggle.', stories: '2', tests: '✓' },
          { component: 'Label', description: 'Field naming and semantic association.', stories: '1', tests: '—' },
          { component: 'Helper Text', description: 'Supporting guidance below the field.', stories: '1', tests: '—' },
          { component: 'Validation Message', description: 'Error or success feedback near the field.', stories: '1', tests: '—' },
          { component: 'Separator', description: 'Divides long sections into readable groups.', stories: '1', tests: '—' },
        ],
        dataDisplay: [
          { component: 'Table', description: 'Dense comparison and scannable reading.', stories: '1', tests: '—' },
          { component: 'Avatar', description: 'Short visual identification for users and ownership.', stories: '1', tests: '—' },
          { component: 'Badge', description: 'Short statuses and metadata.', stories: '1', tests: '—' },
          { component: 'Tag', description: 'Compact removable or static labels.', stories: '1', tests: '—' },
          { component: 'Tabs', description: 'Visible switching between peer panels.', stories: '2', tests: '✓' },
          { component: 'Accordion', description: 'Progressive disclosure in a vertical flow.', stories: '1', tests: '—' },
        ],
        layout: [{ component: 'Card', description: 'Structural base for grouped content blocks.', stories: '1', tests: '—' }],
        navigation: [
          { component: 'Breadcrumb', description: 'Location context and hierarchical navigation.', stories: '1', tests: '—' },
          { component: 'Pagination', description: 'Page navigation with accessible focus and visible active state.', stories: '2', tests: '✓' },
        ],
        feedback: [
          { component: 'Alert', description: 'Contextual messages for risk, progress, or important information.', stories: '1', tests: '—' },
          { component: 'Empty State', description: 'Explains absence and suggests a next step.', stories: '1', tests: '—' },
          { component: 'Loading State', description: 'Indicates work in progress with calm feedback.', stories: '1', tests: '—' },
          { component: 'Skeleton', description: 'Preserves layout rhythm while content loads.', stories: '1', tests: '—' },
        ],
        overlays: [
          { component: 'Dialog', description: 'Focused decision layer with trapped focus.', stories: '2', tests: '✓' },
          { component: 'Sheet', description: 'Side panel that preserves background context.', stories: '1', tests: '—' },
          { component: 'Tooltip', description: 'Short contextual help close to the trigger.', stories: '1', tests: '—' },
          { component: 'Dropdown Menu', description: 'Compact action list near the trigger.', stories: '2', tests: '✓' },
          { component: 'Toast', description: 'Temporary success or error notification.', stories: '1', tests: '—' },
        ],
      },
      summaryTitle: 'Summary',
    },
    testing: {
      title: 'Testing and quality',
      intro:
        'Storybook is the source of truth for the design system. Beyond documentation, it validates interaction, focus, accessible content, and coverage for critical stories.',
      inThisDocument: 'In this document',
      toc: ['Quality pillars', 'Coverage by component', 'Test commands', 'Play function pattern', 'Testing conventions'],
      pillarsTitle: 'Quality pillars',
      pillarsIntro: 'The system validates quality across three dimensions:',
      playFunctionsTitle: 'Play functions',
      playFunctionsBody:
        'They simulate focus, clicks, typing, overlays opening, and state changes. Each play function runs as an automated Storybook test through addon-vitest.',
      a11yTitle: 'Accessibility (a11y)',
      a11yBody:
        'The addon-a11y integrates axe-core to detect accessibility regressions in each story. ARIA roles, focus, contrast, and screen reader behavior are reviewed continuously.',
      coverageTitle: 'Coverage',
      coverageBody:
        'Coverage is generated through the Vitest addon based on tested stories. Each interactive component should have at least one play function covering its critical flow.',
      componentCoverageTitle: 'Coverage by component',
      coverageColumns: ['Component', 'Category', 'Stories', 'Play function', 'Status'],
      testCommandsTitle: 'Test commands',
      playPatternTitle: 'Play function pattern',
      conventionsTitle: 'Testing conventions',
      conventions: [
        'Use canvas queries inside the story boundary.',
        'Use userEvent to simulate real interaction.',
        "Add tags: ['test'] in meta when the story should run in CI.",
        'Always test focus, clicks, and visible end states.',
        'Name interaction stories with the Interaction suffix.',
      ],
      coverageRows: [
        { component: 'Button', category: 'Actions', stories: '3', playFunction: '✓', status: 'tested' },
        { component: 'Input', category: 'Forms', stories: '2', playFunction: '✓', status: 'tested' },
        { component: 'Select', category: 'Forms', stories: '2', playFunction: '✓', status: 'tested' },
        { component: 'Textarea', category: 'Forms', stories: '2', playFunction: '✓', status: 'tested' },
        { component: 'DatePicker', category: 'Forms', stories: '2', playFunction: '✓', status: 'tested' },
        { component: 'Choice Controls', category: 'Forms', stories: '2', playFunction: '✓', status: 'tested' },
        { component: 'Dialog & Drawer', category: 'Overlays', stories: '2', playFunction: '✓', status: 'tested' },
        { component: 'Tooltip/Dropdown/Toast', category: 'Overlays', stories: '2', playFunction: '✓', status: 'tested' },
        { component: 'Tabs & Accordion', category: 'Data Display', stories: '2', playFunction: '✓', status: 'tested' },
        { component: 'Pagination', category: 'Navigation', stories: '2', playFunction: '✓', status: 'tested' },
        { component: 'Alert', category: 'Feedback', stories: '1', playFunction: '—', status: 'partial' },
        { component: 'Table', category: 'Data Display', stories: '1', playFunction: '—', status: 'planned' },
        { component: 'Avatar', category: 'Data Display', stories: '1', playFunction: '—', status: 'planned' },
        { component: 'Badge & Tag', category: 'Data Display', stories: '1', playFunction: '—', status: 'planned' },
        { component: 'Card', category: 'Layout', stories: '1', playFunction: '—', status: 'planned' },
        { component: 'Breadcrumb', category: 'Navigation', stories: '1', playFunction: '—', status: 'planned' },
        { component: 'Empty/Loading/Skeleton', category: 'Feedback', stories: '1', playFunction: '—', status: 'planned' },
        { component: 'Helpers', category: 'Forms', stories: '1', playFunction: '—', status: 'planned' },
      ],
      coverageStatus: {
        tested: 'Tested',
        partial: 'Partial',
        planned: 'Planned',
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
        purpose: 'Execute actions with clear visual hierarchy.',
        do: ['Use primary for the dominant action.', 'Use loading states for immediate feedback.', 'Avoid more than one primary action in the same group.'],
        dont: ['Do not use destructive actions without real risk.', 'Do not mix many sizes in the same action area.'],
      },
      field: {
        purpose: 'Capture data with context, clarity, and visible validation.',
        do: ['Group related fields by context.', 'Use helper text and validation messages.', 'Keep labels explicit and persistent.'],
        dont: ['Do not rely on a red border alone to communicate errors.', 'Do not use placeholders as the primary label.'],
      },
      navigation: {
        purpose: 'Orient users around the current task, context, and next actions.',
        do: ['Show location with breadcrumbs and headings.', 'Keep the active item visually clear.', 'Separate global actions from navigation items.'],
        dont: ['Do not create navigation without an active state.', 'Do not mix primary actions with utility links.'],
      },
    },
    brand: {
      principles: [
        'Dark-first with high contrast and comfortable reading.',
        'Predictable, compact components across B2B and retail contexts.',
        'Moderate color usage to signal hierarchy, feedback, and state.',
        'Documentation and component APIs designed for designers and developers.',
      ],
      templates: [
        { title: 'SaaS dashboard', description: 'Metrics, productivity, and operational management.' },
        { title: 'Landing page', description: 'Acquisition flows with direct messaging and strong CTA.' },
        { title: 'Institutional', description: 'Positioning, trust, and social proof.' },
        { title: 'Mobile-oriented', description: 'Dense flows with ergonomic structure and emphasis on primary actions.' },
        { title: 'Retail software', description: 'Daily operations, catalog workflows, and point-of-sale support.' },
      ],
    },
    componentDocs: {
      tocTitle: 'Table of Contents',
      tocItems: ['When to use', 'Variants', "Do's and Don'ts", 'Usage', 'Props'],
      whenToUse: 'When to use',
      variants: 'Variants',
      dos: "Do's",
      donts: "Don'ts",
      usage: 'Usage',
      props: 'Props',
      variantColumn: 'Variant',
      purposeColumn: 'Purpose',
    },
    stories: {
      actions: {
        docsDescription: 'Buttons communicate priority, action, and risk. Use contrast, size, and placement to express hierarchy without visual noise.',
        kicker: 'Components / Actions',
        title: 'Buttons with real hierarchy',
        subtitle: 'Actions should communicate priority, context, and confidence without depending on excessive color or decoration.',
        badge: 'Primary, secondary, icon, and destructive',
        showcaseTitle: 'Action showcase',
        showcaseDescription: 'Primary states displayed in a preview frame closer to real product usage.',
        variants: 'Variants',
        primaryAction: 'Primary action',
        deleteItem: 'Delete item',
        interactionAction: 'Run action',
        save: 'Save',
        secondary: 'Secondary',
        outline: 'Outline',
        ghost: 'Ghost',
        delete: 'Delete',
        disabled: 'Disabled',
        contextualActions: 'Contextual actions',
        addItem: 'Add item',
        moreActions: 'More actions',
        compact: 'Compact',
        largeAction: 'Large action',
        usageNote: 'Usage note',
        usageBody: 'Reserve primary for the dominant action in an area. Use secondary and ghost for support and contextual actions.',
        quickRead: 'Quick reference',
        primaryLabel: 'Primary',
        secondaryOutlineLabel: 'Secondary / Outline',
        destructiveLabel: 'Destructive',
        primaryBody: 'Use for the main action in a view, modal, or content block.',
        secondaryBody: 'Use for supporting actions that should not compete for primary attention.',
        destructiveBody: 'Use only for actions with real risk and explicit context.',
      },
      forms: {
        docsDescription: 'Fields, selection controls, and form wrappers for Vareo DS. Use explicit labels, concise helper text, and contextual validation feedback.',
        kicker: 'Components / Forms',
        title: 'Fields with context, validation, and real states',
        accountName: 'Account name',
        accountNameDescription: 'Use the operational name displayed in tables, filters, and detail views.',
        defaultInput: 'Default input',
        defaultInputPlaceholder: 'Primary workspace',
        defaultInputHelp: 'Labels remain visible even when the field is empty.',
        datePicker: 'Date picker',
        datePickerHelp: 'Use for specific, predictable dates.',
        segment: 'Segment',
        retail: 'Retail',
        saas: 'SaaS',
        services: 'Services',
        readonly: 'Read-only',
        readonlyValue: 'Enterprise plan',
        readonlyHelp: 'Use when the value matters but is not editable in the current context.',
        longContent: 'Long content',
        longContentValue: 'Long-form operational context, ERP integration notes, rollout observations, and business dependencies.',
        catalogSync: 'Enable overnight automatic catalog synchronization.',
        operationalAlerts: 'Operational alerts',
        operationalAlertsHelp: 'Immediate feedback for critical queues.',
        radioGroup: 'Radio group',
        planOptions: [
          { value: 'starter', label: 'Starter' },
          { value: 'growth', label: 'Growth' },
          { value: 'enterprise', label: 'Enterprise' },
        ],
        saveChanges: 'Save changes',
        saveDraft: 'Save draft',
        cancel: 'Cancel',
        statesAndPractices: 'States and best practices',
        validationMessageLabel: 'Validation message',
        validationMessage: 'Review the company document: invalid format for fiscal registration.',
        successMessageLabel: 'Success message',
        successMessage: 'The data is validated and ready to publish.',
        errorLabel: 'Error',
        successLabel: 'Success',
        invalidIdentifier: 'Use a valid 14-digit identifier.',
        successIdentifier: 'Document validated successfully.',
      },
      navigation: {
        docsDescription: 'Header, top navigation, side navigation, and footer support orientation, context, and predictable navigation in operational products.',
        newAction: 'New action',
        orders: 'Orders',
        settings: 'Settings',
        dashboard: 'Dashboard',
        workspace: 'Workspace',
        core: 'Core',
        config: 'Config',
        operations: 'Operations',
        finance: 'Finance',
        permissions: 'Permissions',
        integrations: 'Integrations',
        pageHeader: 'Page header',
        pageHeaderDescription: 'Use it to combine breadcrumb context, current location, and the dominant action.',
        filter: 'Filter',
        export: 'Export',
        footer: 'The footer should remain discreet, stable, and useful for institutional context or support links.',
      },
      feedback: {
        docsDescription: 'System states, overlays, and immediate feedback. Each pattern must communicate risk, progress, or context without relying solely on color.',
        kicker: 'Components / Feedback & Overlays',
        title: 'Perceptible and contextual feedback',
        subtitle: 'States, overlays, and quick communications should guide the next action clearly.',
        tagLabel: 'Feedback',
        maintenanceTitle: 'Maintenance window',
        maintenanceDescription: 'Two tenants will be migrated at 02:00 with rollback available.',
        slaTitle: 'Queue under attention',
        slaDescription: 'There are 18 orders above the expected SLA. Reevaluate the dispatch rule.',
        emptyTicketsTitle: 'No open tickets',
        emptyTicketsDescription: 'When the state is empty, explain the context and the next possible action.',
        emptyTicketsAction: 'Open new ticket',
        guidelinesTitle: 'Guidelines',
        guidelinesBody: 'Always explain impact, context, and next step. Visual state alone is not enough.',
        whenToUseModal: 'When to use modal',
        whenToUseModalBody: 'Use for specific decisions, confirmation, and focused editing.',
        whenToUseDrawer: 'When to use drawer',
        whenToUseDrawerBody: 'Use when the task needs to maintain the context of the main screen.',
        openDialog: 'Open dialog',
        newConfigTitle: 'New configuration',
        newConfigDescription: 'Use modals for short and concentrated decisions.',
        confirm: 'Confirm',
        cancel: 'Cancel',
        openDrawer: 'Open drawer',
        operationalSummaryTitle: 'Operational summary',
        operationalSummaryDescription: 'Use drawer when the user needs to keep the context aside.',
        menu: 'Menu',
        viewQueue: 'View queue',
        triggerToast: 'Trigger toast',
        toastSuccess: 'Toast triggered successfully',
        tooltipBody: 'Contextual and discreet feedback.',
        tooltipTrigger: 'Tooltip',
        skeletonTitle: 'Skeleton',
        noServiceTitle: 'No service available',
        noServiceDescription: 'Explain why it is empty and the recommended next action.',
        noServiceAction: 'Create service',
        publishingTitle: 'Publishing components',
        publishingDescription: 'Update the user during operations with perceptible duration.',
        deployStarted: 'Deploy started',
        deployDescription: 'Components are being published now.',
      },
      dataDisplay: {
        docsDescription: 'Patterns for data, contextual navigation, and quick reading. Priority is scannability, balanced density, and clarity between primary and supporting content.',
        kicker: 'Components / Data display',
        title: 'Data, navigation, and contextual grouping',
        designSystem: 'Design system',
        table: 'Table',
        people: 'People',
        accordion: 'Accordion',
        id: 'ID',
        account: 'Account',
        status: 'Status',
        segment: 'Segment',
        active: 'Active',
        inRollout: 'In rollout',
        underReview: 'Under review',
        team: 'Team',
        squad: 'squad',
        squadDescription: 'Monitoring rollout and consistency.',
        whenToUseTable: 'When to use table?',
        whenToUseTableBody: 'For dense comparison, recurring filters, and operational analysis.',
        whenToUseCards: 'When to use cards?',
        whenToUseCardsBody: 'For summaries, groupings, and blocks with little structural variation.',
      },
      templates: {
        docsDescription: 'Page patterns for login, dashboard, listing, registration, detail, process, and confirmation states. All use only Vareo DS components.',
      },
      foundations: {
        docsDescription: 'Visual foundations and semantic tokens for Vareo DS. Every visual decision should start from these contracts, not isolated values.',
        semanticPaletteTitle: 'Semantic palette',
        semanticPaletteDescription: 'Tokens are organized to create clear contrast between canvas, surfaces, and states without increasing visual noise.',
        foundationScaleTitle: 'Scale and system rhythm',
        foundationScaleDescription: 'Scales support controlled density, comfortable reading, and consistency across product, docs, and templates.',
        tokenArchitectureTitle: 'Token architecture',
        tokenArchitectureDescription: 'The structure is ready for theming, scale growth, and long-term consistency across components and templates.',
        tokenUsage: {
          background: 'Base product canvas.',
          surface: 'Cards, panels, and primary regions.',
          'surface-muted': 'Secondary blocks and inner grouping areas.',
          foreground: 'Primary text and headings.',
          muted: 'Neutral areas, placeholders, and support surfaces.',
          'muted-foreground': 'Secondary text.',
          border: 'Separators and outlines.',
          input: 'Field outlines and editable surfaces.',
          ring: 'Visible focus and accessible emphasis.',
          primary: 'Dominant action and key emphasis.',
          secondary: 'Support actions and secondary navigation.',
          accent: 'Complementary emphasis.',
          success: 'Confirmation and positive states.',
          warning: 'Moderate attention and controlled risk.',
          destructive: 'Errors and destructive actions.',
          info: 'Contextual information.',
          disabled: 'Unavailable elements.',
        },
      },
      button: {
        doc: {
          title: 'Button',
          description: 'Button communicates priority, action, and risk in interfaces where clarity matters, ensuring actions stay clear.',
          whenToUse: [
            'Highlight the dominant action that deserves immediate attention.',
            'Provide clear alternatives with secondary or outline styles in action groups.',
            'Surface important statuses (loading, destructive confirmation) to guide interactions.',
          ],
          variants: [
            { variant: 'Primary', purpose: 'Main call to action, high priority closes flows.' },
            { variant: 'Secondary', purpose: 'Supporting action without the same weight.' },
            { variant: 'Outline', purpose: 'Lightweight action inside dense toolbars.' },
            { variant: 'Ghost', purpose: 'Transparent action for subtle interactions.' },
            { variant: 'Destructive', purpose: 'Alerts for actions with real risk, like delete.' },
            { variant: 'Icon (IconButton)', purpose: 'Compact trigger for single-icon actions.' },
          ],
          dos: [
            'Use primary for the dominant action in each block.',
            'Show loading state immediately when the action is processing.',
            'Combine sizes consistently; match textual hierarchy.',
          ],
          donts: [
            'Do not use destructive styles unless there is real risk.',
            "Don't mix many sizes in the same action row to avoid visual noise.",
          ],
          usageCode: `<Button variant="primary" size="md" loading>
  Confirm
</Button>`,
        },
      },
      alert: {
        docsDescription: 'Alert renders standalone with variant and content controlled by the panel.',
        doc: {
          title: 'Alert',
          description: 'Alert surfaces contextual messages that call attention to risk, progress, or important information in a consistent layer.',
          whenToUse: [
            'When you must highlight a warning, success, or informational note relative to the current screen.',
            'When contextual guidance should stay persistent until the user acts or dismisses it.',
            'When a short message needs hierarchy via `AlertTitle` and `AlertDescription`.',
          ],
          variants: [
            { variant: 'default', purpose: 'Neutral tone for general guidance and mild notices.' },
            { variant: 'info', purpose: 'Subtle emphasis for informational updates or system states.' },
            { variant: 'success', purpose: 'Affirmative feedback after successful actions.' },
            { variant: 'destructive', purpose: 'Calls out errors, failures or urgent problems that need attention.' },
          ],
          dos: [
            'Use `AlertTitle` to keep the headline scannable and `AlertDescription` for details.',
            'Match the tone (`info`, `success`, `destructive`) with the actual state to reduce confusion.',
          ],
          donts: [
            "Don't hide alerts that signal failure behind other components.",
            "Don't mix conflicting tones inside the same alert (for example, `destructive` text with `success` styling).",
          ],
          usageCode: `<Alert variant="success">
  <AlertTitle>Payment captured</AlertTitle>
  <AlertDescription>The user's card was billed and receipt emailed.</AlertDescription>
</Alert>`,
        },
      },
      skeleton: {
        doc: {
          title: 'Skeleton',
          description: 'Skeleton hints the final layout before real content is ready.',
          whenToUse: ['Use to reduce layout jumps during loading.'],
          variants: [{ variant: 'Default', purpose: 'Neutral placeholder block.' }],
          dos: ['Match skeleton shape to the incoming layout.'],
          donts: ["Don't combine skeleton with already-loaded final content in the same slot."],
          usageCode: '<Skeleton className="h-10 w-full" />',
        },
      },
      'loading-state': {
        docsDescription: 'Loading State informs the system is still processing data.',
        doc: {
          title: 'Loading State',
          description: 'Loading State reassures users while work is still in progress.',
          whenToUse: ['Use when async work is in progress and the page needs a clear waiting state.'],
          variants: [{ variant: 'Default', purpose: 'Short loading message with spinner.' }],
          dos: ['Keep the message calm and brief.'],
          donts: ["Don't imply failure while content is still loading."],
          usageCode: '<LoadingState description="Fetching dashboard..." />',
        },
      },
      'empty-state': {
        docsDescription: 'Empty State guides the next action when there is no content yet.',
        doc: {
          title: 'Empty State',
          description: 'Empty State explains absence and suggests the next useful action.',
          whenToUse: ['Use when data is missing but the interface remains healthy.'],
          variants: [{ variant: 'Default', purpose: 'Explains why the page is empty and what to do next.' }],
          dos: ['Offer a clear next action.'],
          donts: ["Don't leave the area blank without context."],
          usageCode: '<EmptyState title="No orders yet" actionLabel="Create order" />',
        },
      },
      toast: {
        docsDescription: 'Toast communicates temporary results without interrupting the flow.',
        doc: {
          title: 'Toast',
          description: 'Toast confirms outcomes briefly without blocking the interface.',
          whenToUse: ['Use for lightweight success or error feedback after an action.'],
          variants: [
            { variant: 'Success', purpose: 'Confirms completion.' },
            { variant: 'Error', purpose: 'Signals a failed outcome.' },
          ],
          dos: ['Keep the message concise.'],
          donts: ["Don't put long instructions inside a toast."],
          usageCode: "toast.success('Saved successfully')",
        },
      },
      'dropdown-menu': {
        docsDescription: 'Dropdown menu gathers compact actions near the trigger.',
        doc: {
          title: 'Dropdown Menu',
          description: 'Dropdown Menu exposes secondary actions without increasing layout noise.',
          whenToUse: ['Use for compact contextual actions.'],
          variants: [{ variant: 'Default', purpose: 'Opens an action list near the trigger.' }],
          dos: ['Keep labels task-oriented and scannable.'],
          donts: ["Don't hide the primary action only inside a dropdown."],
          usageCode: `<DropdownMenu>
  <DropdownMenuTrigger>Actions</DropdownMenuTrigger>
</DropdownMenu>`,
        },
      },
      tooltip: {
        docsDescription: 'Tooltip explains affordances quickly on hover or focus.',
        doc: {
          title: 'Tooltip',
          description: 'Tooltip provides short contextual help close to the trigger.',
          whenToUse: ['Use for brief clarifications that should not occupy layout space.'],
          variants: [{ variant: 'Default', purpose: 'Hover/focus contextual hint.' }],
          dos: ['Keep content brief.'],
          donts: ["Don't place essential instructions only inside tooltip."],
          usageCode: '<TooltipContent>Contextual help</TooltipContent>',
        },
      },
      sheet: {
        docsDescription: 'Sheet exposes lateral context without removing the base screen.',
        doc: {
          title: 'Sheet',
          description: 'Sheet reveals supplemental detail while keeping the main context visible.',
          whenToUse: ['Use when users still need the underlying page context.'],
          variants: [{ variant: 'Right sheet', purpose: 'Supplemental task or detail panel.' }],
          dos: ['Keep the content task-oriented and contextual.'],
          donts: ["Don't use sheet when full modal isolation is required."],
          usageCode: `<Sheet>
  <SheetTrigger>Open details</SheetTrigger>
</Sheet>`,
        },
      },
      dialog: {
        docsDescription: 'Dialog protects focus and prioritizes punctual decisions.',
        doc: {
          title: 'Dialog',
          description: 'Dialog creates a focused layer for high-priority decisions.',
          whenToUse: ['Use when users must confirm or review a focused task.'],
          variants: [{ variant: 'Default', purpose: 'Modal decision layer with trapped focus.' }],
          dos: ['Keep title, description, and actions explicit.'],
          donts: ["Don't use dialog for low-priority passive information."],
          usageCode: `<Dialog>
  <DialogTrigger>Delete</DialogTrigger>
</Dialog>`,
        },
      },
      accordion: {
        docsDescription: 'Accordion reveals content progressively in vertical lists.',
        doc: {
          title: 'Accordion',
          description: 'Accordion expands and collapses content progressively inside a vertical flow.',
          whenToUse: ['Use for optional detail and progressive disclosure.'],
          variants: [{ variant: 'Single', purpose: 'Opens one item at a time.' }],
          dos: ['Use clear trigger labels.'],
          donts: ["Don't hide essential primary content by default."],
          usageCode: '<Accordion type="single" collapsible />',
        },
      },
      tabs: {
        docsDescription: 'Tabs organize equivalent panels with visible context switching.',
        doc: {
          title: 'Tabs',
          description: 'Tabs switch between related panels without leaving the current page.',
          whenToUse: ['Use for peer sections with equal hierarchy.'],
          variants: [{ variant: 'Default', purpose: 'Switches visible panel content.' }],
          dos: ['Keep labels short and parallel.'],
          donts: ["Don't overload a single tabs group with many destinations."],
          usageCode: '<Tabs defaultValue="overview" />',
        },
      },
      tag: {
        docsDescription: 'Tag represents compact attributes or filters with optional removal.',
        doc: {
          title: 'Tag',
          description: 'Tag groups small attributes and removable filters in a compact chip format.',
          whenToUse: ['Use for categories, selected filters, or compact labels.'],
          variants: [
            { variant: 'Default', purpose: 'Standard chip label.' },
            { variant: 'Removable', purpose: 'Displays removal affordance.' },
          ],
          dos: ['Use removable tags when users can clear a filter.'],
          donts: ["Don't overload tags with full sentence content."],
          usageCode: '<Tag removable>Release 1.2</Tag>',
        },
      },
      badge: {
        docsDescription: 'Badge surfaces short status and metadata in dense interfaces.',
        primaryLabel: 'Primary',
        doc: {
          title: 'Badge',
          description: 'Badge surfaces short status and metadata in dense interfaces.',
          whenToUse: ['Use to mark status, category, or compact metadata.'],
          variants: [
            { variant: 'Primary', purpose: 'Main highlighted status.' },
            { variant: 'Secondary', purpose: 'Lower emphasis metadata.' },
            { variant: 'Success', purpose: 'Positive state.' },
            { variant: 'Warning', purpose: 'Cautionary state.' },
            { variant: 'Destructive', purpose: 'Critical state.' },
          ],
          dos: ['Keep badge labels short.'],
          donts: ["Don't use badge for long sentences."],
          usageCode: '<Badge variant="success">Synced</Badge>',
        },
      },
      separator: {
        docsDescription: 'Separator organizes long content or form blocks.',
        doc: {
          title: 'Separator',
          description: 'Separator introduces visual rhythm between related sections.',
          whenToUse: ['Use to break long forms or grouped information.'],
          variants: [{ variant: 'Horizontal', purpose: 'Separates stacked sections.' }],
          dos: ['Use when spacing alone is not enough.'],
          donts: ["Don't stack many separators close together."],
          usageCode: '<Separator />',
        },
      },
      'validation-message': {
        docsDescription: 'Validation message communicates error or success near the field.',
        doc: {
          title: 'Validation Message',
          description: 'Validation Message clarifies success or error directly where the user needs it.',
          whenToUse: ['Use after validation or submission feedback.'],
          variants: [
            { variant: 'Error', purpose: 'Explains what must be corrected.' },
            { variant: 'Success', purpose: 'Confirms valid state.' },
          ],
          dos: ['Place it near the affected control.'],
          donts: ["Don't show validation feedback too early."],
          usageCode: '<ValidationMessage tone="error">Email inválido</ValidationMessage>',
        },
      },
      'helper-text': {
        docsDescription: 'Helper text adds helpful context below the field.',
        doc: {
          title: 'Helper Text',
          description: 'Helper Text gives supporting instructions without overpowering the field.',
          whenToUse: ['Use for non-obvious constraints or guidance.'],
          variants: [{ variant: 'Default', purpose: 'Secondary instructional copy.' }],
          dos: ['Keep helper text concise and practical.'],
          donts: ["Don't repeat the label or placeholder."],
          usageCode: '<HelperText>Use a public-facing company name.</HelperText>',
        },
      },
      label: {
        docsDescription: 'Label names a field clearly and consistently.',
        doc: {
          title: 'Label',
          description: 'Label names a field clearly and anchors form meaning.',
          whenToUse: ['Use on every form control that requires an explicit name.'],
          variants: [{ variant: 'Default', purpose: 'Standard field label.' }],
          dos: ['Keep labels concise and descriptive.'],
          donts: ["Don't rely only on placeholder as label."],
          usageCode: '<Label htmlFor="email">Email</Label>',
        },
      },
      switch: {
        docsDescription: 'Switch toggles on/off states immediately.',
        doc: {
          title: 'Switch',
          description: 'Switch communicates an immediate on/off state for a single setting.',
          whenToUse: [
            'Use for a binary preference that can be changed instantly.',
            'Use when the current state must stay visible at all times.',
          ],
          variants: [
            { variant: 'Default', purpose: 'Standard on/off toggle.' },
            { variant: 'Disabled', purpose: 'Prevents interaction while preserving context.' },
          ],
          dos: ['Pair with a clear nearby label.', 'Use for immediate state changes.'],
          donts: ["Don't use switch for submit-driven settings."],
          usageCode: '<Switch aria-label="Enable alerts" defaultChecked />',
        },
      },
      'radio-group': {
        docsDescription: 'Radio group handles mutually exclusive choices inside a small set.',
        doc: {
          title: 'Radio Group',
          description: 'Radio Group supports a single choice inside a defined set of options.',
          whenToUse: [
            'Use when exactly one option should remain selected.',
            'Use for mutually exclusive plans, modes, or filters.',
          ],
          variants: [{ variant: 'Default', purpose: 'Single selection among peers.' }],
          dos: ['Keep all options visible together.', 'Order choices logically.'],
          donts: ["Don't use radio group for multi-select behavior."],
          usageCode: '<RadioGroup defaultValue="growth" />',
        },
      },
      checkbox: {
        docsDescription: 'Checkbox supports multi-selection with explicit opt-in states.',
        doc: {
          title: 'Checkbox',
          description: 'Checkbox supports multiple selection and explicit opt-in states.',
          whenToUse: [
            'Use when users can select zero, one, or many options.',
            'Use for explicit consent or optional settings.',
          ],
          variants: [
            { variant: 'Default', purpose: 'Standard binary selection.' },
            { variant: 'Disabled', purpose: 'Shows unavailable selection.' },
          ],
          dos: ['Keep labels short and specific.', 'Use checkbox only for independent choices.'],
          donts: ["Don't use checkbox when only one option can be chosen."],
          usageCode: '<Checkbox aria-label="Enable reports" defaultChecked />',
        },
      },
      pagination: {
        docsDescription: 'Pagination renders alone with a controllable active page.',
        doc: {
          title: 'Pagination',
          description: 'Pagination keeps listings manageable when data flows beyond a single viewport and maintains user rhythm in extensive listings.',
          whenToUse: [
            'When page navigation needs to clearly surface position for large datasets.',
            'When a sense of progress through pages improves confidence and avoids loss of context.',
            'When you can show both previous/next affordances and direct page links without crowding.',
          ],
          variants: [
            { variant: 'Pagination', purpose: 'Root that defines the navigation region.' },
            { variant: 'PaginationContent', purpose: 'Structural wrapper keeping spacing consistent.' },
            { variant: 'PaginationItem', purpose: 'Numeric or control item, accessible and focusable.' },
            { variant: 'PaginationLink', purpose: 'Actual link that receives `isActive` to highlight the current page.' },
            { variant: 'PaginationPrevious', purpose: 'Link to the previous page, disabled at the start.' },
            { variant: 'PaginationNext', purpose: 'Link to the next page, disabled at the end.' },
            { variant: 'PaginationEllipsis', purpose: 'Placeholder when pages collapse to save space.' },
          ],
          dos: [
            'Highlight the current page with `isActive` so it reads like a progress marker.',
            'Provide ellipsis when there are too many pages to prevent crowding.',
          ],
          donts: [
            "Don't rely on pagination when infinite scroll already suits the data rhythm.",
            "Don't replace navigation with dots unless they also support keyboard focus.",
          ],
          usageCode: `<Pagination>
  <PaginationPrevious href="/reports?page=1">Previous</PaginationPrevious>
  <PaginationItem>
    <PaginationLink href="/reports?page=1">1</PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="/reports?page=2" isActive>
      2
    </PaginationLink>
  </PaginationItem>
  <PaginationNext href="/reports?page=3">Next</PaginationNext>
</Pagination>`,
        },
      },
      breadcrumb: {
        docsDescription: 'Breadcrumb appears isolated with configurable labels.',
        doc: {
          title: 'Breadcrumb',
          description: 'Breadcrumb shows the current location and reduces ambiguity in deep flows, ensuring clarity and rhythm even as the user moves through layers.',
          whenToUse: [
            'When a nested path should be surfaced with a clear trail and heading.',
            'When you need to pair the navigation path with global actions separated visually.',
            'When the active item must feel distinct to avoid accidental navigation.',
          ],
          variants: [
            { variant: 'Breadcrumb', purpose: 'Wrapper that groups the entire trail and keeps semantics clear.' },
            { variant: 'BreadcrumbList', purpose: 'Layout container for ordered steps with list semantics.' },
            { variant: 'BreadcrumbItem', purpose: 'Each step, optionally linked and separated to hint depth.' },
            { variant: 'BreadcrumbLink', purpose: 'Interactive step leading to ancestor screens and sections.' },
            { variant: 'BreadcrumbSeparator', purpose: 'Decorative guidance marker between steps for pacing.' },
            { variant: 'BreadcrumbPage', purpose: 'Current, non-interactive item that anchors context.' },
          ],
          dos: [
            'Keep the last item as plain text to signal the current screen.',
            'Pair the trail with a heading so users read location and intent together.',
          ],
          donts: [
            "Don't overload the breadcrumb with unrelated actions or controls.",
            "Don't omit separators when multiple levels exist.",
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
      <BreadcrumbPage>Settings</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
        },
      },
      card: {
        docsDescription: 'Card rendered standalone with content controlled by args.',
        doc: {
          title: 'Card',
          description: 'Structural base for context blocks, grouping, and quick reading in dashboards.',
          whenToUse: [
            'Group related data or controls within a clear panel.',
            'Serve as anchor points in dashboards and settings with a focus on quick insights.',
            'Highlight summaries while maintaining alignment with the visual system.',
          ],
          variants: [
            { variant: 'Card', purpose: 'Surface container with padding and neutral background.' },
            { variant: 'CardHeader', purpose: 'Top section for titles or call-to-action.' },
            { variant: 'CardTitle', purpose: 'Large heading that summarizes the block.' },
            { variant: 'CardDescription', purpose: 'Support text with additional context to the title.' },
            { variant: 'CardContent', purpose: 'Body where main elements are rendered.' },
            { variant: 'CardFooter', purpose: 'Bottom area for secondary actions or tight metadata.' },
          ],
          dos: [
            'Keep cards predictable in height and spacing.',
            'Use header and footer to maintain clear hierarchy.',
            'Apply subtle dividers or background overlays when multiple cards align.',
          ],
          donts: [
            "Don't overload a card with multiple CTAs conflicting visually.",
            'Avoid non-aligned content that breaks the visual grid.',
            'Do not nest cards unnecessarily; prefer simple stacking.',
          ],
          usageCode: `<Card>
  <CardHeader>
    <CardTitle>Dashboard</CardTitle>
    <CardDescription>Current month summaries</CardDescription>
  </CardHeader>
  <CardContent>Metrics here...</CardContent>
  <CardFooter>
    <Button variant="ghost">View details</Button>
  </CardFooter>
</Card>`,
        },
      },
      avatar: {
        docsDescription: 'Avatar isolado com fallback e imagem configuráveis via args.',
        alt: 'Vareo avatar',
        fallback: 'VT',
        doc: {
          title: 'Avatar',
          description: 'Short visual identifiers for users and squads, maintaining context and ownership in dense interfaces.',
          whenToUse: [
            'Show ownership of a task, ticket, or note with a recognizable face.',
            'Pair with contextual metadata to convey responsibility quickly.',
            'Display fallback initials when the image is not available.',
          ],
          variants: [
            { variant: 'Avatar', purpose: 'Circle frame that scales via custom className for the layout.' },
            { variant: 'AvatarFallback', purpose: 'Renders initials or icon when image fails to load.' },
            { variant: 'AvatarImage', purpose: 'Loads remote photo with fallback behavior automatically.' },
          ],
          dos: [
            'Supply meaningful `alt` text when using AvatarImage.',
            'Keep sizes consistent with interface spacing tokens.',
            'Use fallback letters thoughtfully to maintain recognition.',
          ],
          donts: [
            "Don't rely on avatars alone to communicate status; add labels.",
            'Avoid stretching the image area; match aspect ratio to layout.',
            "Don't mix initials and icons in the same slot without reason.",
          ],
          usageCode: `<Avatar className="w-10 h-10">
  <AvatarImage src="/photos/ana.jpg" alt="Ana Souza" />
  <AvatarFallback>AS</AvatarFallback>
</Avatar>`,
        },
      },
      table: {
        docsDescription: 'Table renders with minimal dataset for quick scanning.',
        doc: {
          title: 'Table',
          description: 'Dense comparison surface for operational data and quick analysis.',
          whenToUse: [
            'Show recurring analytical tasks or KPIs side by side.',
            'Render operational listings where rows correspond to concrete records.',
            'Compare metrics with dense layout and visual indicators.',
          ],
          variants: [
            { variant: 'Table', purpose: 'Base container for rows and columns with overflow handling.' },
            { variant: 'TableHeader', purpose: 'Wraps the header to denote column names.' },
            { variant: 'TableBody', purpose: 'Groups rows of real data.' },
            { variant: 'TableRow', purpose: 'Represents a single row, highlighting state if necessary.' },
            { variant: 'TableHead', purpose: 'Cell for headings with emphasis and alignment.' },
            { variant: 'TableCell', purpose: 'Body cell used for textual or numeric content.' },
          ],
          dos: [
            'Align numeric values consistently to facilitate reading.',
            'Use header labels that clearly describe the metric.',
            'Limit row density when data becomes difficult to distinguish.',
          ],
          donts: [
            "Don't rely solely on color for meaning; add icons or text.",
            'Avoid using tables for storytelling content; prefer cards or lists.',
            'Do not overload each row with too many columns without justification.',
          ],
          usageCode: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Team</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Growth</TableCell>
      <TableCell>Operational</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
        },
      },
      'date-picker': {
        docsDescription: 'Date Picker renders a discrete date input for filters and scheduling.',
        doc: {
          title: 'DatePicker',
          description: 'DatePicker exposes a discrete date input for filters, scheduling, and operational milestones with native behaviors and aria-invalid support.',
          whenToUse: [
            'Set precise dates for filters, deliveries, and appointments.',
            'Lock input to readonly when the date should not change.',
            'Flag errors with aria-invalid when validation fails.',
          ],
          variants: [
            { variant: 'Default', purpose: 'Editable date field with calendar picker.' },
            { variant: 'Readonly', purpose: 'Display date without allowing edits.' },
            { variant: 'Error', purpose: 'Communicate invalid range or missing value.' },
          ],
          dos: [
            'Use the native date picker affordance for consistency.',
            'Provide helper text when date ranges matter.',
            'Respect readonly mode when data should be preserved.',
          ],
          donts: [
            "Don't replace the native control with a custom date wheel unnecessarily.",
            'Avoid allowing inconsistent formats by keeping the native input.',
          ],
          usageCode: '<DatePicker label="Entrega" aria-invalid={isInvalid} />',
        },
      },
      textarea: {
        docsDescription: 'Textarea supports long-form text with comfortable resizing.',
        doc: {
          title: 'Textarea',
          description: 'Textarea is designed for long-form text, operational comments, and free-content fields, offering resize control for comfort.',
          whenToUse: [
            'Collect extended descriptions, operational notes, or feedback.',
            'Allow users to resize when more space is needed.',
            'Validate content and show messaging near the textarea.',
          ],
          variants: [
            { variant: 'Default', purpose: 'Normal multi-line editing mode.' },
            { variant: 'Placeholder', purpose: 'Hint for expected content.' },
            { variant: 'Validation', purpose: 'Flags errors with visual indication.' },
          ],
          dos: [
            'Provide context via placeholder and helper text.',
            'Allow natural resizing to accommodate more text.',
            'Surface validation lessons with clear messaging.',
          ],
          donts: [
            "Don't rely on a single-line field when content is verbose.",
            'Avoid disabling resize unless necessary for layout control.',
          ],
          usageCode: '<Textarea label="Observações" placeholder="Descreva o caso detalhadamente" />',
        },
      },
      select: {
        docsDescription: 'Select features a trigger and compact list isolation.',
        doc: {
          title: 'Select',
          description: 'Select orchestrates controlled choices with accessible focus, composed of trigger, value, content, and items to keep interactions consistent.',
          whenToUse: [
            'Let users choose a single option from a predefined list.',
            'Surface focus states and ensure keyboard navigation stays predictable.',
            'Flag errors with aria-invalid when selection is required.',
          ],
          variants: [
            { variant: 'SelectTrigger', purpose: 'Opens the dropdown region.' },
            { variant: 'SelectValue', purpose: 'Displays the chosen option.' },
            { variant: 'SelectContent', purpose: 'Wraps the list of SelectItem.' },
            { variant: 'SelectItem', purpose: 'Represents each option with focus feedback.' },
          ],
          dos: [
            'Keep Select controlled and sync value with the form state.',
            'Preserve consistent focus order for accessibility.',
            'Apply aria-invalid to communicate errors.',
          ],
          donts: [
            'Avoid mixing multiple select patterns on the same row.',
            "Don't hide the selected state; always show the current value.",
          ],
          usageCode: `<Select aria-invalid={hasError}>
  <SelectTrigger />
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
  </SelectContent>
</Select>`,
        },
      },
      input: {
        docsDescription: 'Input is the base text field for search, registration, and filters, always paired with a visible label for accessibility.',
        defaultPlaceholder: 'Workspace name',
        defaultAriaLabel: 'Workspace name',
        searchPlaceholder: 'Search',
        searchAriaLabel: 'Search field',
        doc: {
          title: 'Input',
          description: 'Input is the base text field for search, registration, and filters, always paired with a visible label for accessibility.',
          whenToUse: [
            'Capture single-line text such as names, emails, or search terms.',
            'Combine with helper text and validation messaging for clarity.',
            'Reinforce context by grouping fields with related labels.',
          ],
          variants: [
            { variant: 'Default', purpose: 'Standard editable state for user input.' },
            { variant: 'Readonly', purpose: 'Surface data without allowing edits.' },
            { variant: 'Disabled', purpose: 'Indicate an action is not available.' },
            { variant: 'Invalid', purpose: 'Highlight errors via invalid state and messaging.' },
          ],
          dos: [
            'Always use visible labels to describe each field.',
            'Group related fields by context, aligning vertically if necessary.',
            'Provide helper text and validation messages near the input.',
          ],
          donts: [
            "Don't hide the label or rely only on placeholder text.",
            'Do not overload a single input with too many responsibilities.',
          ],
          usageCode: '<Input label="Nome" helperText="Use o nome completo" />',
        },
      },
    },
  },
} as const
