import { useState } from "react";
import Steps from "./Steps";
import EmissionStatsPie from "./charts/EmissionStatsPie";
import EmissionStatsArea from "./charts/EmissionStatsArea";
import { ArrowLeftIcon } from "lucide-react";

type Product = {
  id: string;
  name: string;
  brand: string;
  model: string;
  category: string;
  subcategory: string;
  footprint: number;
  price: string;
};

const products: Product[] = [
  {
    id: "1",
    name: "SleekBook",
    brand: "Axon",
    model: "14",
    category: "Consumer Electronics",
    subcategory: "Laptops",
    footprint: 70,
    price: "MRP - ₹60,000",
  },
  {
    id: "2",
    name: "Traveler",
    brand: "ZenCore",
    model: "14x",
    category: "Consumer Electronics",
    subcategory: "Laptops",
    footprint: 80,
    price: "MRP - ₹65,000",
  },
  {
    id: "3",
    name: "AeroPad",
    brand: "Nimbus",
    model: "Duo",
    category: "Consumer Electronics",
    subcategory: "Laptops",
    footprint: 70,
    price: "MRP - ₹55,000",
  },
  {
    id: "4",
    name: "Prism",
    brand: "Spectra",
    model: "V20",
    category: "Consumer Electronics",
    subcategory: "Smartphones",
    footprint: 70,
    price: "MRP - ₹20,000",
  },
  {
    id: "5",
    name: "Vortex",
    brand: "Nova",
    model: "Max",
    category: "Consumer Electronics",
    subcategory: "Smartphones",
    footprint: 70,
    price: "MRP - ₹25,000",
  },
  {
    id: "6",
    name: "Prime",
    brand: "Nanophone",
    model: "27",
    category: "Consumer Electronics",
    subcategory: "Smartphones",
    footprint: 70,
    price: "MRP - ₹26,000",
  },
  {
    id: "7",
    name: "Bliss",
    brand: "Oat",
    model: "Harvest",
    category: "Groceries",
    subcategory: "Breakfast Cereals",
    footprint: 70,
    price: "MRP - ₹60 / 100g",
  },
  {
    id: "8",
    name: "Munch",
    brand: "Morning",
    model: "Swirls",
    category: "Groceries",
    subcategory: "Breakfast Cereals",
    footprint: 70,
    price: "MRP - ₹80 / 100g",
  },
  {
    id: "9",
    name: "Berry",
    brand: "NutriNibbles",
    model: "Oat",
    category: "Groceries",
    subcategory: "Breakfast Cereals",
    footprint: 70,
    price: "MRP - ₹70 / 120g",
  },
  {
    id: "10",
    name: "Fresh",
    brand: "Dairy",
    model: "Mozzarella",
    category: "Groceries",
    subcategory: "Dairy Products",
    footprint: 70,
    price: "MRP - ₹29 / pack",
  },
  {
    id: "11",
    name: "Barn",
    brand: "Blue",
    model: "Cream",
    category: "Groceries",
    subcategory: "Dairy Products",
    footprint: 70,
    price: "MRP - ₹45 / pack",
  },
  {
    id: "12",
    name: "Fresh",
    brand: "CreamCo",
    model: "Milk",
    category: "Groceries",
    subcategory: "Dairy Products",
    footprint: 70,
    price: "MRP - ₹55 / pack",
  },
];

