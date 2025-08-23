import {CalendarPicker as InternalCalendarPicker} from "./calendar-picker"
import {CalendarRangePicker} from "./calendar-range-picker";
import {CalendarPickerProps} from "./types"

type CompoundedComponent = typeof InternalCalendarPicker & {
  Range: typeof CalendarRangePicker;
};

const CalendarPicker = InternalCalendarPicker as CompoundedComponent;
CalendarPicker.Range = CalendarRangePicker;

export type {
  CalendarPickerProps
}

export default CalendarPicker;
