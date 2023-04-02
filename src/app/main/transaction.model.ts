export class TransactionModel {
  public date: string;
  public designation: string;
  public type: string;
  public tag: string;
  public note: string;
  public amount: number;
  public currency: string;

  constructor(
    date: string,
    design: string,
    type: string,
    tag: string,
    note: string,
    amount: number,
    currency: string
  ) {
    this.date = date;
    this.designation = design;
    this.type = type;
    this.tag = tag;
    this.note = note;
    this.amount = amount;
    this.currency = currency;
  }
}
