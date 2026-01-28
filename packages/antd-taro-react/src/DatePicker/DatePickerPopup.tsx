import {FC, useEffect, useMemo, useState} from "react";
import Popup from "../Popup";
import PickerView from "../PickerView";
import React from "react";
import {Mode} from "./types";
import classNames from "classnames";

import ConfigProvider from "../ConfigProvider";
import {isEqual} from "lodash-es";
import dayjs from "dayjs";

const cls = 'triones-antm-date-picker-popup'

type DatePickerPopupPops = {
  open?: boolean
  onClose?: () => void
  title?: React.ReactNode
  mode?: Mode
  showTime?: boolean
  value?: dayjs.Dayjs,
  onOk?: (value: dayjs.Dayjs) => void
  minDate?: dayjs.Dayjs,
  maxDate?: dayjs.Dayjs
}

type InternalValueType = {
  year?: number,
  mouth?: number,
  date?: number,
  hour?: number,
  minute?: number
}

const DatePickerPopup: FC<DatePickerPopupPops> = ({
                                                    open,
                                                    onClose,
                                                    title,
                                                    mode = 'date',
                                                    showTime,
                                                    value,
                                                    onOk,
                                                    minDate,
                                                    maxDate
                                                  }) => {
  const {locale} = ConfigProvider.useConfig();
  const [internalValue, setInternalValue] = useState<InternalValueType>({
    year: value?.year() || dayjs().year(),
    mouth: (value?.month() || dayjs().month()) + 1,
    date: value?.date() || dayjs().date(),
    hour: value?.hour() || dayjs().hour(),
    minute: value?.minute() || dayjs().minute(),
  })
  const [years, setYears] = useState<any[]>([])
  const mouths = Array.from({length: 12}, (_, i) => i + 1)
  const [days, setDays] = useState<any[]>([])
  const hours = Array.from({length: 24}, (_, i) => i)
  const minutes = Array.from({length: 60}, (_, i) => i)

  useEffect(() => {
    const startYear = new Date().getFullYear() + 30 - 100;
    setYears(Array.from({length: 100}, (_, i) => startYear + i))
  }, [internalValue.year])

  useEffect(() => {
    setDays(Array.from(
      {length: new Date(internalValue.year || new Date().getFullYear(), internalValue.mouth || 1, 0).getDate()},
      (_, i) => i + 1
    ))
  }, [internalValue.year, internalValue.mouth]);

  const columns: any[] = useMemo(() => {
    if (mode === 'date') {
      const dateColumns = [
        years.map((v) => ({label: `${v}年`, value: v})),
        mouths.map((v) => ({label: `${v}月`, value: v})),
        days.map((v) => ({label: `${v}日`, value: v})),
      ]
      if (showTime) {
        dateColumns.push(
          hours.map((v) => ({label: `${v}时`, value: v})),
          minutes.map((v) => ({label: `${v}分`, value: v})),
        )
      }
      return dateColumns
    } else if (mode === 'time') {
      return [
        hours.map((v) => ({label: `${v}时`, value: v})),
        minutes.map((v) => ({label: `${v}分`, value: v})),
      ]
    }
    return []
  }, [mode, showTime, years, days])

  const handleOk = () => {
    const now = dayjs()
    onOk?.(dayjs(new Date(internalValue.year || now.year(), (internalValue.mouth || now.month()) - 1,
      internalValue.date || now.date(), internalValue.hour || now.hour(), internalValue.minute || now.minute())))
    onClose?.()
  }

  const handelCancel = () => {
    onClose?.()
  }

  const handleValueChange = (value: any[]) => {
    console.log("value", value)
    const changedValue: InternalValueType = {...internalValue}
    if (mode === 'date') {
      changedValue.year = value[0]
      changedValue.mouth = value[1]
      changedValue.date = value[2]
      if (showTime) {
        changedValue.hour = value[3]
        changedValue.minute = value[4]
      }
    } else if (mode === 'time') {
      changedValue.hour = value[0]
      changedValue.minute = value[1]
    }
    if (!isEqual(internalValue, changedValue)) {
      console.log("internalValue", internalValue)
      console.log("dateValue", changedValue)
      setInternalValue(changedValue)
    }
  }

  useEffect(() => {
    if (value === undefined) {
      return
    }
    if (
      value.year() !== internalValue.year
      || (value.month() + 1) !== internalValue.mouth
      || value.date() !== internalValue.date
      || value.hour() !== internalValue.hour
      || value.minute() !== internalValue.minute
    ) {
      setInternalValue({
        year: value.year(),
        mouth: value.month() + 1,
        date: value.date(),
        hour: value.hour(),
        minute: value.minute(),
      })
    }

  }, [value]);

  const pickerValue = useMemo(() => {
    if (mode === 'time') {
      return [
        internalValue.hour,
        internalValue.minute,
      ]
    } else if (mode === 'date') {
      if (showTime) {
        return [
          internalValue.year,
          internalValue.mouth,
          internalValue.date,
          internalValue.hour,
          internalValue.minute,
        ]
      } else {
        return [
          internalValue.year,
          internalValue.mouth,
          internalValue.date,
        ]
      }
    }
  }, [internalValue])

  return <Popup open={open} onClose={onClose}>
    <div className={classNames(`${cls}`)}>
      <div className={classNames(`${cls}-header`)}>
        <a
          className={classNames(
            `${cls}-header-button`,
            `${cls}-header-button-cancel`,
          )}
          onClick={handelCancel}
        >
          {locale.common.cancel}
        </a>
        {title && (
          <div className={classNames(`${cls}-header-title`)}>{title}</div>
        )}
        <a
          className={classNames(
            `${cls}-header-button`,
            `${cls}-header-button-ok`,
          )}
          onClick={handleOk}
        >
          {locale.common.confirm}
        </a>
      </div>
      <div className={classNames(`${cls}-body`)}>
        <PickerView columns={columns} value={pickerValue} onChange={(v) => {
          console.log(v)
          handleValueChange(v)
        }}/>
      </div>
    </div>

  </Popup>
}
export default DatePickerPopup
