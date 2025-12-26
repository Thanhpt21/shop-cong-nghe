"use client";

import Link from "next/link";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  HeartOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Config } from "@/types/config.type";

interface FooterProps {
  config: Config;
}

const Footer = ({ config }: FooterProps) => {
  const socialLinks = [
    {
      icon: <FacebookOutlined />,
      url: config.facebook,
      color: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600",
      label: "Facebook",
    },
    {
      icon: <TwitterOutlined />,
      url: config.x,
      color: "bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600",
      label: "Twitter",
    },
    {
      icon: <InstagramOutlined />,
      url: config.instagram,
      color: "bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-500 hover:via-pink-500 hover:to-red-500",
      label: "Instagram",
    },
    {
      icon: <YoutubeOutlined />,
      url: config.youtube,
      color: "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600",
      label: "Youtube",
    },
  ].filter((link) => link.url);

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300">
      {/* Tech Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-900/20 via-cyan-900/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-blue-900/20 via-cyan-900/10 to-transparent rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-0 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Company Info & Contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
                {config.name || "Your Brand"}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Mang đến trải nghiệm mua sắm tuyệt vời nhất cho khách hàng
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-6 border border-gray-800 hover:border-cyan-800/50 transition-all duration-300 shadow-xl shadow-blue-900/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  <PhoneOutlined className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Hotline hỗ trợ</p>
                  <p className="text-gray-500 text-xs">
                    08:30 - 22:00 hàng ngày
                  </p>
                </div>
              </div>
              <a
                href={`tel:${config.mobile}`}
                className="block text-3xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent hover:from-cyan-300 hover:via-blue-300 hover:to-cyan-300 transition-all duration-300 animate-text-gradient"
              >
                {config.mobile || "0963 646 444"}
              </a>
            </div>

            <div>
              <h6 className="text-gray-300 font-bold mb-5 text-sm flex items-center gap-3">
                <span className="w-1 h-5 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></span>
                Kết nối với chúng tôi
              </h6>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${link.color} flex items-center justify-center shadow-lg shadow-blue-500/20 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 group-hover:shadow-cyan-500/30`}
                    >
                      <span className="text-white text-xl">{link.icon}</span>
                    </div>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gray-900 to-black backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-gray-800">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h6 className="text-gray-300 font-bold mb-6 text-sm uppercase tracking-wider flex items-center gap-3">
              <span className="w-1 h-5 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></span>
              Về chúng tôi
            </h6>
            <ul className="space-y-3">
              {[
                { label: "Giới thiệu", href: "/gioi-thieu" },
                { label: "Sản phẩm", href: "/san-pham" },
                { label: "Tin tức", href: "/tin-tuc" },
                { label: "Liên hệ", href: "/lien-he" },
                { label: "Tuyển dụng", href: "/tuyen-dung" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-cyan-300 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <RightOutlined className="text-xs text-cyan-500 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h6 className="text-gray-300 font-bold mb-6 text-sm uppercase tracking-wider flex items-center gap-3">
              <span className="w-1 h-5 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></span>
              Chính sách & Hỗ trợ
            </h6>
            <ul className="space-y-3">
              {[
                { label: "Hướng dẫn chọn size", href: "/huong-dan-chon-size" },
                { label: "Khách hàng thân thiết", href: "/chinh-sach-khach-hang-than-thiet" },
                { label: "Câu hỏi thường gặp", href: "/cau-hoi-thuong-gap" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-cyan-300 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <RightOutlined className="text-xs text-cyan-500 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company Info */}
          <div>
            <h6 className="text-gray-300 font-bold mb-6 text-sm uppercase tracking-wider flex items-center gap-3">
              <span className="w-1 h-5 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></span>
              Thông tin liên hệ
            </h6>

            <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-6 border border-gray-800">
              <p className="text-white font-bold text-sm mb-4">
                {config.name || "Tên công ty"}
              </p>
              <div className="space-y-4 text-sm text-gray-400">
                <p className="flex items-start gap-3">
                  <MailOutlined className="text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="break-all">
                    {config.email || "email@example.com"}
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <EnvironmentOutlined className="text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    {config.address || "Địa chỉ công ty"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <p className="text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()}{" "}
              <span className="font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                {config.name || "Your Brand"}
              </span>
              . All rights reserved. Made with{" "}
              <HeartOutlined className="text-red-500 mx-1" /> in Vietnam
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-500">
              <Link
                href="/dieu-khoan"
                className="hover:text-cyan-300 transition-colors"
              >
                Điều khoản
              </Link>
              <span className="text-gray-700">•</span>
              <Link
                href="/chinh-sach-bao-mat"
                className="hover:text-cyan-300 transition-colors"
              >
                Bảo mật
              </Link>
              <span className="text-gray-700">•</span>
              <Link
                href="/cookies"
                className="hover:text-cyan-300 transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.1);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }

        @keyframes text-gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-text-gradient {
          background-size: 200% 200%;
          animation: text-gradient 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;