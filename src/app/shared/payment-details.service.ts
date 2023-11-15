import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { PaymentDetails } from './payment-details.model';
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {
  url:string=environment.apiBaseUrl+'/PaymentDetails'
  list :PaymentDetails[] = [];
  formData : PaymentDetails=new PaymentDetails()
  constructor(private http:HttpClient) { }

  refreshList(){
    this.http.get(this.url)
    .subscribe({
      next:res=>{
        this.list = res as PaymentDetails[]
      },
      error:err=>{console.log(err)}
    })
  }

  postPaymentDetail(){
    return this.http.post(this.url, this.formData)
  }
}
