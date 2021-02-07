import React, { ReactNode } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import '../../assets/css/colors.css'
import '../../assets/css/weight.css'
import '../../assets/css/grid.css'
import '../../assets/css/motion.css'
import '../../assets/css/layers.css'
import Card from './Card'
import Button, { ButtonVariants } from 'components/Button'

export default {
  title: 'Custom/Card',
  component: Card,
} as Meta

interface ICardStories {
  variant: string
  children: ReactNode
  disabled: boolean
  items: string[]
  args: JSX.IntrinsicAttributes & ICardStories
}
const Template: Story<ICardStories> = ({
  variant,
  children,
  disabled,
  items,
  args,
  ...others
}: ICardStories) => (
  <Card>
    {items?.map((item) => (
      <Button variant={ButtonVariants.Primary} children={item} />
    ))}
  </Card>
)

export const ButtonCard = Template.bind({})
ButtonCard.args = { items: ['1', '2', '3'] }
