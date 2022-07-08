import React from 'react'
import { Story } from '@storybook/react'

import AwardItem, { AwardItemProps } from '.'

export default {
  component: AwardItem,
  title: 'Section/AwardItem',
}

const Template: Story<AwardItemProps> = (args: AwardItemProps) => (
  <AwardItem {...args} />
)

export const GooglePlayStore = Template.bind({})
GooglePlayStore.args = {
  imgUrl: '/images/play-store2x.png',
  children: (
    <>
      2018 구글 플레이스토어
      <br />
      올해의 앱 최우수상 수상
    </>
  ),
}

export const AppleAppStore = Template.bind({})
AppleAppStore.args = {
  imgUrl: '/images/badge-apple4x.png',
  children: (
    <>
      2018 구글 플레이스토어
      <br />
      올해의 앱 최우수상 수상
    </>
  ),
}
