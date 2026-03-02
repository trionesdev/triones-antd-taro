import {CalendarPicker as InternalCalendarPicker} from "./CalendarPicker"
import {CalendarRangePicker} from "./CalendarRangePicker";

type CompoundedComponent = typeof InternalCalendarPicker & {
  Range: typeof CalendarRangePicker;
};

const CalendarPicker = InternalCalendarPicker as CompoundedComponent;
CalendarPicker.Range = CalendarRangePicker;

export type {
  CalendarPickerProps,
  CalendarPickerRangeProps
} from "./types";


export default CalendarPicker;
