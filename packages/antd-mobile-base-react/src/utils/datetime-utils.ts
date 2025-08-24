export class DatetimeUtils {
  static twoDigits(n: number): string {
    return n < 10 ? '0' + n : n.toString();
  }
}
