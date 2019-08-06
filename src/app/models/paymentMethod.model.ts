export class PaymentMethod {

  constructor(id: number, description: string) {
    this.id = id;
    this.description = description;
  }

  id: number;
  description: string;
}
