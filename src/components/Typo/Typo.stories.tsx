import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Typo, { TypoProps } from './Typo'
import '../../assets/css/colors.css'
import '../../assets/css/weight.css'
import '../../assets/css/grid.css'
import '../../assets/css/motion.css'
import '../../assets/css/layers.css'
import { TypoColors, TypoVariants, TypoAlignment } from './types'

export default {
  title: 'Custom/Typo',
  component: Typo,
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
        options: [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'body1',
          'body2',
          'button',
          'subTitle',
        ],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['black', 'greyDark', 'greyMedium', 'blue', 'red'],
      },
    },
  },
} as Meta

const Template: Story<TypoProps<any>> = (
  args: JSX.IntrinsicAttributes & TypoProps<any>
) => <Typo {...args} />

export const VariantH1 = Template.bind({})
VariantH1.args = {
  variant: TypoVariants.h1,
  children: 'Variant h1',
}

export const VariantH2 = Template.bind({})
VariantH2.args = {
  variant: TypoVariants.h2,
  children: 'Variant h2',
}

export const VariantH3 = Template.bind({})
VariantH3.args = {
  variant: TypoVariants.h3,
  children: 'Variant h3',
}

export const VariantH4 = Template.bind({})
VariantH4.args = {
  variant: TypoVariants.h4,
  children: 'Variant h4',
}

export const VariantH5 = Template.bind({})
VariantH5.args = {
  variant: TypoVariants.h5,
  children: 'Variant h5',
}

export const VariantBody1 = Template.bind({})
VariantBody1.args = {
  variant: TypoVariants.body1,
  children: 'Variant body 1',
}

export const VariantBody2 = Template.bind({})
VariantBody2.args = {
  variant: TypoVariants.body2,
  children: 'Variant body 2',
}

export const VariantButton = Template.bind({})
VariantButton.args = {
  variant: TypoVariants.button,
  children: 'Variant button',
}

export const VariantSubtitle = Template.bind({})
VariantSubtitle.args = {
  variant: TypoVariants.subTitle,
  children: 'Variant subTitle',
}

export const BlackColor = Template.bind({})
BlackColor.args = {
  color: TypoColors.black,
  children: 'Black',
}

export const GreyDarkColor = Template.bind({})
GreyDarkColor.args = {
  color: TypoColors.greyDark,
  children: 'Grey Dark',
}

export const GreyMediumColor = Template.bind({})
GreyMediumColor.args = {
  color: TypoColors.greyMedium,
  children: 'Grey Medium',
}

export const BlueColor = Template.bind({})
BlueColor.args = {
  color: TypoColors.blue,
  children: 'Blue',
}

export const RedColor = Template.bind({})
RedColor.args = {
  color: TypoColors.red,
  children: 'Red',
}

export const AlignCenterWithDivTag = Template.bind({})
AlignCenterWithDivTag.args = {
  color: TypoColors.red,
  children: 'Align Center',
  tag: 'div',
  align: TypoAlignment.middle,
}
