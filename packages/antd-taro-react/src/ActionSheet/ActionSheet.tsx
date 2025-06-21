import React, {FC} from "react"
import Popup from "../Popup";
import classNames from "classnames";
import "./style.scss"

const cls = 'triones-antm-action-sheet'

type ActionSheetActionItemType = {
  key?: any;
  children?: React.ReactNode;
  onClick?: () => void;
}

type ActionSheetProps = {
  className?: string;
  style?: React.CSSProperties;
  open?: boolean;
  afterOpenChange?: (open: boolean) => void;
  title?: React.ReactNode;
  actions?: ActionSheetActionItemType[];
  cancel?: React.ReactNode | false;
  onCancel?: () => void;
  onClose?: () => void;
  /**
   * @description 点击操作项后是否关闭
   * @default true
   */
  closeAfterClickAction?: boolean;
}

export const ActionSheet: FC<ActionSheetProps> = ({
                                                    className, style,
                                                    open,
                                                    afterOpenChange,
                                                    title,
                                                    actions,
                                                    cancel,
                                                    onCancel,
                                                    onClose,
                                                    closeAfterClickAction = true
                                                  }) => {
  const [innerOpen, setInnerOpen] = React.useState(open || false);

  const handleClose = () => {
    setInnerOpen(false)
    onClose?.()
  }

  React.useEffect(() => {
    if (open === undefined) {
      return;
    }
    if (open === innerOpen) {
      return;
    }
    setInnerOpen(open)
  }, [open])

  React.useEffect(() => {
    afterOpenChange?.(innerOpen)
  }, [innerOpen])

  return <Popup open={open} afterClose={() => {
    setInnerOpen(false)
  }}>
    <div className={classNames(cls, className)} style={style}>
      <div className={classNames(`${cls}-body`)}>
        {title && <div className={classNames(`${cls}-title`)}>{title}</div>}
        {actions && <div className={classNames(`${cls}-actions`)}>{actions.map((action) => {
          return <div className={`${cls}-actions-item`} key={action.key} onClick={() => {
            action.onClick?.()
            if (closeAfterClickAction) {
              handleClose()
            }
          }}>{action.children}</div>
        })}</div>}
      </div>
      {cancel !== false && <div className={classNames(`${cls}-cancel`)} onClick={() => {
        onCancel?.()
        handleClose()
      }}>
        {cancel || <div>取消</div>}
      </div>}
    </div>
  </Popup>
}
