import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CardServiceService } from '../../services/card-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, NgxPaginationModule, NgSelectModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  // data = 
  //   {
  //     "category_id": 34146,
  //     "sub_category_id": 34148,
  //     "category_name": "Baby Care",
  //     "sub_category_name": "Baby Bath & Hygiene",
  //     "store_id": 315,
  //     "store_name": "Fresh Fresh",
  //     "store_slug": "fresh-fresh",
  //     "latitude": "23.0714235",
  //     "longitude": "72.5167854",
  //     "timezone": "Asia/Kolkata",
  //     "item_id": 199757,
  //     "item_name": "100 Percent Pure Cotton Buds - White",
  //     "item_slug": "100-percent-pure-cotton-buds-white",
  //     "brand_name": "Mee Mee",
  //     "is_combo": "0",
  //     "item_description": "",
  //     "item_image": "https://apilocal.lokaly.in/uploads/store/default_items/meemee100percentpurecottonbudswhite.jpg",
  //     "item_image_thumb": "",
  //     "out_of_stock": 0,
  //     "mask_price": 0,
  //     "item_type": 0,
  //     "prescription": 0,
  //     "mask_image": 0,
  //     "rating_count": 9,
  //     "stock_management_method": 1,
  //     "features": null,
  //     "ingredients": null,
  //     "manufacturer_details": null,
  //     "featured_type": 0,
  //     "discount": "0",
  //     "how_to_use": null,
  //     "benefits": null,
  //     "nutritional_information": null,
  //     "other_information": null,
  //     "product_information": null,
  //     "is_store_open": 1,
  //     "delivery": "1",
  //     "pickup": "1",
  //     "express_delivery": "0",
  //     "accept_after_close": "0",
  //     "avg_rating": "3.3",
  //     "notify_me": 0,
  //     "unit_name": "",
  //     "current_stock": "",
  //     "avg_rating_sort": "3.3",
  //     "combo_description": null,
  //     "used_in_combo": 1,
  //     "is_active": 1,
  //     "is_deleted": 0,
  //     "item_variants": [
  //         {
  //             "item_variants_id": 258278,
  //             "item_price": "90.00",
  //             "discounted_price": "87.00",
  //             "packaging_id": 23,
  //             "packaging_name": "Ampoule test5",
  //             "unit_id": 2,
  //             "unit_quantity": 100,
  //             "ean_code": "",
  //             "best_before": "",
  //             "shelf_life": "",
  //             "discount_type": "F",
  //             "external_item_id": "",
  //             "unit_name": "gm",
  //             "sku": "725272730607",
  //             "out_of_stock": 1,
  //             "hide_variant": 0,
  //             "notify_me": 0,
  //             "mask_price": 0,
  //             "min_qty": 0,
  //             "max_qty": 0,
  //             "location": "101",
  //             "packaging": "2.00",
  //             "tax": "5.00",
  //             "tax_group_id": 0,
  //             "is_choice_addon": null,
  //             "is_favourite": 1,
  //             "favourite_count": "",
  //             "out_stock_qty": null,
  //             "current_stock": "0.00",
  //             "quantity": null,
  //             "tax_item_price": 90,
  //             "tax_discounted_price": 87,
  //             "tax_group_percentage": "0.00",
  //             "variant_prescription": 0,
  //             "is_added": 0,
  //             "choices": null,
  //             "addons": null,
  //             "is_active": 1,
  //             "is_deleted": 0,
  //             "item_image_ids": "790,104854"
  //         },
  //         {
  //             "item_variants_id": 258279,
  //             "item_price": "109.00",
  //             "discounted_price": "105.00",
  //             "packaging_id": 95,
  //             "packaging_name": "1 gallon Tubsw",
  //             "unit_id": 1,
  //             "unit_quantity": 200,
  //             "ean_code": "",
  //             "best_before": "",
  //             "shelf_life": "",
  //             "discount_type": "F",
  //             "external_item_id": "",
  //             "unit_name": "units",
  //             "sku": "725272730614",
  //             "out_of_stock": 0,
  //             "hide_variant": 0,
  //             "notify_me": 0,
  //             "mask_price": 0,
  //             "min_qty": 0,
  //             "max_qty": 4,
  //             "location": "101",
  //             "packaging": "1.00",
  //             "tax": "5.00",
  //             "tax_group_id": 0,
  //             "is_choice_addon": null,
  //             "is_favourite": 1,
  //             "favourite_count": "",
  //             "out_stock_qty": null,
  //             "current_stock": "0.00",
  //             "quantity": null,
  //             "tax_item_price": 109,
  //             "tax_discounted_price": 105,
  //             "tax_group_percentage": "0.00",
  //             "variant_prescription": 0,
  //             "is_added": 0,
  //             "choices": null,
  //             "addons": null,
  //             "is_active": 1,
  //             "is_deleted": 0,
  //             "item_image_ids": "790,104854"
  //         },
  //         {
  //             "item_variants_id": 340675,
  //             "item_price": "160.00",
  //             "discounted_price": "150.00",
  //             "packaging_id": 71,
  //             "packaging_name": "1 Clock",
  //             "unit_id": 2,
  //             "unit_quantity": 200,
  //             "ean_code": "",
  //             "best_before": "",
  //             "shelf_life": "",
  //             "discount_type": "F",
  //             "external_item_id": "",
  //             "unit_name": "gm",
  //             "sku": "199757_004",
  //             "out_of_stock": 1,
  //             "hide_variant": 0,
  //             "notify_me": 0,
  //             "mask_price": 0,
  //             "min_qty": 0,
  //             "max_qty": 0,
  //             "location": null,
  //             "packaging": "0.00",
  //             "tax": "5.00",
  //             "tax_group_id": 0,
  //             "is_choice_addon": null,
  //             "is_favourite": 1,
  //             "favourite_count": "",
  //             "out_stock_qty": null,
  //             "current_stock": "0.00",
  //             "quantity": null,
  //             "tax_item_price": 160,
  //             "tax_discounted_price": 150,
  //             "tax_group_percentage": "0.00",
  //             "variant_prescription": 0,
  //             "is_added": 0,
  //             "choices": null,
  //             "addons": null,
  //             "is_active": 1,
  //             "is_deleted": 0,
  //             "item_image_ids": "790,104854"
  //         },
  //         {
  //             "item_variants_id": 258280,
  //             "item_price": "159.00",
  //             "discounted_price": "159.00",
  //             "packaging_id": 56,
  //             "packaging_name": "Bag",
  //             "unit_id": 1,
  //             "unit_quantity": 60,
  //             "ean_code": "",
  //             "best_before": "",
  //             "shelf_life": "",
  //             "discount_type": "F",
  //             "external_item_id": "",
  //             "unit_name": "units",
  //             "sku": "725272730621",
  //             "out_of_stock": 0,
  //             "hide_variant": 0,
  //             "notify_me": 0,
  //             "mask_price": 0,
  //             "min_qty": 2,
  //             "max_qty": 4,
  //             "location": "101",
  //             "packaging": "2.00",
  //             "tax": "",
  //             "tax_group_id": 0,
  //             "is_choice_addon": null,
  //             "is_favourite": 0,
  //             "favourite_count": "",
  //             "out_stock_qty": null,
  //             "current_stock": "0.00",
  //             "quantity": null,
  //             "tax_item_price": 159,
  //             "tax_discounted_price": 159,
  //             "tax_group_percentage": "0.00",
  //             "variant_prescription": 0,
  //             "is_added": 0,
  //             "choices": null,
  //             "addons": null,
  //             "is_active": 1,
  //             "is_deleted": 0,
  //             "item_image_ids": "790"
  //         }
  //     ],
  //     "item_tags": {
  //         "item_tags": "",
  //         "item_tag_name": ""
  //     },
  //     "item_images": [
  //         {
  //             "store_id": 315,
  //             "item_image_id": 790,
  //             "item_id": 199757,
  //             "item_variants_id": 0,
  //             "image": "https://apilocal.lokaly.in/uploads/store/default_items/meemee100percentpurecottonbudswhite.jpg",
  //             "image_thumb": "",
  //             "user_id": 341,
  //             "is_default": 0,
  //             "name": "Chirendu Gupta",
  //             "type": 1,
  //             "display_id": 1,
  //             "created_on": "2021-06-11T13:38:31.000Z"
  //         },
  //         {
  //             "store_id": 315,
  //             "item_image_id": 104854,
  //             "item_id": 199757,
  //             "item_variants_id": 0,
  //             "image": "https://apilocal.lokaly.in/uploads/store/315/items/199757/1707200241657_verve.jpeg",
  //             "image_thumb": "",
  //             "user_id": 341,
  //             "is_default": 0,
  //             "name": "Chirendu Gupta",
  //             "type": 1,
  //             "display_id": 2,
  //             "created_on": "2024-02-06T06:17:21.000Z"
  //         }
  //     ]
  // }
  data =
    [
      {
        "id": 1,
        "name": "Name"
      },
      {
        "id": 2,
        "name": "Price: Lo to Hi"
      },
      {
        "id": 3,
        "name": "Price: Hi to Lo"
      },
      {
        "id": 4,
        "name": "Rating"
      },
      {
        "id": 5,
        "name": "Discount"
      }
    ]
  product: any = [];
  p: number = 1;
  count: any;
  tableSize: any = 10;
  currentPage: number = 1;
  searchQuery: any;
  sort_field = 'name';
  selectedType= this.data[0];
  // sort_type:;
  isActive: boolean = false;
  constructor(private service: CardServiceService) { }

  ngOnInit(): void {
    this.productList(1)
  }



  productList(page: any) {
    // console.log(page);
    this.currentPage = page

    let res: any = {
      "page": page,
      "search_query": this.searchQuery,
      "limit": this.tableSize,
      "user_id": 309,
      // "sort_field": this.sort_field, // field name
      "sort_type": this.selectedType.id,
      "search_type": 1,
      "store_id": "315", // fix
      "categories": "", // fix
      "category_id": "34146" // fix

    }
    this.service.getData(res).subscribe((response: any) => {

      if (response.status == 1) {
        this.count = response.count;
        this.product = response.data;
      } else {
        this.count = 0;
        this.product = [];
      }
    })
    window.scroll(0,0)
    // error:(error:any)=>{
    //   this.toastr.error("Fetching! Error")
    // }

  }
  search() {
    this.productList(1);
  }

  clear() {
    this.searchQuery = '';
    this.productList(1);
  }

  sort(data:string){
    this.productList(1);
  
  }
  

}


