import { useStorybookI18n } from '@/stories/i18n'
import { useBrandContent } from '@/stories/foundations/brand'
import { useOverviewContent } from '@/stories/docs/overview'

function Table({ headers, rows }: { headers: readonly string[]; rows: readonly (readonly string[])[] }) {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.join('|')}>
            {row.map((cell, index) => (
              <td key={`${cell}-${index}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export function OverviewDocsPage() {
  const content = useOverviewContent()
  const brand = useBrandContent()
  const { messages, t } = useStorybookI18n()

  return (
    <>
      <h1>{content.title}</h1>
      <p>{content.intro}</p>
      <hr />
      <h2>{content.inThisDocument}</h2>
      <ul>
        {content.toc.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <hr />
      <h2>{content.solvesTitle}</h2>
      <p>{content.solvesIntro}</p>
      <ul>
        {content.solvesItems.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <hr />
      <h2>{content.principlesTitle}</h2>
      <p>{content.principlesIntro}</p>
      <ol>
        {brand.principles.map((item) => <li key={item}>{item}</li>)}
      </ol>
      <hr />
      <h2>{content.layersTitle}</h2>
      <p>{content.layersIntro}</p>
      <Table headers={messages.docs.overview.layerTableColumns} rows={content.layers.map((item) => [item.name, item.description])} />
      <p>{content.sidebarNote}</p>
      <hr />
      <h2>{content.responsivenessTitle}</h2>
      <h3>{content.responsivenessLabel}</h3>
      <ul>
        {content.responsivenessItems.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <h3>{content.accessibilityLabel}</h3>
      <ul>
        {content.accessibilityItems.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <hr />
      <h2>{content.bestPracticesTitle}</h2>
      <h3>{t('ui.doLabel')}</h3>
      <ul>
        {content.do.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <h3>{t('ui.dontLabel')}</h3>
      <ul>
        {content.dont.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </>
  )
}

export function ComponentsDocsPage() {
  const { messages } = useStorybookI18n()
  const content = messages.docs.components
  const componentRows = content.componentRows

  return (
    <>
      <h1>{content.title}</h1>
      <p>{content.intro}</p>
      <hr />
      <h2>{content.inThisDocument}</h2>
      <ul>
        {content.toc.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <hr />
      <h2>{content.pageStructureTitle}</h2>
      <ol>
        {content.pageStructureItems.map((item) => <li key={item}>{item}</li>)}
      </ol>
      <hr />
      <h2>{content.categories.forms}</h2>
      <Table
        headers={content.tableColumns}
        rows={componentRows.forms.map((row) => [row.component, row.description, row.stories, row.tests])}
      />
      <hr />
      <h2>{content.categories.dataDisplay}</h2>
      <Table
        headers={content.tableColumns}
        rows={componentRows.dataDisplay.map((row) => [row.component, row.description, row.stories, row.tests])}
      />
      <hr />
      <h2>{content.categories.layout}</h2>
      <Table
        headers={content.tableColumns}
        rows={componentRows.layout.map((row) => [row.component, row.description, row.stories, row.tests])}
      />
      <hr />
      <h2>{content.categories.navigation}</h2>
      <Table
        headers={content.tableColumns}
        rows={componentRows.navigation.map((row) => [row.component, row.description, row.stories, row.tests])}
      />
      <hr />
      <h2>{content.categories.feedback}</h2>
      <Table
        headers={content.tableColumns}
        rows={componentRows.feedback.map((row) => [row.component, row.description, row.stories, row.tests])}
      />
      <hr />
      <h2>{content.categories.overlays}</h2>
      <Table
        headers={content.tableColumns}
        rows={componentRows.overlays.map((row) => [row.component, row.description, row.stories, row.tests])}
      />
      <hr />
      <h2>{content.summaryTitle}</h2>
      <p>{content.summary}</p>
    </>
  )
}

export function TestingQualityDocsPage() {
  const { messages } = useStorybookI18n()
  const content = messages.docs.testing

  return (
    <>
      <h1>{content.title}</h1>
      <p>{content.intro}</p>
      <hr />
      <h2>{content.inThisDocument}</h2>
      <ul>
        {content.toc.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <hr />
      <h2>{content.pillarsTitle}</h2>
      <p>{content.pillarsIntro}</p>
      <h3>{content.playFunctionsTitle}</h3>
      <p>{content.playFunctionsBody}</p>
      <h3>{content.a11yTitle}</h3>
      <p>{content.a11yBody}</p>
      <h3>{content.coverageTitle}</h3>
      <p>{content.coverageBody}</p>
      <hr />
      <h2>{content.componentCoverageTitle}</h2>
      <Table
        headers={content.coverageColumns}
        rows={content.coverageRows.map((row) => [
          row.component,
          row.category,
          row.stories,
          row.playFunction,
          content.coverageStatus[row.status as keyof typeof content.coverageStatus] ?? row.status,
        ])}
      />
      <hr />
      <h2>{content.testCommandsTitle}</h2>
      <pre>
        <code>{content.testCommandsCode}</code>
      </pre>
      <hr />
      <h2>{content.playPatternTitle}</h2>
      <pre>
        <code>{content.playPatternCode}</code>
      </pre>
      <hr />
      <h2>{content.conventionsTitle}</h2>
      <ul>
        {content.conventions.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </>
  )
}
