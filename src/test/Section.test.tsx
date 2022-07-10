import React from 'react'
import { render, waitFor } from '@testing-library/react'

import Section from '@/components/Section'

describe('<Section />', () => {
  it('renders ContentLogo correctly', async () => {
    const { getByText } = render(<Section />)

    const ContentLogo = await waitFor(() => getByText('2021년 12월 기준'))

    expect(ContentLogo).toBeInTheDocument()
  })

  it('renders AwardItem correctly', async () => {
    const { getByText } = render(<Section />)

    const AwardItemByGoogle = await waitFor(() =>
      getByText(/2018 구글 플레이스토어/i),
    )
    const AwardItemByApple = await waitFor(() =>
      getByText(/2018 애플 앱스토어/i),
    )

    expect(AwardItemByGoogle).toBeInTheDocument()
    expect(AwardItemByApple).toBeInTheDocument()
  })

  it('renders MetricItem correctly', async () => {
    const { getByText } = render(<Section />)

    const TravelerMetricItem = await waitFor(() => getByText(/700/i))
    const TravelReviewMetricItem = await waitFor(() => getByText(/100/i))
    const TravelPlansMetricItem = await waitFor(() => getByText(/470/i))

    expect(TravelerMetricItem).toBeInTheDocument()
    expect(TravelReviewMetricItem).toBeInTheDocument()
    expect(TravelPlansMetricItem).toBeInTheDocument()
  })
})
