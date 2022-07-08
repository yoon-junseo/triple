import React from 'react'
import { Story } from '@storybook/react'

import MetricItem, { MetricItemProps } from '.'

export default {
  component: MetricItem,
  title: 'Section/MetricItem',
}

const Template: Story<MetricItemProps> = (args: MetricItemProps) => (
  <MetricItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
  endNumber: 700,
  duration: 2000,
  unit: '만 명',
  content: '의 여행지',
}
