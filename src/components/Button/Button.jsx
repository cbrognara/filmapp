import React from 'react'
import { Icon } from '../Icon'
import { Btn } from './Button-styles'

export function Button({ iconName, title, selected, children }) {
  return (
    <Btn type="button">
      <Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'} />
      {children}
    </Btn>
  )
}
