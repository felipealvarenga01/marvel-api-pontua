import React from 'react'
import icons, { IconName } from './icons-config'

type Props = {
  className?: string
  iconType?: 'duotone' | 'solid' | 'outline'
  iconName: IconName
}

const KTIcon: React.FC<Props> = ({className = '', iconType = 'duotone', iconName}) => {
  
  return (
    <i className={`ki-${iconType} ki-${icons[iconName].name}${className && ' ' + className}`}>
      {iconType === 'duotone' &&
        [...Array(icons[iconName].path)].map((e, i) => {
          return (
            <span
              key={`${iconType}-${icons[iconName].name}-${className}-path-${i + 1}`}
              className={`path${i + 1}`}
            />
          )
        })}
    </i>
  )
}

export {KTIcon}
