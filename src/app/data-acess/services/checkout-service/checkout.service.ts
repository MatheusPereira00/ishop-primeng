import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private paymentComplete = new Subject<any>();
  public paymentComplete$ = this.paymentComplete.asObservable();

  public getTicketInformation(): any {
    return this.ticketInformation;
  }

  public setTicketInformation(ticketInformation: any): void {
    this.ticketInformation = ticketInformation;
  }

  public complete(): void {
    this.paymentComplete.next(this.ticketInformation.personalInformation);
  }

  public ticketInformation = {
    personalInformation: {
      name: '',
      number: null,
    },
    seatInformation: {
      class: null,
      wagon: null,
      seat: null,
    },
    paymentInformation: {
      cardholderName: '',
      cardholderNumber: '',
      date: '',
      cvv: '',
      remember: false,
    },
  };
}
