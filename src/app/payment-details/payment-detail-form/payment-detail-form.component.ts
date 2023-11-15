import { Component } from '@angular/core';
import { PaymentDetailsService } from '../../shared/payment-details.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetails } from '../../shared/payment-details.model';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: ``
})
export class PaymentDetailFormComponent {
  constructor(public service:PaymentDetailsService,private toastr:ToastrService){
  
  }

  onSubmit(form:NgForm){
    this.service.postPaymentDetail()
    .subscribe({
      next:res=>{
       this.service.list=res as PaymentDetails[]
       form.resetForm(form)
       this.toastr.success('')
      },
      error:err=>{console.log(err)}
    })
  }
}
