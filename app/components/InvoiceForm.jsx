"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
// import { useDispatch } from "react-redux";
// import { addInvoice } from "@/redux/features/invoice-slice";

const productsData = [
  {
    id: 0,
    name: "IPhone 11",
    picture: "/assets/iphone11.jpg",
    stock: 10,
    price: 10.99,
  },
  {
    id: 1,
    name: "IPhone 12",
    picture: "/assets/iphoneX.jpg",
    stock: 20,
    price: 9.99,
  },
  {
    id: 2,
    name: "Samsung S24",
    picture: "/assets/iphoneX.jpg",
    stock: 30,
    price: 12.99,
  },
  {
    id: 2,
    name: "Samsung S24",
    picture: "/assets/iphoneX.jpg",
    stock: 30,
    price: 12.99,
  },
  {
    id: 3,
    name: "Samsung S24",
    picture: "/assets/iphoneX.jpg",
    stock: 30,
    price: 12.99,
  },
  {
    id: 4,
    name: "Samsung S24",
    picture: "/assets/iphoneX.jpg",
    stock: 30,
    price: 12.99,
  },
  {
    id: 5,
    name: "Samsung S24",
    picture: "/assets/iphoneX.jpg",
    stock: 30,
    price: 12.99,
  },
  {
    id: 6,
    name: "Samsung S24",
    picture: "/assets/iphoneX.jpg",
    stock: 30,
    price: 12.99,
  },
];

const InvoiceForm = () => {
  const [date, setDate] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [salesName, setSalesName] = useState("");
  const [note, setNote] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [productSuggestion, setProductSuggestion] = useState([]);
  const [productsSold, setProductsSold] = useState([]);

  useEffect(() => {
    if (searchTerm != "") {
      const filterProduct = productsData.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProductSuggestion(filterProduct);
    } else if (searchTerm === "") {
      setProductSuggestion([]);
    }
    console.log("suggest", productSuggestion);
  }, [searchTerm]);

  const handleProductSelect = (event, product) => {
    event.preventDefault();
    setProductsSold((prevProductsSold) => [
      ...prevProductsSold,
      { ...product, uniqueId: `${product.id}-${prevProductsSold.length}` },
    ]);
    console.log("sold", productsSold);
  };

  // const dispatch = useDispatch();

  const handleSubmit = () => {
    if (
      !date ||
      salesName === "" ||
      customerName === "" ||
      productsSold.length == 0
    ) {
      alert("Please complete all data");
    }
    // dispatch(
    //   addInvoice({
    //     date: date,
    //     customerName: customerName,
    //     salesName: salesName,
    //     note: note,
    //     productsSold: productsSold,
    //   })
    // );
  };

  return (
    <section>
      <form action="">
        <div className="flex gap-4 mb-8">
          <div>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <label htmlFor="customerName">Cutomer name</label>
            <input
              type="text"
              placeholder="John Petter"
              name="customerName"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
            <label htmlFor="salesName">Sales name</label>
            <input
              type="text"
              placeholder="Rose"
              name="salesName"
              value={salesName}
              onChange={(e) => setSalesName(e.target.value)}
            />
            <label htmlFor="note">Note</label>
            <textarea
              name="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            >
              Write here...
            </textarea>
          </div>
          <div>
            <br />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for products"
            />
            <ul className="w-full max-h-[250px] border border-[#33353F] rounded-lg overflow-auto">
              {productSuggestion &&
                productSuggestion.map((product) => (
                  <li
                    key={product.id}
                    className="text-black block text-sm mb-1 font-medium; p-4 border-b last:border-b-0 border-[#33353F] bg-[#F5F5F5]"
                  >
                    <div className="flex justify-around">
                      <div>
                        <Image
                          src={product.picture}
                          alt={product.name}
                          width={40}
                          height={40}
                          className="w-auto h-auto"
                        />
                      </div>
                      <div>
                        <p>{product.name}</p>
                        <p>Stock: {product.stock}</p>
                        <p>Price: {product.price}</p>
                        <button
                          className="w-full bg-green-500  text-white font-medium  rounded-lg"
                          onClick={(e) => handleProductSelect(e, product)}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <label htmlFor="productSold">Product Sold:</label>
            <ul className="text-black block text-sm mb-1 font-medium;">
              {productsSold.length > 0
                ? productsSold.map((product, index) => (
                    <li key={product.uniqueId}>
                      {index + 1}. {product.name}
                    </li>
                  ))
                : "-"}
            </ul>
          </div>
        </div>
        <div className="w-full flex justify-between gap-2">
          <button
            type="submit"
            className="w-full bg-red-500  text-white font-medium mx-2 p-2 rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full bg-yellow-500  text-white font-medium mx-2 p-2 rounded-lg"
            onClick={handleSubmit}
          >
            Save invoive
          </button>
        </div>
      </form>
    </section>
  );
};

export default InvoiceForm;
