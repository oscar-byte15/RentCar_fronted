import {Component, OnInit} from '@angular/core';
import {PlansService} from "../../services/plans.service";
import {Plan} from "../../model/plan";
import {ActivatedRoute} from "@angular/router";
import {ClientService} from "../../../my-profile/services/client.service";
import {Client} from "../../../my-profile/model/client";
import {Parser} from "@angular/compiler";

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  plans!: Plan[];
  clientData!: Client;

  constructor(
    private subscriptionService: PlansService,
    private clientService: ClientService,
  )  { }

  ngOnInit(): void {
    this.retrievePlans();
    this.retrieveClient();
  }

  retrieveClient(): void {

    /*let clientId: number =  JSON.parse(localStorage.getItem('clientId') ? "" : localStorage.getItem('clientId')).id;

    this.clientService.getById(clientId).subscribe((response: any) => {
      this.clientData = response;
    });*/
  }

  retrievePlans() {
    /*this.subscriptionService.getPlans().subscribe((response: any) => {
      this.plans = response;
    });*/
  }

  deletePlanStatusChange(ev: any) {
    this.clientData.planId = ev;
  }

  createPlanStatusChange(ev: any) {
    this.clientData.planId = ev;
  }
}
