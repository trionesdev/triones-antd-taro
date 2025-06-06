import React from 'react'
import type { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../utils/native-props'
import Divider from '../Divider'
import './style.scss'
import { mergeProps } from '../utils/with-default-props'

const classPrefix = `triones-antm-footer`

export type LinkItem = {
  text: string
  href: string
}

export type ChipItem = {
  text: ReactNode
  type?: 'plain' | 'link'
}

export type FooterProps = {
  label?: ReactNode
  links?: LinkItem[]
  content?: ReactNode
  chips?: ChipItem[]
  onChipClick?: (item: ChipItem, index: number) => void
  onLinkClick?: (item: LinkItem, index: number) => void
} & NativeProps<'--background-color'>

const defaultProps: FooterProps = {
  label: '',
  links: [],
  content: '',
  chips: [],
}

export const Footer: FC<FooterProps> = p => {
  const props = mergeProps(defaultProps, p) as FooterProps
  const { label, links, content, chips, onChipClick, onLinkClick } = props

  const clickChipItem = (item: ChipItem, index: number) => {
    if (chips?.length && item.type === 'link') {
      onChipClick?.(item, index)
    }
  }

  const clickLinkItem = (
    item: LinkItem,
    index: number
  ) => {
    if (onLinkClick) {
      onLinkClick(item, index)
    }
  }
  return withNativeProps(
    props,
    <div className={classNames(classPrefix)}>
      {label && (
        <div className={`${classPrefix}-label`}>
          <Divider>{label}</Divider>
        </div>
      )}
      {!!links?.length && (
        <div className={`${classPrefix}-links`}>
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <div
                className={`${classPrefix}-links-item`}
                onClick={() => clickLinkItem(link, index)}
              >
                {link.text}
              </div>
              {index !== links.length - 1 && <Divider direction='vertical' />}
            </React.Fragment>
          ))}
        </div>
      )}
      {content && <div className={`${classPrefix}-content`}>{content}</div>}
      {chips && chips.length > 0 && (
        <div className={`${classPrefix}-chips`}>
          {chips.map((chip, index) => (
            <div
              key={index}
              onClick={() => clickChipItem(chip, index)}
              className={classNames(`${classPrefix}-chip`, {
                [`${classPrefix}-chip-link`]: chip.type === 'link',
              })}
            >
              {chip.text}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

