import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { IButtonProps } from './Button'
import { ButtonVariants } from './types'
import '../../assets/css/colors.css'
import '../../assets/css/weight.css'
import '../../assets/css/grid.css'
import '../../assets/css/motion.css'
import '../../assets/css/layers.css'

export default {
  title: 'Custom/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
        options: [
          ButtonVariants.Icon,
          ButtonVariants.Primary,
          ButtonVariants.Secondary,
        ],
      },
    },
  },
} as Meta

const Template: Story<IButtonProps> = (
  args: JSX.IntrinsicAttributes & IButtonProps
) => <Button {...args} />

export const Borderless = Template.bind({})
Borderless.args = {
  children: 'Borderless',
  disabled: false,
}

export const Primary = Template.bind({})
Primary.args = {
  variant: ButtonVariants.Primary,
  children: 'Primary',
  disabled: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: ButtonVariants.Secondary,
  children: 'Secondary',
  disabled: false,
}

export const Icon = Template.bind({})
Icon.args = {
  variant: ButtonVariants.Icon,
  children: 'Icon',
  disabled: false,
}

export const BorderlessDisabled = Template.bind({})
BorderlessDisabled.args = {
  children: 'Borderless',
  disabled: true,
}

export const PrimaryDisabled = Template.bind({})
PrimaryDisabled.args = {
  variant: ButtonVariants.Primary,
  children: 'Primary',
  disabled: true,
}

export const SecondaryDisabled = Template.bind({})
SecondaryDisabled.args = {
  variant: ButtonVariants.Secondary,
  children: 'Secondary',
  disabled: true,
}

export const IconDisabled = Template.bind({})
IconDisabled.args = {
  variant: ButtonVariants.Icon,
  children: 'Icon',
  disabled: true,
}

export const PrimaryBigSize = Template.bind({})
PrimaryBigSize.args = {
  variant: ButtonVariants.Primary,
  children: 'Primary Big Button',
  disabled: false,
  display: 'big',
}

export const SecondaryBigSize = Template.bind({})
SecondaryBigSize.args = {
  variant: ButtonVariants.Secondary,
  children: 'Secondary Big Button',
  disabled: false,
  display: 'big',
}

export const PrimaryWithHref = Template.bind({})
PrimaryWithHref.args = {
  variant: ButtonVariants.Primary,
  children: 'Primary Big Button With Href',
  disabled: false,
  display: 'big',
  href: 'https://www.google.com/',
  role: 'button',
  target: '__blank',
  rel: 'noopener noreferrer',
}
