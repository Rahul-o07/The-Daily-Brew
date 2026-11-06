export interface MenuItem {
  id: string;
  name: string;
  price: string;
  image: string;
  alt: string;
}

export const menuItems: MenuItem[] = [
  {
    id: "cappuccino",
    name: "Cappuccino",
    price: "₹150",
    image: "/images/02_cappuccino_clean.jpg",
    alt: "Freshly brewed Cappuccino with velvety froth",
  },
  {
    id: "cold-coffee",
    name: "Cold Coffee",
    price: "₹180",
    image: "/images/03_iced_coffee_clean.jpg",
    alt: "Chilled and refreshing Cold Coffee served over ice",
  },
  {
    id: "classic-sandwich",
    name: "Classic Sandwich",
    price: "₹120",
    image: "/images/04_sandwich_clean.jpg",
    alt: "Toasted Classic Sandwich with fresh gourmet filling",
  },
  {
    id: "chocolate-brownie",
    name: "Chocolate Brownie",
    price: "₹100",
    image: "/images/05_brownie_clean.jpg",
    alt: "Rich, decadent handcrafted Chocolate Brownie",
  },
];
