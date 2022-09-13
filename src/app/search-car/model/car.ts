export interface Car {
  id: number;
  address: string;
  brand: string;
  year: number;
  model: string;
  mileage: number;
  seating: number;
  manual: boolean;
  carValueInDollars: number;
  extraInformation: string;
  rate: number;
  rentAmountDay: number;
  imagePath: string;
  category: string;
  mechanicConditions: string;
  clientId: number | null;
  carModelId: number;
}
