import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Loading, { LoadingProps } from './Loading'
import '../../assets/css/colors.css'
import '../../assets/css/weight.css'
import '../../assets/css/grid.css'
import '../../assets/css/motion.css'
import '../../assets/css/layers.css'

export default {
  title: 'Custom/Loading',
  component: Loading,
} as Meta

const Template: Story<LoadingProps> = (
  args: JSX.IntrinsicAttributes & LoadingProps
) => <Loading {...args} />

export const LoadingExample = Template.bind({})
LoadingExample.args = {}