const recommendationList: Product[] = [
  {
    id: "1",
    name: "Horizon",
    brand: "Nimbus",
    model: "Z14",
    category: "Consumer Electronics",
    subcategory: "Laptops",
    footprint: 30,
    price: "MRP - ₹40,000",
  },
  {
    id: "2",
    name: "Infinity Flex",
    brand: "Axon",
    model: "13",
    category: "Consumer Electronics",
    subcategory: "Laptops",
    footprint: 30,
    price: "MRP - ₹55,000",
  },
  {
    id: "3",
    name: "Streamer",
    brand: "Volt",
    model: "X20",
    category: "Consumer Electronics",
    subcategory: "Laptops",
    footprint: 40,
    price: "MRP - ₹45,000",
  },
  {
    id: "4",
    name: "Pulse",
    brand: "Vortex",
    model: "S9",
    category: "Consumer Electronics",
    subcategory: "Smartphones",
    footprint: 35,
    price: "MRP - ₹30,000",
  },
  {
    id: "5",
    name: "UltraMax",
    brand: "PulseTech",
    model: "10",
    category: "Consumer Electronics",
    subcategory: "Smartphones",
    footprint: 30,
    price: "MRP - ₹24,500",
  },
  {
    id: "6",
    name: "Zenix",
    brand: "Spectra",
    model: "X10",
    category: "Consumer Electronics",
    subcategory: "Smartphones",
    footprint: 30,
    price: "MRP - ₹20,000",
  },
  {
    id: "7",
    name: "Grains",
    brand: "Vita",
    model: "Ancient",
    category: "Groceries",
    subcategory: "Breakfast Cereals",
    footprint: 20,
    price: "MRP - ₹65 / 100g",
  },
  {
    id: "8",
    name: "Fruit",
    brand: "SunnyOats",
    model: "Pop",
    category: "Groceries",
    subcategory: "Breakfast Cereals",
    footprint: 20,
    price: "MRP - ₹60 / 120g",
  },
  {
    id: "9",
    name: "Honey",
    brand: "Zest",
    model: "Bites",
    category: "Groceries",
    subcategory: "Breakfast Cereals",
    footprint: 30,
    price: "MRP - ₹55 / 100g",
  },
  {
    id: "10",
    name: "Almond",
    brand: "Alpine",
    model: "Milk",
    category: "Groceries",
    subcategory: "Dairy Products",
    footprint: 30,
    price: "MRP - ₹50 / pack",
  },
  {
    id: "11",
    name: "Greek",
    brand: "PureMoo",
    model: "Yogurt",
    category: "Groceries",
    subcategory: "Dairy Products",
    footprint: 25,
    price: "MRP - ₹28 / pack",
  },
  {
    id: "12",
    name: "Artisan",
    brand: "Velveta",
    model: "Yogurt",
    category: "Groceries",
    subcategory: "Dairy Products",
    footprint: 20,
    price: "MRP - ₹32 / pack",
  },
];

type Category = {
  name: string;
  subcategories: string[];
  icons: string;
  description: string;
  subcatIcon: string[];
};

