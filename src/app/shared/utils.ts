export class Utils {
  static convertDateToISOFormat(date: Date) {
    return date.toISOString().split('T')[0];
  }

  static substractMonths(monthNb: number): Date {
    const date: Date = new Date();
    date.setMonth(date.getMonth() - monthNb);

    return date;
  }
}