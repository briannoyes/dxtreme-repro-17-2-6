export class User {
  firstName: string;
  lastName: string;
  email: string;
  get foo() {
    console.log('Why is this being called by DxDataGrid!!!!');
    return '';
  }
  set foo(value) {
    console.log('Why is this being called by DxDataGrid!!!!');
  }
}
