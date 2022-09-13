import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClientService} from "../../../my-profile/services/client.service";
import {PlansService} from "../../services/plans.service";

@Component({
  selector: 'app-card-my-subscription',
  templateUrl: './card-my-subscription.component.html',
  styleUrls: ['./card-my-subscription.component.css']
})
export class CardMySubscriptionComponent implements OnInit {
  @Input() myId!: string;
  @Input() myPlanId!: string;
  @Output() planStatusChangeDelete = new EventEmitter<string>() ;
  plan: any;

  constructor(
    private clientService: ClientService,
    private subscriptionService: PlansService
  ) { }

  ngOnInit(): void {
    this.retrieveMyPlan(this.myPlanId);
  }

  updatePlanValueFromMySubscription(str: string) {
    this.planStatusChangeDelete.emit(str);
  }

  async deletePlan(){
    /*await this.clientService.partialUpdate(this.myId, {"planId": ""}).subscribe((response: any) => {
      this.updatePlanValueFromMySubscription("");
    })*/
  }

  async retrieveMyPlan(id: any) {
    await this.subscriptionService.getById(id).subscribe((response: any) => {
      this.plan = response;
    });
  }

}
