import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <main className="h-screen flex justify-center items-center">
        <section>
          <h1 className="text-2xl mb-9">404 - Page Not Found</h1>
          <Link href={`/`} className="bg-dark-blue p-4 text-white rounded-lg">
            Return Home
          </Link>
        </section>
      </main>
    </>
  );
};

export default NotFound;
