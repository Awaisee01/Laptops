
import lap1 from "../media/laptops/gaminglap1.jpeg";
import lap2 from "../media/laptops/gaminglap2.jpeg";
import lap3 from "../media/laptops/gaminglap3.jpeg";
import lap4 from "../media/laptops/lap4.jpeg";
import lap5 from "../media/laptops/lap5.jpeg";
import lap6 from "../media/laptops/lap6.jpeg";
import lap7 from "../media/laptops/lap7.png";

export const laptops = [
    {
      id: 1,
      name: "Dell XPS 13",
      generation: "11th Gen",
      ram: "16GB",
      rom: "512GB SSD",
      price: "$1,299",
      need: "Best for high-performance and portability.",
      image: lap1,
    },
    {
      id: 2,
      name: "Apple MacBook Air M1",
      generation: "M1 Chip",
      ram: "8GB",
      rom: "256GB SSD",
      price: "$999",
      need: "Ideal for professionals looking for a lightweight and powerful machine.",
      image: lap2,
    },
    {
      id: 3,
      name: "HP Spectre x360",
      generation: "10th Gen",
      ram: "16GB",
      rom: "1TB SSD",
      price: "$1,499",
      need: "Great for creative professionals, with a 2-in-1 convertible design.",
      image: lap3,
    },
    {
      id: 4,
      name: "Lenovo ThinkPad X1 Carbon",
      generation: "9th Gen",
      ram: "16GB",
      rom: "512GB SSD",
      price: "$1,699",
      need: "A durable business laptop with long battery life.",
      image: lap4,
    },
    {
      id: 5,
      name: "Asus ROG Strix G15",
      generation: "AMD Ryzen 9",
      ram: "32GB",
      rom: "1TB SSD",
      price: "$2,199",
      need: "Perfect for gamers and content creators needing extreme performance.",
      image: lap5,
    },
    {
      id: 6,
      name: "Acer Aspire 5",
      generation: "11th Gen",
      ram: "8GB",
      rom: "256GB SSD",
      price: "$649",
      need: "Affordable laptop for students and everyday users.",
      image: lap6,
      img: lap7,
    },
  ];



 export const categories = [
    {
      name: "New Laptops",
      link: "/newlaptops",
      img : lap7,
      subcategories: [
        "8th Generation",
        "9th Generation",
        "10th Generation",
        "11th Generation",
        "12th Generation",
        "13th Generation",
        "14th Generation",
        "Mini Laptops",
        "Dual Core",
        "AMD",
        "Core i3",
        "Core i5",
        "Core i7",
        "Core i9",
       
      ],
    },
    {
      name: "Used Laptops",
      link: "/usedlaptops",
      img : lap5,
      subcategories: [
        "Refurbished Laptops",
        "Second-Hand Laptops",
        "Business Laptops",
        "Gaming Laptops",
        "Affordable Laptops",
      ],
    },
    {
      name: "Apple",
      link: "/apple",
      subcategories: [
        "MacBook Air",
        "MacBook Pro",
        "iPad Pro",
        "iPad Air",
        "Mac Mini",
      ],
    },
    {
      name: "Tablets",
      link: "/tablets",
      subcategories: [
        "Android Tablets",
        "iPads",
        "Windows Tablets",
        "Tablet Accessories",
      ],
    },
    {
      name: "Desktop",
      link: "/desktop",
      subcategories: [
        "All-in-One PCs",
        "Gaming Desktops",
        "Business Desktops",
        "Mini PCs",
      ],
    },
    {
      name: "External Hard Drive",
      link: "/harddrive",
      subcategories: [
        "Portable Hard Drives",
        "SSD External Drives",
        "Network Attached Storage",
      ],
    },
    {
      name: "Printers",
      link: "/printers",
      subcategories: [
        "Inkjet Printers",
        "Laser Printers",
        "All-in-One Printers",
        "Photo Printers",
      ],
    },
    {
      name: "Scanners",
      link: "/scanners",
      subcategories: [
        "Document Scanners",
        "Photo Scanners",
        "3D Scanners",
        "Barcode Scanners",
      ],
    },
    {
      name: "Gadgets",
      link: "/gadgets",
      subcategories: [
        "Smartwatches",
        "Fitness Trackers",
        "VR Headsets",
        "Drones",
      ],
    },
    {
      name: "Cameras",
      link: "/cameras",
      subcategories: [
        "DSLR Cameras",
        "Mirrorless Cameras",
        "Point & Shoot Cameras",
        "Camera Lenses",
        "Action Cameras",
      ],
    },
    {
      name: "Multimedia",
      link: "/multimedia",
      subcategories: [
        "Speakers",
        "Headphones",
        "Home Theaters",
        "Streaming Devices",
      ],
    },


  ];