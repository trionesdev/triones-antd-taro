import {CalendarPicker as InternalCalendarPicker} from "./calendar-picker"
import {CalendarRangePicker} from "./calendar-range-picker";
import {CalendarPickerProps} from "./types"

type CompoundedComponent = typeof InternalCalendarPicker & {
  Range: typeof CalendarRangePicker;
};

const CalendarPopup = InternalCalendarPicker as CompoundedComponent;
CalendarPopup.Range = CalendarRangePicker;

export type {
  CalendarPickerProps
}

export default CalendarPopup;
