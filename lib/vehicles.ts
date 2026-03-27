export interface Vehicle {
  id: string
  name: string
  brand: string
  year: number
  price: string
  image: string
  mileage: string
  fuelType: string
  isNew: boolean
  category: "ford" | "mg" | "toyota" | "honda" | "nissan"
}

export const vehicles: Vehicle[] = [
  {
    id: "1",
    name: "Everest Titanium+",
    brand: "Ford",
    year: 2024,
    price: "8.9M",
    image: "/images/hero-car.jpg",
    mileage: "0 km",
    fuelType: "Petrol",
    isNew: true,
    category: "ford",
  },
  {
    id: "2",
    name: "MG4 Electric",
    brand: "MG",
    year: 2024,
    price: "7.5M",
    image: "/images/car-bmw.jpg",
    mileage: "0 km",
    fuelType: "Petrol",
    isNew: true,
    category: "mg",
  },
  {
    id: "3",
    name: "Camry HEV Premium",
    brand: "Toyota",
    year: 2023,
    price: "12.5M",
    image: "/images/car-porsche.jpg",
    mileage: "5,000 km",
    fuelType: "Petrol",
    isNew: false,
    category: "toyota",
  },
  {
    id: "4",
    name: "Civic e:HEV RS",
    brand: "Honda",
    year: 2024,
    price: "6.8M",
    image: "/images/car-audi.jpg",
    mileage: "0 km",
    fuelType: "Hybrid",
    isNew: true,
    category: "honda",
  },
  {
    id: "5",
    name: "Almera Sportech",
    brand: "Nissan",
    year: 2024,
    price: "5.9M",
    image: "/images/car-tesla.jpg",
    mileage: "0 km",
    fuelType: "Electric",
    isNew: true,
    category: "nissan",
  },
  {
    id: "6",
    name: "Ranger Wildtrak",
    brand: "Ford",
    year: 2023,
    price: "7.2M",
    image: "/images/car-lexus.jpg",
    mileage: "8,000 km",
    fuelType: "Hybrid",
    isNew: false,
    category: "ford",
  },
]

export function getVehicleById(id: string) {
  return vehicles.find((vehicle) => vehicle.id === id)
}