const ProductCategories = () => {
  const categories: Category[] = [
    {
      name: "Consumer Electronics",
      subcategories: ["Laptops", "Smartphones", "TVs", "Speakers", "Printers"],
      icons: "/images/categories/electronic.png",
      description: "Laptops, Smartphones, TV and much more.....",
      subcatIcon: [
        "/images/subcats/laptops.png",
        "/images/subcats/printers.png",
        "/images/subcats/smartphones.png",
        "/images/subcats/speakers.png",
        "/images/subcats/tv.png",
      ],
    },
    {
      name: "Furniture",
      subcategories: ["Tables", "Sofas", "Wardrobes", "Chairs", "Beds"],
      icons: "/images/categories/furniture.png",
      description: "Tables, Wardrobes, Sofas and much more......",
      subcatIcon: [
        "/images/subcats/table.png",
        "/images/subcats/sofa.png",
        "/images/subcats/wardrobe.png",
        "/images/subcats/chairs.png",
        "/images/subcats/beds.png",
      ],
    },
    {
      name: "Groceries",
      subcategories: [
        "Breakfast Cereals",
        "Dairy Products",
        "Bread and Baked Goods",
        "Condiments",
        "Snacks",
      ],
      icons: "/images/categories/groceries.png",
      description: "Food Items, Health Drinks and much more.....",
      subcatIcon: [
        "/images/subcats/cereal.png",
        "/images/subcats/dairy.png",
        "/images/subcats/bread.png",
        "/images/subcats/condiments.png",
        "/images/subcats/snacks.png",
      ],
    },
    {
      name: "Fashion and Apparels",
      subcategories: ["Bags", "Shoes", "Trousers", "Tshirts", "Accessories"],
      icons: "/images/categories/fashion.png",
      description: "Menswear, Bags, Shoes and much more......",
      subcatIcon: [
        "/images/subcats/bags.png",
        "/images/subcats/shoes.png",
        "/images/subcats/trousers.png",
        "/images/subcats/tshirts.png",
        "/images/subcats/accessories.png",
      ],
    },
    {
      name: "Household Essentials",
      subcategories: [
        "Refrigerators",
        "Microwaves",
        "Washing Machines",
        "Cutlery",
        "Toiletries",
      ],
      icons: "/images/categories/household.png",
      description: "Toiletries, Draperies, Cleaners and much more......",
      subcatIcon: [
        "/images/subcats/refigerator.png",
        "/images/subcats/microwave.png",
        "/images/subcats/wm.png",
        "/images/subcats/cutlery.png",
        "/images/subcats/toiletries.png",
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const [showProducts, setShowProducts] = useState(false);
  const [addedProductsList, setAddedProductsList] = useState<Product[]>([]);
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);

  const filterProductsByCategoryAndSubcategory = (
    productList: Product[],
    category: string,
    subcategory: string
  ): Product[] => {
    return productList.filter(
      (product) =>
        product.category === category && product.subcategory === subcategory
    );
  };

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
    setShowProducts(false);
  };

  const handleSubcategoryClick = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
    setShowProducts(true);
  };

  const handleBackClick = () => {
    if (showProducts) {
      setShowProducts(false);
      setSelectedSubcategory(null);
    } else {
      setSelectedCategory(null);
      setSelectedSubcategory(null);
    }
  };

  const handleRemoveRecommendedProduct = (index: number) => {
    const updatedProducts = [...recommendedProducts];

    updatedProducts.splice(index, 1);
    setRecommendedProducts(updatedProducts);
  };

  const handleRemoveProduct = (productId: string) => {
    setAddedProductsList((prev) => prev.filter((p) => p.id !== productId));
  };

  const getRecommendations = (product: Product): Product[] => {
    return recommendationList.filter(
      (recProduct) =>
        recProduct.category === product.category &&
        recProduct.footprint < product.footprint &&
        !isProductAdded(recProduct.id)
    );
  };

  const handleAddProduct = (product: Product) => {
    if (!isProductAdded(product.id)) {
      setAddedProductsList((prev) => [...prev, product]);
    } else if (!isProductRecommended(product.id)) {
      setRecommendedProducts((prev) => [...prev, product]);
    }
  };

  const handleAddRecommendedProduct = (product: Product) => {
    if (!isProductRecommended(product.id)) {
      setRecommendedProducts((prev) => [...prev, product]);
    }
  };

  const isProductRecommended = (productId: string): boolean => {
    return recommendedProducts.some((p) => p.id === productId);
  };

  const isProductAdded = (productId: string): boolean => {
    return addedProductsList.some((p) => p.id === productId);
  };

  const calculateTotalFootprint = (productList: Product[]): number => {
    return productList.reduce((total, product) => total + product.footprint, 0);
  };

  const filteredProducts =
    selectedCategory && selectedSubcategory
      ? filterProductsByCategoryAndSubcategory(
          products,
          selectedCategory.name,
          selectedSubcategory
        )
      : [];

  const totalAddedFootprint = calculateTotalFootprint(addedProductsList);
  const totalRecommendedFootprint = calculateTotalFootprint(
    addedProductsList.flatMap((product) => getRecommendations(product))
  );
  const footprintSaved = totalAddedFootprint - totalRecommendedFootprint;

  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full gap-x-20 mx-8">
          <div className="bg-[#D6ECEF] rounded-xl flex flex-col p-4 mb-2 w-full lg:w-[50%] box-border">
            {selectedCategory ? (
              <div>
                <div
                  className="text-2xl text-gray-800 cursor-pointer mb-3"
                  onClick={handleBackClick}
                >
                  <ArrowLeftIcon />
                </div>
                <h3 className="text-xl font-bold ml-6 mb-3">
                  CATEGORIES {">"} {selectedCategory.name}
                </h3>

                {!showProducts ? (
                  <div className="flex flex-col gap-y-10">
                    {selectedCategory.subcategories.map(
                      (subcategory, index) => (
                        <div
                          key={index}
                          className="flex flex-row items-center gap-x-12 border border-gray-300 h-32 drop-shadow-sm rounded-2xl mx-16 p-3 bg-gray-100 hover:bg-gray-200 cursor-pointer transition-transform transform hover:translate-y-[-3px]"
                          onClick={() => handleSubcategoryClick(subcategory)}
                        >
                          <img src={selectedCategory.subcatIcon[index]} />
                          <span className="text-xl text-center text-gray-800">
                            {subcategory}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <div>
                    <h3 className="text-xl font-bold mb-3">
                      {selectedSubcategory}
                    </h3>
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((product) => {
                        const isAdded = isProductAdded(product.id);
                        return (
                          <div
                            key={product.id}
                            className="flex justify-between items-center border border-gray-300 rounded-md p-3 mb-2 bg-gray-100 hover:bg-green-50 transition-colors"
                          >
                            <div className="flex text-center justify-center items-center flex-row">
                              <img src="/images/products/sample-img.png" />
                              <div className="flex-1 ml-12">
                                <span className="block text-lg font-semibold">
                                  {product.brand} {product.name} {product.model}
                                </span>
                                <span className="block text-sm text-gray-600">
                                  {product.price}
                                </span>
                              </div>
                            </div>
                            <button
                              className={`${
                                isAdded
                                  ? "bg-gray-400 cursor-not-allowed"
                                  : "bg-green-600 hover:bg-green-700"
                              } text-white rounded-md px-3 py-1`}
                              onClick={() =>
                                !isAdded && handleAddProduct(product)
                              }
                              disabled={isAdded}
                            >
                              {isAdded ? "✓" : "+"}
                            </button>
                          </div>
                        );
                      })
                    ) : (
                      <p>No products found for this subcategory.</p>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-y-6 w-full">
                <div className="p-4 mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    CATEGORIES
                  </h3>
                </div>
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border border-gray-300 h-32 drop-shadow-sm rounded-2xl mx-16 p-3 bg-gray-100 hover:bg-gray-200 cursor-pointer transition-transform transform hover:translate-y-[-3px]"
                    onClick={() => handleCategoryClick(category)}
                  >
                    <div className="flex gap-x-3 items-center">
                      <span>
                        <img
                          src={category.icons}
                          alt={`${category.name} Icon`}
                          className="h-16"
                        />
                      </span>
                      <span className="text-lg text-gray-800">
                        {category.name}
                        <p className="text-sm line-clamp-1 font-light">
                          {category.description}
                        </p>
                      </span>
                    </div>
                    <span>
                      <img src="/svg/next.svg" alt="Next" className="h-6" />
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-y-5 items-center w-full lg:w-[35%]">
            <Steps />
          </div>
        </div>

        {/* Products Section with Inline Recommendations */}
        <div className="flex">
          <div className="flex flex-col w-full">
            <div className="bg-[#AEFBD2] p-5 m-2 rounded-lg min-h-[10cm] box-border">
              <h3 className="text-xl font-bold mb-6">Added Products</h3>
              {addedProductsList.length > 0 ? (
                addedProductsList.map((product) => (
                  <div key={product.id} className="mb-6">
                    <div className="flex items-center justify-between border border-gray-300 rounded-md p-3 bg-gray-100">
                      <span className="text-lg">
                        {product.name}, {product.brand}, {product.model}
                      </span>
                      <button
                        className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600"
                        onClick={() => handleRemoveProduct(product.id)}
                      >
                        ✕
                      </button>
                    </div>

                    {/* Recommendations for this product */}
                    <div className="ml-6 mt-2">
                      {getRecommendations(product).map((rec) => (
                        <div
                          key={rec.id}
                          className="flex items-center justify-between border border-gray-300 rounded-md p-2 mb-2 bg-green-50"
                        >
                          <div className="flex items-center">
                            <span className="text-green-600 mr-2">↳</span>
                            <span>
                              {rec.brand} {rec.model} ({rec.footprint} kg CO2e)
                            </span>
                          </div>
                          <button
                            className="bg-green-600 text-white rounded-md px-2 py-1 text-sm hover:bg-green-700"
                            onClick={() => handleAddRecommendedProduct(rec)}
                            disabled={isProductAdded(rec.id)}
                          >
                            {isProductAdded(rec.id) ? "✓" : "+"}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <p>No products added yet.</p>
              )}
            </div>
          </div>
          {/* Recommended Products Flexbox */}
          <div className="bg-[#AEFBD2]  p-4 w-[48.5%] m-2 rounded-lg min-h-[10cm] box-border">
            <h3 className="text-xl font-bold mb-6">Recommended Products</h3>
            {recommendedProducts.length > 0 ? (
              recommendedProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border border-gray-300 rounded-md p-3 bg-gray-100 mb-3"
                >
                  <div className="flex flex-col">
                    <span>
                      {product.brand} {product.name} {product.model}
                    </span>
                    <span>{product.price}</span>
                    <span className="text-blue-800 cursor-pointer underline">
                      Buy Now
                    </span>
                  </div>

                  <button
                    className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600"
                    onClick={() => handleRemoveRecommendedProduct(index)}
                  >
                    ✕
                  </button>
                </div>
              ))
            ) : (
              <p>No recommended products added yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* Analysis Section */}
      <div className="w-full h-auto">
        <div className="bg-[#082F4F] text-white p-4 w-full rounded-lg box-border">
          <div className="flex gap-x-4">
            <div>
              <h3 className="text-lg font-bold mb-3">Footprint Analysis</h3>
              <p className="mb-1">
                Total Added Footprint: {totalAddedFootprint.toFixed(2)} kg CO2e
              </p>
              <p className="mb-1">
                Total Recommended Footprint:{" "}
                {totalRecommendedFootprint.toFixed(2)} kg CO2e
              </p>
              <p className="mb-1">
                Footprint Saved: {footprintSaved.toFixed(2)} kg CO2e
              </p>
              <p className="text-green-500 font-bold">Keep saving more!</p>
            </div>
            <div className="flex gap-x-10">
              <div className="w-[350px] h-[430px]">
                <EmissionStatsPie />
              </div>
              <div className="w-[350px] h-[430px]">
                <EmissionStatsArea />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
