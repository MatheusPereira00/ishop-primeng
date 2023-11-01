export interface Product {
  id: number;
  sku: string;
  name: string;
  description: string;
  unitPrice: number;
  imageUrl: string;
  category_id: number;
  category_name: string;
  subcategory_id: number;
  subcategory_name: string;
  active: boolean;
  unitsInStock: number;
  dateCreated: string;
  lastUpdated: any;
  newProduct: boolean;
  rating: number;
  inventoryStatus: string;
}
