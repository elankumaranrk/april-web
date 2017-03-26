import { Injectable } from '@angular/core';

@Injectable()
export class AprilWebService {

  constructor() { }

  cardData(): Array<Object> {
    return [
      {
        title: "General Updates",
        articles: [{ d: "3/7", t: "Product Life Pro Plus 8 ready for sale from 7th June, 2017" },
        { d: "3/5", t: "Allianz in talks to sell 5% in Life Insurance Subsidary" },
        { d: "3/1", t: "Life Insurance policy holders get 30 more days to pay premium" }],
        cardImage: "/assets/img/playground-features-doodles.jpg"
      },
      {
        title: "Commissions",
        articles: [{ d: "2/21", t: "Product Life Pro Plus 8 ready for sale from 7th June, 2017" },
        { d: "3/1", t: "Allianz in talks to sell 5% in Life Insurance Subsidary" },
        { d: "3/3", t: "Life Insurance policy holders get 30 more days to pay premium" }],
        cardImage: "/assets/img/playground-features-trends.jpg"
      },
      {
        title: "To-Do's",
        articles: [{ d: "2/28", t: "Product Life Pro Plus 8 ready for sale from 7th June, 2017" },
        { d: "2/28", t: "Stale address encountered for the policy owner, 60084939", action:"required", chatConv:"Change address for the owner of the policy 60084939", new:"true" },
        { d: "3/4", t: "Stock Advisor:Tesla's stock prices are soaring this week! Revise your allocations", action:"required", chatConv:"Do an allocation change" }],
        cardImage: "/assets/img/pending.jpg"
      },
      {
        title: "Support",
        articles: [{ d: "2/28", t: "Product Life Pro Plus 8 ready for sale from 7th June, 2017" },
        { d: "2/28", t: "Allianz in talks to sell 5% in Life Insurance Subsidary" },
        { d: "3/4", t: "Life Insurance policy holders get 30 more days to pay premium" }],
        cardImage: "/assets/img/playground-features-how-search-works.jpg"
      }
      

    ]
  }
}
