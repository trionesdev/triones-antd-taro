import {CalendarPopup as InternalCalendarPopup} from "./calendar-popup"
import {CalendarRangePopup} from "./calendar-range-popup";
import {CalendarPopupProps} from "./types"

type CompoundedComponent = typeof InternalCalendarPopup & {
  Range: typeof CalendarRangePopup;
};

const CalendarPopup = InternalCalendarPopup as CompoundedComponent;
CalendarPopup.Range = CalendarRangePopup;

export type {
  CalendarPopupProps
}

export default CalendarPopup;
