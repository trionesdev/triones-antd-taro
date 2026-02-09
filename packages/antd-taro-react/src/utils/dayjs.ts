import dayjs, {ConfigType, OpUnitType} from "dayjs";

export const isSame = (x?: dayjs.Dayjs, y?: dayjs.Dayjs, unit?: OpUnitType): boolean => {
  if (x == null && y == null) {
    return true
  } else if (x == null && y != null) {
    return false
  } else if (x != null && y == null) {
    return false
  } else {
    return Boolean(x?.isSame(y, unit))
  }
}
