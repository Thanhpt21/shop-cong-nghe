"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { 
  ChevronLeft,
  ChevronRight,
  Laptop,
  Smartphone,
  Headphones,
  Truck,
  RefreshCw,
  Shield,
  CreditCard,
  ArrowRight
} from "lucide-react";

export default function TechStoreHeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Màu chủ đạo #0B8BB9 (xanh dương đậm hiện đại)
  const primaryColor = "#0B8BB9";
  const lightPrimary = "bg-blue-50"; // dùng blue-50 gần nhất với tông sáng

  const featuredProducts = [
    {
      id: 1,
      title: "MacBook Pro M4 Pro",
      subtitle: "Hiệu năng vượt trội",
      price: "Từ 45.990.000đ",
      oldPrice: "52.990.000đ",
      discount: "-13%",
      description: "Chip M4 Pro mới nhất, màn hình Liquid Retina XDR, pin lên đến 22 giờ",
      cta: "Mua ngay",
      icon: Laptop,
      badge: "MỚI NHẤT 2025"
    },
    {
      id: 2,
      title: "iPhone 16 Pro Max",
      subtitle: "Camera 48MP • Titanium",
      price: "Từ 32.990.000đ",
      oldPrice: "38.990.000đ",
      discount: "-15%",
      description: "Chip A18 Pro, màn hình 120Hz, quay video 4K 120fps",
      cta: "Đặt trước",
      icon: Smartphone,
      badge: "BÁN CHẠY NHẤT"
    },
    {
      id: 3,
      title: "AirPods Pro 2",
      subtitle: "Chống ồn chủ động",
      price: "6.290.000đ",
      oldPrice: "7.490.000đ",
      discount: "-20%",
      description: "Âm thanh không gian, chống ồn gấp 2 lần, pin 30 giờ với case",
      cta: "Thêm vào giỏ",
      icon: Headphones,
      badge: "GIẢM SỐC"
    }
  ];

  const services = [
    { icon: Truck, title: "Giao hàng miễn phí", desc: "Toàn quốc từ 500K" },
    { icon: RefreshCw, title: "Đổi trả dễ dàng", desc: "30 ngày đổi mới" },
    { icon: Shield, title: "Bảo hành chính hãng", desc: "1 đổi 1 trong 12 tháng" },
    { icon: CreditCard, title: "Trả góp 0%", desc: "Thủ tục nhanh chóng" }
  ];

  const stats = [
    { value: "10.000+", label: "Sản phẩm chính hãng" },
    { value: "50.000+", label: "Khách hàng hài lòng" },
    { value: "4.9/5", label: "Đánh giá trung bình" },
    { value: "15+", label: "Năm uy tín" }
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
  }, [featuredProducts.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  }, [featuredProducts.length]);

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 6000);
    return () => clearInterval(timerRef.current || undefined);
  }, [nextSlide]);

  return (
    <section className="relative bg-white py-12 md:py-20 overflow-hidden">
      {/* Background nhẹ với tông xanh chủ đạo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#0B8BB9] to-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-[#0B8BB9] to-blue-300 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Headline - chữ nhỏ hơn, gọn gàng */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Công nghệ chính hãng
            <br />
            <span style={{ color: primaryColor }}>Giá tốt nhất</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Laptop · Điện thoại · Tai nghe · Phụ kiện từ Apple, Samsung, Sony, ASUS, Xiaomi...
          </p>

          {/* Stats nhỏ gọn */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold" style={{ color: primaryColor }}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel sản phẩm - đơn giản, sạch sẽ */}
        <div className="relative mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900">
            Sản phẩm nổi bật
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                animate={{
                  scale: idx === currentIndex ? 1.04 : 1,
                  opacity: idx === currentIndex ? 1 : 0.85
                }}
                whileHover={{ scale: 1.04 }}
                onClick={() => setCurrentIndex(idx)}
                className={`relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-400 p-8 text-center border ${
                  idx === currentIndex ? 'border-[#0B8BB9]' : 'border-gray-200'
                }`}
              >
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                  {product.badge}
                </div>

                {/* Icon trong khung nhẹ */}
                <div className={`w-20 h-20 mx-auto mb-6 ${lightPrimary} rounded-2xl flex items-center justify-center`}>
                  <product.icon size={40} style={{ color: primaryColor }} />
                </div>

                {/* Tiêu đề & mô tả */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">{product.subtitle}</p>
                <p className="text-xs text-gray-500 mb-5 line-clamp-2">
                  {product.description}
                </p>

                {/* Giá */}
                <div className="mb-5">
                  <div className="text-xl font-bold text-gray-900">
                    {product.price}
                  </div>
                  <div className="text-sm text-gray-500 line-through">
                    {product.oldPrice}
                  </div>
                  <div className="mt-2 inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                    {product.discount}
                  </div>
                </div>

                {/* CTA */}
                <button 
                  className="w-full py-3 text-white font-medium rounded-xl transition hover:opacity-90"
                  style={{ backgroundColor: primaryColor }}
                >
                  {product.cta} <ArrowRight className="inline ml-1" size={16} />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Nút điều hướng */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50"
          >
            <ChevronLeft size={20} className="text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50"
          >
            <ChevronRight size={20} className="text-gray-700" />
          </button>
        </div>

        {/* Dịch vụ - đơn giản */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl p-5 text-center hover:bg-gray-100 transition"
            >
              <service.icon size={28} style={{ color: primaryColor }} className="mx-auto mb-3" />
              <h4 className="text-sm font-medium text-gray-900 mb-1">{service.title}</h4>
              <p className="text-xs text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}