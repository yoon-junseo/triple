import React from 'react'

import ContentLogo from '@/components/Section/ContentLogo'
import AwardItem from '@/components/Section/AwardItem'
import MetricItem from '@/components/Section/MetricItem'

import * as Styled from './style'

const Section = () => {
  return (
    <Styled.Container>
      <Styled.ResponsiveContainer>
        <ContentLogo duration="700ms" delay="0ms">
          2021년 12월 기준
        </ContentLogo>
        <Styled.MetricsContainer duration="700ms" delay="100ms">
          <MetricItem
            endNumber={700}
            duration={2000}
            unit="만 명"
            content="의 여행자"
          />
          <MetricItem
            endNumber={100}
            duration={2000}
            unit="만 개"
            content="의 여행 리뷰"
          />
          <MetricItem
            endNumber={470}
            duration={2000}
            unit="만 개"
            content="의 여행 일정"
          />
        </Styled.MetricsContainer>
        <Styled.AwardsContainer duration="700ms" delay="200ms">
          <AwardItem imgUrl="/images/play-store2x.png">
            2018 구글 플레이스토어
            <br />
            올해의 앱 최우수상 수상
          </AwardItem>
          <AwardItem imgUrl="/images/badge-apple4x.png">
            2018 애플 앱스토어
            <br />
            오늘의 여행앱 선정
          </AwardItem>
        </Styled.AwardsContainer>
      </Styled.ResponsiveContainer>
    </Styled.Container>
  )
}

export default Section
