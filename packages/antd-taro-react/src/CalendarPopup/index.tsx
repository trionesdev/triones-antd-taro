import {CalendarPopup as InternalCalendarPopup} from "./CalendarPopup"
import {CalendarRangePopup} from "./CalendarRangePopup";

type CompoundedComponent = typeof InternalCalendarPopup & {
  Range: typeof CalendarRangePopup;
};

const CalendarPopup = InternalCalendarPopup as CompoundedComponent;
CalendarPopup.Range = CalendarRangePopup;

export type {
  CalendarPopupProps,
  CalendarPopupRangeProps
} from "./types";
 

export default CalendarPopup;
