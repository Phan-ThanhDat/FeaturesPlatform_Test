import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import '../../assets/css/colors.css'
import '../../assets/css/weight.css'
import '../../assets/css/grid.css'
import '../../assets/css/motion.css'
import '../../assets/css/layers.css'
import Topbar from './Topbar'
import Logo from 'components/Logo'
import Typo, { TypoColors, TypoVariants } from 'components/Typo'

export default {
  title: 'Custom/Topbar',
  component: Topbar,
} as Meta

interface ITopbarStories {
  company: string
  logo: string
  tag: string
  variant: TypoVariants
  color: TypoColors
  text: string
  args: JSX.IntrinsicAttributes & ITopbarStories
}

const Template: Story<ITopbarStories> = ({
  company,
  logo,
  tag,
  variant,
  color,
  text,
  args,
  ...others
}: ITopbarStories) => (
  <Topbar>
    <Logo company={company} logo={logo} />
    <Typo tag="div" variant={variant} color={color} children={text} />
  </Topbar>
)

export const GoodTopbar = Template.bind({})
GoodTopbar.args = {
  company: 'Expresso Media',
  logo:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-vlO8qzRzLVaKMf9u0nRq6ZNhYFCDwdYJiA&usqp=CAU',
  variant: TypoVariants.h4,
  color: TypoColors.greyDark,
  text: 'Expresso Media',
}
