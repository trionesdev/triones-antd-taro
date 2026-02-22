import {CalendarPickerCell as InternalCalendarPickerCell, CalendarPickerCellProps} from "./CalendarPickerCell"
import {CalendarRangePickerCell, CalendarRangePickerCellProps} from "./CalendarRangePickerCell"


type CompoundedComponent = typeof InternalCalendarPickerCell & {
  Range: typeof CalendarRangePickerCell;
};

const CalendarPickerCell = InternalCalendarPickerCell as CompoundedComponent;
CalendarPickerCell.Range = CalendarRangePickerCell;

export type {
  CalendarPickerCellProps,
  CalendarRangePickerCellProps
}
export default CalendarPickerCell;
