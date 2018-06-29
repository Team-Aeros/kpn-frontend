import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class KpnApiService {

    pricePlans;
    discounts;
    discountTypes;
    constructor(private _http: HttpClient) {
        this.fillPricePlans();
        this.fillDiscounts();
        this.fillDiscountTypes();
    }

    fillPricePlans() {
        this.pricePlans = [
            {
                id: 1,
                name:'bert',
                interval: 'monthly',
                price: 20,
                discount: 0,
            },
            {
                id: 2,
                name:'jelmer',
                interval: 'monthly',
                price: 50,
                discount: 1,
            },
            {
                id: 3,
                name:'robert',
                interval: 'monthly',
                price: 30,
                discount: 2,
            },
            {
                id: 4,
                name:'hinnie',
                interval: 'monthly',
                price: 60,
                discount: 3,
            },
            {
                id: 5,
                name:'evert',
                interval: 'monthly',
                price: 10,
                discount: 4,
            },
        ];
    }

    fillDiscounts() {
        this.discounts = [
            {
                id: 0,
                amount: 5,
                typeName: 'volume',
                typeId: 0
            },
            {
                id: 1,
                amount: 10,
                typeName: 'product',
                typeId: 0
            },
            {
                id: 2,
                amount: 5,
                typeName: 'happyHour',
                typeId: 0
            },
            {
                id: 3,
                amount: 5,
                typeName: 'loyalty',
                typeId: 0
            },
        ];
    }

    fillDiscountTypes() {
        this.discountTypes = [
            {
                name: 'volume',
                entries: [
                    {
                        id: 0,
                        limit: 10,
                        amount: 10,
                        amountType: 'Gb'
                    },
                    {
                        id: 1,
                        limit: 5,
                        amount: 5,
                        amountType: 'Gb'
                    },
                ]
            },
        ];
    }

    // call(url: string, params: object) {
    //     let data = {
    //         params: params,
    //     }
    //     return this._http.post(environment.api_url + url, data, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })});
    // }


    getAllPricePlanData() {
        return this.pricePlans;
    }

    getPricePlanData(id: number) {
        for(let pricePlan of this.pricePlans) {
            if(pricePlan.id == id) {
                return pricePlan;
            }
        }
    }

    getDiscount(id: number) {
        for(let discount of this.discounts) {
            if(discount.id == id) {
                return discount;
            }
        }
    }

    getDiscountType(name: String, id: number) {
        for(let discountType of this.discountTypes) {
            if(discountType.name == name) {
                for(let entry of discountType.entries) {
                    if(entry.id == id) {
                        return entry;
                    }
                } 
            }
        }
    }

    getAllSubscriptions() {
        return this._http.get(environment.api_url + "/subscriptions");
    }

    getAllPricePlans() {
        return this._http.get(environment.api_url + '/priceplans');
    }

  // Zijn nog niet per se nodig!
  // unsafeGet(url: string) {
  //     return this._http.get(environment.api_url + url, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })});
  // }
  //
  // unsafePost(url: string, params: object) {
  //     return this._http.post(environment.api_url + url, params, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })});
  // }
  //
  // login(params: object) {
  //     return this._http.post(environment.api_url + '/login', params, {headers: new HttpHeaders({ 'Content-Type': 'application/json'})});
  // }
}
