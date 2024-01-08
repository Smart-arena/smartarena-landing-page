import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = ({ product }: any) => {
  const img = product && product?.images[0];
  // Format numbers
  const formatter = new Intl.NumberFormat("en-US");
  //   console.log(`https://res.cloudinary.com/deipg69lh/image/upload/${img}`)
  return (
    <>
      <Link href={"/"}>
        <main className=" bg-dark-blue mx-2 text-white rounded-lg flex flex-col items-center space-y-5 h-auto">
          <Image
            src={`https://res.cloudinary.com/deipg69lh/image/upload/${img}`}
            alt={`${product?.name}`}
            width={250}
            height={200}
            className="m-6 rounded-lg"
            priority
          />

          <h1>{product?.name}</h1>

          <p>
            ₦{formatter.format(product?.salePrice)}
            <span className="line-through text-sm text-gray-500">
              ₦{formatter.format(product?.price)}{" "}
            </span>{" "}
          </p>
        </main>
      </Link>
    </>
  );
};

export default Product;
