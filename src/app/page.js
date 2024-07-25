// pages/index.js
import React from "react";
import Accordion from "./Accordion";

const Page = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Project2:SSS-Accordion</h1>
      <h3 style={{ textAlign: "center" }}>Sıkça Sorulan Sorular</h3>
      <Accordion
        title="Ürün kaliteli mi?"
        content="Ürünümüz yüksek kaliteli malzemelerden üretilmiştir ve kalite kontrol testlerinden geçmiştir."
      />
      <Accordion title="Fiyatı ne kadar?" content="Ürünün fiyatı 100 TL'dir." />
      <Accordion
        title="Ne zaman ulaşır?"
        content="Ürün siparişinizden itibaren 3 iş günü içinde teslim edilir."
      />
    </div>
  );
};

export default Page;
