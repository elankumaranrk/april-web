import { Injectable } from '@angular/core';

@Injectable()
export class AprilWebService {

  constructor() { }

  cardData(): Array<Object> {
    return [
      {
        title: "General Updates",
        articles: [{ d: "3/7", t: "Retirement Foundation Product to be launched on April 17, 2017" },
        { d: "3/5", t: "Participate in monthly drawing to win $500 prepaid gift card" },
        { d: "3/1", t: "Life Insurance policy holders get 30 more days to pay premium" }],
        cardImage: "/assets/img/playground-features-doodles.jpg",
        hint:"Keep you upto date with the general news and updates on Allianz products and services",
        added: "true"
      },
      {
        title: "Commissions",
        articles: [{ d: "2/21", t: "Your estimated total commission amount for the current year is $38,245.76" },
        { d: "3/1", t: "Your estimated current month commission amount $3,129.00" },
        { d: "3/3", t: "Life Insurance policy holders get 30 more days to pay premium" }],
        cardImage: "/assets/img/playground-features-trends.jpg",
         hint:"Know what's your weekly and monthly Commissions earned by you from both Life & Annuties sale",
        added: "true"
      },
      {
        title: "TO-DO's List",
        articles: [{ d: "2/28", t: "Product Life Pro Plus 8 ready for sale from 7th June, 2017" },
        { d: "2/28", t: "Stale address encountered for the policy owner, 60084939", action: "required", chatConv: "Change address for the owner of the policy 60084939", new: "true" },
        { d: "3/4", t: "Stock Advisor:PIMCO's stock prices are soaring this week! Revise your allocations", action: "required", chatConv: "Do an allocation change" }],
        cardImage: "/assets/img/pending.jpg",
        hint:"Alerts & notitications to do!",
        added: "true"
      },
      {
        title: "Support",
        articles: [{ d: "2/28", t: "Enquiry on existing claims" },
        { d: "2/28", t: "Take your learning & practice to the next level" },
        { d: "3/4", t: "Life Insurance policy holders get 30 more days to pay premium" }],
        cardImage: "/assets/img/support.jpg",
        hint:"Have the important Support tech & business information in your wallet",
        added: "true"
      },
      {
        title: "Self Services",
        articles: [{ d: "2/28", t: "Product Life Pro Plus 8 ready for sale from 7th June, 2017" },
        { d: "2/28", t: "Allianz in talks to sell 5% in Life Insurance Subsidary" },
        { d: "3/4", t: "Life Insurance policy holders get 30 more days to pay premium" }],
        cardImage: "/assets/img/selfservice.png",
        hint:"Top used self services by the April Bot",
        added: "false"
      },
      {
        title: "Sales Numbers",
        articles: [{ d: "2/28", t: "Product Life Pro Plus 8 ready for sale from 7th June, 2017" },
        { d: "2/28", t: "Allianz in talks to sell 5% in Life Insurance Subsidary" },
        { d: "3/4", t: "Life Insurance policy holders get 30 more days to pay premium" }],
        cardImage: "/assets/img/finance.jpg",
        hint:"Keep upto date with the number of policies & annuity contracts sold on a daily, weekly & monthly basis",
        added: "false"
      }

    ]
  }
}
