import {FC, useEffect, useMemo, useState} from "react";
import Popup from "../Popup";
import PickerView from "../PickerView";
import React from "react";
import {Mode} from "./types";
import classNames from "classnames";

import ConfigProvider from "../ConfigProvider";
import {isEqual} from "lodash-es";
import dayjs from "dayjs";

const cls = 'triones-antm-date-picker'

export type DatePickerPops = {
  open?: boolean
  onClose?: () => void
  title?: React.ReactNode
  mode?: Mode
  format?: string
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
  second?: number
}

export const DatePicker: FC<DatePickerPops> = ({
                                                    open,
                                                    onClose,
                                                    title,
                                                    mode = 'date',
                                                    format,
                                                    showTime,
                                                    value,
                                                    onOk,
                                                    minDate,
                                                    maxDate
                                                  }) => {
  const cleanFormat = format?.replace(/\[([^\]]+)\]/g, '')
  const hasYear = cleanFormat?.includes('Y')
  const hasMouth = cleanFormat?.includes('M')
  const hasDate = cleanFormat?.includes('D')

  const hasHour = cleanFormat?.includes('H')
  const hasMinute = cleanFormat?.includes('m')
  const hasSecond = cleanFormat?.includes('s')

  const {locale} = ConfigProvider.useConfig();
  const [internalValue, setInternalValue] = useState<InternalValueType>({
    year: value?.year() || dayjs().year(),
    mouth: (value?.month() || dayjs().month()) + 1,
    date: value?.date() || dayjs().date(),
    hour: value?.hour() || dayjs().hour(),
    minute: value?.minute() || dayjs().minute(),
    second: value?.second() || dayjs().second(),
  })


  const years = useMemo(() => {
    if (minDate && maxDate) {
      return Array.from({length: maxDate.year() - minDate.year() + 1}, (_, i) => minDate.year() + i)
    }
    if (minDate) {
      return Array.from({length: 100}, (_, i) => minDate.year() + i)
    }
    if (maxDate) {
      return Array.from({length: maxDate.year() - dayjs().year() + 1}, (_, i) => dayjs().year() + i)
    }
    const startYear = dayjs().year() + 30 - 100;
    return Array.from({length: 100}, (_, i) => startYear + i)
  }, [internalValue.year, minDate, maxDate])

  const mouths = useMemo(() => {
    let start = 0
    let end = 11
    if (minDate && minDate.year() === internalValue.year) {
      start = minDate.month()
    }
    if (maxDate && maxDate.year() === internalValue.year) {
      end = maxDate.month()
    }
    return Array.from({length: end - start }, (_, i) => start + i + 1)
  }, [internalValue.year, minDate, maxDate])


  const days = useMemo(() => {
    let start = 1
    let end = dayjs().year(internalValue.year || dayjs().year()).month((internalValue.mouth || 1) - 1).daysInMonth()

    if (minDate && minDate.year() === internalValue.year && minDate.month() + 1 === internalValue.mouth) {
      start = minDate.date()
    }
    if (maxDate && maxDate.year() === internalValue.year && maxDate.month() + 1 === internalValue.mouth) {
      end = maxDate.date()
    }
    return Array.from({length: end - start + 1}, (_, i) => start + i)
  }, [internalValue.year, internalValue.mouth, minDate, maxDate])

  const hours = Array.from({length: 24}, (_, i) => i)
  const minutes = Array.from({length: 60}, (_, i) => i)
  const seconds = Array.from({length: 60}, (_, i) => i)


  const columns: any[] = useMemo(() => {

    if (mode === 'date') {
      const dateColumns = []
      if (!format) {
        dateColumns.push(
          years.map((v) => ({label: `${v}年`, value: v})),
          mouths.map((v) => ({label: `${v}月`, value: v})),
          days.map((v) => ({label: `${v}日`, value: v})),
        )
      } else {
        if (hasYear) {
          dateColumns.push(
            years.map((v) => ({label: `${v}年`, value: v})),
          )
        }
        if (hasMouth) {
          dateColumns.push(
            mouths.map((v) => ({label: `${v}月`, value: v})),
          )
        }
        if (hasDate) {
          dateColumns.push(
            days.map((v) => ({label: `${v}日`, value: v})),
          )
        }
      }
      if (showTime) {
        if (hasHour) {
          dateColumns.push(
            hours.map((v) => ({label: `${v}时`, value: v})),
          )
        }
        if (hasMinute) {
          dateColumns.push(
            minutes.map((v) => ({label: `${v}分`, value: v})),
          )
        }
        if (hasSecond) {
          dateColumns.push(
            seconds.map((v) => ({label: `${v}秒`, value: v})),
          )
        }
      }
      return dateColumns
    } else if (mode === 'time') {
      const timeColumns = [];
      if (!format) {
        timeColumns.push(
          hours.map((v) => ({label: `${v}时`, value: v})),
          minutes.map((v) => ({label: `${v}分`, value: v})),
          seconds.map((v) => ({label: `${v}秒`, value: v})),
        )
      } else {
        if (hasHour) {
          timeColumns.push(
            hours.map((v) => ({label: `${v}时`, value: v})),
          )
        }
        if (hasMinute) {
          timeColumns.push(
            minutes.map((v) => ({label: `${v}分`, value: v})),
          )
        }
        if (hasSecond) {
          timeColumns.push(
            seconds.map((v) => ({label: `${v}秒`, value: v})),
          )
        }
      }
      return timeColumns
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
      || value.second() !== internalValue.second
    ) {
      setInternalValue({
        year: value.year(),
        mouth: value.month() + 1,
        date: value.date(),
        hour: value.hour(),
        minute: value.minute(),
        second: value.second(),
      })
    }

  }, [value]);

  const pickerValue = useMemo(() => {
    if (mode === 'time') {
      return [
        internalValue.hour,
        internalValue.minute,
        internalValue.second,
      ]
    } else if (mode === 'date') {
      if (showTime) {
        return [
          internalValue.year,
          internalValue.mouth,
          internalValue.date,
          internalValue.hour,
          internalValue.minute,
          internalValue.second,
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

  return <Popup open={open} onClose={onClose} round={true}>
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
