import { Calendar as InternalCalendar, CalendarProps } from './calendar';
import { CalendarGrid, CalendarGridProps } from './calendar-grid';
import { TouchableCalendarGrid } from './touchable-calendar-grid';
import { CalendarRange } from './calendar-range';

export { CalendarGrid, TouchableCalendarGrid };

type CompoundedComponent = typeof InternalCalendar & {
  Range: typeof CalendarRange;
};
const Calendar = InternalCalendar as CompoundedComponent;
Calendar.Range = CalendarRange;

export type { CalendarProps, CalendarGridProps };

export default Calendar;
