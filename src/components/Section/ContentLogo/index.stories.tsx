import React from 'react'
import { Story } from '@storybook/react'

import ContentLogo, { ContentLogoProps } from '.'

export default {
  component: 'ContentLogo',
  title: 'Section/ContentLogo',
}

const Template: Story<ContentLogoProps> = (args: ContentLogoProps) => (
  <ContentLogo {...args} />
)

export const Default = Template.bind({})
Default.args = {
  duration: '700ms',
  delay: '0ms',
  children: <>2021년 12월 기준</>,
}
