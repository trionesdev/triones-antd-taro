import React, {FC} from "react"

const cls = 'triones-antm-form'

export const ErrorList: FC<{ errors?: string[] }> = ({errors}) => {
  if (!errors || !errors.length) return null;
  return <div className={`${cls}-item-explain-error`}>{errors?.join(',')}</div>
}
