// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-add-edit-prod',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './add-edit-prod.component.html',
// })
// export class AddEditProdComponent {
//   public product!: Product[];
//   public id!: string | null;
//   public isEditMode = false;
//   public loadingP = false;
//   public form: FormGroup = new FormGroup({});
//   public activedRoute = inject(ActivatedRoute);
//   public router = inject(Router);

//   private _messageService = inject(MessageService);
//   private _productService = inject(ProductsService);

//   public ngOnInit(): void {
//     this.form = new FormGroup({
//       name: new FormControl('', {
//         nonNullable: true,
//         validators: [Validators.required],
//       }),
//       sku: new FormControl('', {
//         nonNullable: true,
//         validators: [Validators.required],
//       }),
//       unitPrice: new FormControl('', {
//         nonNullable: true,
//         validators: [Validators.required],
//       }),
//       category_name: new FormControl('', {
//         nonNullable: true,
//         validators: [Validators.required],
//       }),
//       subcategory_name: new FormControl('', {
//         nonNullable: true,
//         validators: [Validators.required],
//       }),
//       active: new FormControl('', {
//         nonNullable: true,
//         validators: [Validators.required],
//       }),
//       unitsInStock: new FormControl('', {
//         nonNullable: true,
//         validators: [Validators.required],
//       }),
//       description: new FormControl('', {
//         nonNullable: true,
//         validators: [Validators.required],
//       }),
//     });

//     this.id = this.activedRoute.snapshot.paramMap.get('id');

//     if (this.id) {
//       this.isEditMode = true;
//       this._productService.getProductById(this.id).subscribe(product => {
//         this.form.setValue({
//           name: product.name,
//           sku: product.sku,
//           unitPrice: product.unitPrice,
//           category_name: product.category_name,
//           subcategory_name: product.subcategory_name,
//           active: product.active,
//           unitsInStock: product.unitsInStock,
//           description: product.description,
//         });
//       });
//     } else {
//       this.isEditMode = false;
//     }
//   }

//   public createProduct(): void {
//     if (this.form.valid) {
//       const newProduct = this.form.getRawValue();
//       this._productService.postProduct(newProduct).subscribe({
//         next: () => {
//           setTimeout(() => {
//             this.loadingP = false;
//             this.router.navigate(['/adm-home/list-products']);
//           }, 3000);
//           this._messageService.add({
//             severity: 'success',
//             summary: 'Sucesso',
//             detail: 'Produto criado com sucesso',
//           });
//         },
//       });
//     } else {
//       this._messageService.add({
//         severity: 'error',
//         summary: 'Produto não foi criado',
//         detail:
//           'Produto não foi criado, verifique se seu formulario foi preenchido corretamente',
//       });
//     }
//   }
// }
