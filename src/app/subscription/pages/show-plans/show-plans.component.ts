import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClientService} from "../../../my-profile/services/client.service";

@Component({
  selector: 'app-show-plans',
  templateUrl: './show-plans.component.html',
  styleUrls: ['./show-plans.component.css']
})
export class ShowPlansComponent implements OnInit {
  @Input() plans: any;
  @Input() myId!: string;
  @Input() myPlanId!: string;
  @Output() planStatusChangeCreate = new EventEmitter<string>() ;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }

  updatePlanValueFromPlans(str: string) {
    this.planStatusChangeCreate.emit(str);
  }

  async addPlan(planId: any){
    /*await this.clientService.partialUpdate(this.myId, {"planId": planId}).subscribe((response: any) => {
       this.updatePlanValueFromPlans(response.planId);
    })*/
  }

}
