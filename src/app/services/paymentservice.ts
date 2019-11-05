import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from '../domain/payment';

@Injectable()
export class PaymentService {

    constructor(private http: HttpClient) { }

    getPayments() {
        return this.http.get<any>('assets/data/payments.json')
            .toPromise()
            .then(res => <Payment[]>res.data)
            .then(data => data);
    }
}
