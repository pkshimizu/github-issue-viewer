import { useEffect } from 'react'

import Chip from '@/components/display/Chip'
import { FlexColumn } from '@/components/layout/Flex'
import Card from '@/components/surface/Card'
import useIssue from '@/features/issue/hooks/useIssue'
import useLabel from '@/features/repository/hooks/useLabel'
import { ViewSettings } from '@/features/view/types'

type LabelAggregationViewProps = {
  view: ViewSettings
}

export default function LabelAggregationView({ view }: LabelAggregationViewProps) {
  const { load, labels } = useLabel(view.organizationName, view.repositoryName)
  const { load: loadIssues } = useIssue(view.organizationName, view.repositoryName)
  useEffect(() => {
    load()
    loadIssues()
  }, [view, load, loadIssues])

  return (
    <FlexColumn>
      {labels.map((label) => (
        <Card key={label.id}>
          <Chip label={label.name} colorCode={`#${label.color}`} />
        </Card>
      ))}
    </FlexColumn>
  )
}
