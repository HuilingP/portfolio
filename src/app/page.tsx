"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // 设置初始状态
    gsap.set([".hero-title", ".hero-subtitle"], {
      opacity: 0,
      y: 50
    });
    
    // Hero 动画
    const heroTimeline = gsap.timeline({
      delay: 0.2
    });
    
    heroTimeline.to(".hero-title", {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out"
    })
    .to(".hero-subtitle", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    }, "-=0.8");

    // 背景视差效果
    gsap.to(".parallax-bg", {
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      },
      y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
      ease: "none"
    });

    // Vision Section 动画
    gsap.set([".vision-title", ".vision-main", ".vision-desc"], {
      opacity: 0,
      y: 50
    });

    gsap.to(".vision-title", {
      scrollTrigger: {
        trigger: ".vision-content",
        start: "top center+=100",
        toggleActions: "play none none reverse"
      },
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power4.out"
    });

    gsap.to(".vision-main", {
      scrollTrigger: {
        trigger: ".vision-content",
        start: "top center+=50",
        toggleActions: "play none none reverse"
      },
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power4.out"
    });

    gsap.to(".vision-desc", {
      scrollTrigger: {
        trigger: ".vision-content",
        start: "top center",
        toggleActions: "play none none reverse"
      },
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay: 0.6,
      ease: "power4.out"
    });

    // Social Media Sections 动画
    gsap.set([".wechat-title", ".wechat-main", ".xiaohongshu-title", ".xiaohongshu-main"], {
      opacity: 0,
      y: 50
    });

    gsap.to(".wechat-title", {
      scrollTrigger: {
        trigger: ".wechat-content",
        start: "top center+=100",
        toggleActions: "play none none reverse"
      },
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power4.out"
    });

    gsap.to(".wechat-main", {
      scrollTrigger: {
        trigger: ".wechat-content",
        start: "top center",
        toggleActions: "play none none reverse"
      },
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power4.out"
    });

    gsap.to(".xiaohongshu-title", {
      scrollTrigger: {
        trigger: ".xiaohongshu-content",
        start: "top center+=100",
        toggleActions: "play none none reverse"
      },
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power4.out"
    });

    gsap.to(".xiaohongshu-main", {
      scrollTrigger: {
        trigger: ".xiaohongshu-content",
        start: "top center",
        toggleActions: "play none none reverse"
      },
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power4.out"
    });

  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* 装饰背景 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="parallax-bg absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-pink-100 to-pink-200 opacity-20 blur-3xl" data-speed="0.5"></div>
        <div className="parallax-bg absolute top-3/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 opacity-20 blur-3xl" data-speed="0.3"></div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4 relative">
        <h1 className="hero-title text-4xl md:text-6xl font-serif text-gray-800 mb-6 text-center opacity-0 translate-y-[50px]">
          潘慧玲
          <span className="block text-2xl md:text-3xl mt-2 text-gray-600">Huiling Pan</span>
        </h1>
        <p className="hero-subtitle text-lg md:text-xl text-gray-600 max-w-2xl text-center leading-relaxed opacity-0 translate-y-[50px]">
          AI 创业公司 COO & 合伙人 | 跨文化交流者 | 新媒体创作者
        </p>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Vision Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative py-20 px-4">
        <div className="parallax-bg absolute top-1/2 right-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-purple-50 to-indigo-100 opacity-10 blur-3xl" data-speed="0.4"></div>
        <div className="vision-content max-w-4xl mx-auto text-center space-y-16">
          <h2 className="vision-title text-4xl md:text-6xl font-serif text-gray-800 opacity-0 translate-y-[50px]">
            愿景
          </h2>
          <p className="vision-main text-2xl md:text-4xl font-serif text-gray-700 leading-relaxed opacity-0 translate-y-[50px]">
            "创立一家改变世界的 AI 公司"
          </p>
          <p className="vision-desc text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto opacity-0 translate-y-[50px]">
            以创新的技术和人文关怀，打造具有全球影响力的 AI 解决方案<br/>
            让 AI 技术真正服务于人类，创造更美好的未来
          </p>
        </div>
      </section>

      {/* WeChat Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative py-20 px-4">
        <div className="parallax-bg absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-green-50 to-emerald-100 opacity-10 blur-3xl" data-speed="0.35"></div>
        <div className="wechat-content max-w-4xl mx-auto text-center space-y-16">
          <h2 className="wechat-title text-4xl md:text-6xl font-serif text-gray-800 opacity-0 translate-y-[50px]">
            思考与分享
          </h2>
          <div className="wechat-main space-y-8 opacity-0 translate-y-[50px]">
            <p className="text-2xl md:text-3xl text-gray-700 font-serif leading-relaxed">
              在微信公众号，我记录着通往梦想的每一步思考
            </p>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              从技术创新到商业洞察，分享 AI 创业路上的点滴心得<br/>
              期待与你一起探索未来科技的无限可能
            </p>
          </div>
        </div>
      </section>

      {/* Xiaohongshu Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative py-20 px-4">
        <div className="parallax-bg absolute top-1/2 right-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-blue-50 to-indigo-100 opacity-10 blur-3xl" data-speed="0.4"></div>
        <div className="xiaohongshu-content max-w-4xl mx-auto text-center space-y-16">
          <h2 className="xiaohongshu-title text-4xl md:text-6xl font-serif text-gray-800 opacity-0 translate-y-[50px]">
            跨越与连接
          </h2>
          <div className="xiaohongshu-main space-y-8 opacity-0 translate-y-[50px]">
            <p className="text-2xl md:text-3xl text-gray-700 font-serif leading-relaxed">
              在小红书，我正在构建起通往全球的桥梁
            </p>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              超过 1000 位来自世界各地的朋友在这里相聚<br/>
              用真诚的对话，打破文化的界限，链接全球的创新力量
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
