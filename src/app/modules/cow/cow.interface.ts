type Location =
  | 'Dhaka'
  | 'Chattogram'
  | 'Barishal'
  | 'Rajshahi'
  | 'Sylhet'
  | 'Comilla'
  | 'Rangpur'
  | 'Mymensingh';

type Breed =
  | 'Brahman'
  | 'Nellore'
  | 'Sahiwal'
  | 'Gir'
  | 'Indigenous'
  | 'Tharparkar'
  | 'Kankrej';

type Label = 'for sale' | 'sold out';

type Category = 'Dairy' | 'Beef' | 'Dual Purpose';

export type Cow = {
  name: string;
  age: number;
  price: number;
  location: Location;
  breed: Breed;
  weight: number;
  label: Label;
  category: Category;
  seller: string;
};
