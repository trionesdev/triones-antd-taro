import {CalendarPicker as InternalCalendarPicker} from "./calendar-picker"
import {CalendarPickerRange} from "./calendar-picker-range";
import {CalendarPickerProps} from "./types"

type CompoundedComponent = typeof InternalCalendarPicker & {
  Range: typeof CalendarPickerRange;
};

const CalendarPicker = InternalCalendarPicker as CompoundedComponent;
CalendarPicker.Range = CalendarPickerRange;

export type {
  CalendarPickerProps
}

export default CalendarPicker;
