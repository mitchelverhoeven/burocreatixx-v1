"use client";

import ContentSectionLeft from "./ContentSectionLeft/ContentSectionLeft";
import ContentSectionRight from "./ContentSectionRight/ContentSectionRight";
import Footer from "../../Footer/Footer";

export default function ContentSection() {
  return (
    <div className="mb-[300px]">
      <div
        className="grid grid-cols-2 w-full h-[400px] max-[1050px]:grid-cols-1
      max-[1050px]:-mt-[200px] max-[425px]:-mt-[100px]"
      >
        <div className="max-[1050px]:order-2">
          <ContentSectionLeft />
        </div>
        <ContentSectionRight />
        <div
          className="max-[1050px]:order-last min-[1051px]:hidden max-[1051px]:pt-[130px]
        max-[1051px]:pb-[50px] max-[751px]:pb-[20px]"
        >
          <Footer />
        </div>
      </div>
    </div>
  );
}
