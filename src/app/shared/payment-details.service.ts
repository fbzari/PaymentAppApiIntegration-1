import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { PaymentDetails } from './payment-details.model';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {
  url:string=environment.apiBaseUrl+'/PaymentDetails'
  list :PaymentDetails[] = [];
  formData : PaymentDetails=new PaymentDetails()
  formSubmitted:boolean=false;
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

  putPaymentDetail(){
    return this.http.put(this.url+'/'+this.formData.paymentDetailId, this.formData)
  }

  deletePaymentDetail(id:number){
    return this.http.delete(this.url+'/'+id)
  }

  resetForm(form:NgForm){
    form.form.reset()
    this.formData=new PaymentDetails()
    this.formSubmitted=false
  }
}
