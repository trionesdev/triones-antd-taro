import dayjs, {OpUnitType} from "dayjs";
import {isEmpty, isNil} from "lodash-es";

export const toDayjsArray = (dateArr?: (dayjs.Dayjs | Date)[]): dayjs.Dayjs[] | undefined => {
  if (isNil(dateArr)) {
    return dateArr;
  }
  if (isEmpty(dateArr)) {
    return []
  }
  return dateArr?.map(date => {
    if (isNil(date)) {
      return date
    } else {
      return dayjs(date)
    }
  }) as dayjs.Dayjs[];
}

export const isSame = (x?: dayjs.Dayjs | Date, y?: dayjs.Dayjs | Date, unit?: OpUnitType): boolean => {
  if (isNil(x) && isNil(y)) {
    return true
  } else if (isNil(x) && !isNil(y)) {
    return false
  } else if (!isNil(x) && isNil(y)) {
    return false
  } else {
    return Boolean(dayjs(x)?.isSame(y, unit))
  }
}
