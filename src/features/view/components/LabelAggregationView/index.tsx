import { useEffect } from 'react'

import Chip from '@/components/display/Chip'
import { FlexColumn } from '@/components/layout/Flex'
import Card from '@/components/surface/Card'
import useIssue from '@/features/issue/hooks/useIssue'
import { Issue, IssueState } from '@/features/issue/types'
import useLabel from '@/features/repository/hooks/useLabel'
import { ViewSettings } from '@/features/view/types'

type LabelAggregationViewProps = {
  view: ViewSettings
}

function makeIssuesGroupByLabel(issues: Issue[]): { [key: string]: Issue[] } {
  const results: { [key: string]: Issue[] } = {}
  for (const issue of issues) {
    issue.labels.forEach((label) => {
      if (Object.keys(results).includes(label.name)) {
        results[label.name].push(issue)
      } else {
        results[label.name] = [issue]
      }
    })
  }
  return results
}

function countIssues(state: IssueState, issues?: Issue[]): number {
  if (issues) {
    return issues.filter((issue) => issue.state === state).length
  }
  return 0
}

export default function LabelAggregationView({ view }: LabelAggregationViewProps) {
  const { load, labels } = useLabel(view.organizationName, view.repositoryName)
  const { load: loadIssues, findIssues } = useIssue(view.organizationName, view.repositoryName)
  const issuesGroupByLabel = makeIssuesGroupByLabel(findIssues())
  useEffect(() => {
    load()
    loadIssues()
  }, [view, load, loadIssues])

  return (
    <FlexColumn>
      {labels.map((label) => (
        <Card key={label.id}>
          <Chip label={label.name} colorCode={`#${label.color}`} />
          {countIssues('open', issuesGroupByLabel[label.name])} /
          {countIssues('closed', issuesGroupByLabel[label.name])}
        </Card>
      ))}
    </FlexColumn>
  )
}
