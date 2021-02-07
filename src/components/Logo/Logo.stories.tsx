import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Logo, { ILogoProps } from './Logo'
import '../../assets/css/colors.css'
import '../../assets/css/weight.css'
import '../../assets/css/grid.css'
import '../../assets/css/motion.css'
import '../../assets/css/layers.css'

export default {
  title: 'Custom/Logo',
  component: Logo,
} as Meta

const Template: Story<ILogoProps> = (
  args: JSX.IntrinsicAttributes & ILogoProps
) => <Logo {...args} />

export const LogoWithCompanyName = Template.bind({})
LogoWithCompanyName.args = {
  company: 'Expresso Media',
}

export const LogoWithImage = Template.bind({})
LogoWithImage.args = {
  company: 'Expresso Media',
  logo:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-vlO8qzRzLVaKMf9u0nRq6ZNhYFCDwdYJiA&usqp=CAU',
}
