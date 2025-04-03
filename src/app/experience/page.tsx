"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function Experience() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 设置初始状态
    gsap.set([".page-title", ".page-subtitle"], {
      opacity: 0,
      y: 50,
    });

    // 各部分内容动画初始设置
    gsap.set([
      ".personal-title",
      ".personal-content",
      ".education-title",
      ".education-items",
      ".work-title",
      ".work-items",
    ], {
      opacity: 0,
      y: 50,
    });

    // 标题动画
    const titleTimeline = gsap.timeline({
      delay: 0.2,
    });

    titleTimeline.to(".page-title", {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
    })
      .to(".page-subtitle", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }, "-=0.8");

    // 个人故事部分动画
    gsap.to(".personal-title", {
      scrollTrigger: {
        trigger: ".personal-section",
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power4.out",
    });

    gsap.to(".personal-content", {
      scrollTrigger: {
        trigger: ".personal-section",
        start: "top center",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power4.out",
    });

    // 教育经历部分动画
    gsap.to(".education-title", {
      scrollTrigger: {
        trigger: ".education-section",
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power4.out",
    });

    gsap.to(".education-items", {
      scrollTrigger: {
        trigger: ".education-section",
        start: "top center",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power4.out",
    });

    // 工作经历部分动画
    gsap.to(".work-title", {
      scrollTrigger: {
        trigger: ".work-section",
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power4.out",
    });

    gsap.to(".work-items", {
      scrollTrigger: {
        trigger: ".work-section",
        start: "top center",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power4.out",
    });

    // 背景视差效果
    gsap.to(".parallax-bg", {
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
      y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
      ease: "none",
    });
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* 装饰背景 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="parallax-bg absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-100 to-indigo-200 opacity-20 blur-3xl" data-speed="0.5"></div>
        <div className="parallax-bg absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-pink-100 to-rose-200 opacity-20 blur-3xl" data-speed="0.3"></div>
        <div className="parallax-bg absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-blue-100 to-cyan-200 opacity-20 blur-3xl" data-speed="0.4"></div>
      </div>

      {/* Hero Section */}
      <section ref={titleRef} className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4 relative">
        <h1 className="page-title text-4xl md:text-6xl font-serif text-gray-800 mb-6 text-center opacity-0 translate-y-[50px]">
          我的经历
        </h1>
        <p className="page-subtitle text-lg md:text-xl text-gray-600 max-w-2xl text-center leading-relaxed opacity-0 translate-y-[50px]">
          探索、学习、创造，每一段旅程都在塑造我的视角与思考
        </p>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* 个人故事部分 */}
      <section id="personal" className="personal-section min-h-screen flex flex-col items-center justify-center relative py-20 px-4">
        <div className="parallax-bg absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-rose-50 to-pink-100 opacity-10 blur-3xl" data-speed="0.35"></div>
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <h2 className="personal-title text-4xl md:text-6xl font-serif text-gray-800 opacity-0 translate-y-[50px]">
            个人故事
          </h2>
          <div className="personal-content space-y-16 opacity-0 translate-y-[50px]">
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl text-gray-700 font-serif leading-relaxed">
                最疯狂的经历
              </h3>
              <div className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                <p className="mb-4">
                  我做过最疯狂的事情之一，是带着500美元现金去美国交换，没有国际支付的银行卡，四个月没有美国的SIM卡。
                  那段时间，我几乎是在即兴发挥，不断解决各种突发问题，在没有现代支付工具的情况下摸索如何生存。
                </p>
                <p className="mb-4">
                  后来，我又做了一个大胆的决定：放弃国外计算机专业的offer，选择留在国内的科技创投行业实习。
                  当时大多数人都会选择去国外继续深造，但我更想在最前沿的创业环境中学习。
                </p>
                <p>
                  真正的"疯狂"发生在实习结束后——我直接选择创业。
                  没有完全成熟的计划，也没有稳定的收入来源，但我知道，如果我想做出真正有价值的事情，就必须踏出这一步。
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl text-gray-700 font-serif leading-relaxed">
                最有价值的经历
              </h3>
              <div className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                <p className="mb-4">
                  我做过最有价值和意义的事情，都是关于"理解"和"连接"。
                </p>
                <p className="mb-4">
                  在上海精神卫生中心实习时，我接待过许多心理困扰的来访者。我发现，很多人深陷心理困境的本质，是他们的思维进入了一种死循环，无法跳脱。
                  这让我意识到，真正的帮助，不是告诉他们"要好起来"，而是创造一个他们可以被理解、被接纳的空间。
                </p>
                <p className="mb-4">
                  在国际学校，我陪伴过一位自闭症儿童。有一天，她突然看着我，说了一句"Alin, I love you."
                  那一刻，我知道，理解可以超越语言，而真正的陪伴是可以被感受到的。
                </p>
                <p>
                  选择创业后，我希望让每个人都能用上AI。当我用AI帮他们做一些实际的事情，他们的眼神一下子就亮了起来。
                  我意识到，让人们理解和接受一件新事物，最好的方式是让他们"感受到"它的价值。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 教育经历部分 */}
      <section id="education" className="education-section min-h-screen flex flex-col items-center justify-center relative py-20 px-4">
        <div className="parallax-bg absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-50 to-indigo-100 opacity-10 blur-3xl" data-speed="0.4"></div>
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <h2 className="education-title text-4xl md:text-6xl font-serif text-gray-800 opacity-0 translate-y-[50px]">
            教育经历
          </h2>
          <div className="education-items space-y-12 opacity-0 translate-y-[50px]">
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm space-y-2">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <h3 className="text-xl font-medium text-gray-800">计算机科学</h3>
                <span className="text-rose-600 text-sm font-medium px-3 py-1 bg-rose-50 rounded-full">中途退学</span>
              </div>
              <p className="text-gray-600">不列颠哥伦比亚大学，温哥华，加拿大</p>
              <p className="text-gray-500 text-sm">2023年9月</p>
            </div>

            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm space-y-2">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <h3 className="text-xl font-medium text-gray-800">应用心理学</h3>
                <span className="text-blue-600 text-sm font-medium px-3 py-1 bg-blue-50 rounded-full">GPA: 3.86（专业课）</span>
              </div>
              <p className="text-gray-600">上海师范大学，上海，中国</p>
              <p className="text-gray-500 text-sm">2019年9月 - 2023年6月</p>
            </div>

            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm space-y-2">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <h3 className="text-xl font-medium text-gray-800">工业设计（辅修）</h3>
              </div>
              <p className="text-gray-600">上海交通大学，上海，中国</p>
              <p className="text-gray-500 text-sm">2021年1月 - 2023年6月</p>
              <p className="text-gray-600 text-sm">主修课程：开源与建模，计算机辅助设计</p>
            </div>

            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm space-y-2">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <h3 className="text-xl font-medium text-gray-800">交换生，心理学</h3>
                <span className="text-green-600 text-sm font-medium px-3 py-1 bg-green-50 rounded-full">优等生名单</span>
              </div>
              <p className="text-gray-600">南康涅狄格州立大学，纽黑文，美国</p>
              <p className="text-gray-500 text-sm">2021年8月 - 2021年12月</p>
            </div>

            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm space-y-2">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <h3 className="text-xl font-medium text-gray-800">交换生，心理学</h3>
                <span className="text-green-600 text-sm font-medium px-3 py-1 bg-green-50 rounded-full">GPA: 3.94</span>
              </div>
              <p className="text-gray-600">布里奇沃特州立大学，布里奇沃特，美国</p>
              <p className="text-gray-500 text-sm">2022年1月 - 2022年5月</p>
            </div>
          </div>
        </div>
      </section>

      {/* 工作经历部分 */}
      <section id="work" className="work-section min-h-screen flex flex-col items-center justify-center relative py-20 px-4">
        <div className="parallax-bg absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-amber-50 to-yellow-100 opacity-10 blur-3xl" data-speed="0.35"></div>
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <h2 className="work-title text-4xl md:text-6xl font-serif text-gray-800 opacity-0 translate-y-[50px]">
            工作经历
          </h2>
          <div className="work-items space-y-12 opacity-0 translate-y-[50px]">
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm space-y-2">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <h3 className="text-xl font-medium text-gray-800">联合创始人</h3>
              </div>
              <p className="text-gray-600">Planet Matrix | 中关村，北京</p>
              <p className="text-gray-500 text-sm">2024年1月 - 至今</p>
            </div>

            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm space-y-2">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <h3 className="text-xl font-medium text-gray-800">实习生</h3>
              </div>
              <p className="text-gray-600">MiraclePlus | 北京</p>
              <p className="text-gray-500 text-sm">2023年6月 - 2023年12月</p>
              <p className="text-gray-600">深入参与 F23 创业营的运营</p>
            </div>

            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm space-y-2">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <h3 className="text-xl font-medium text-gray-800">创业者</h3>
              </div>
              <p className="text-gray-600">X-bot Park | 宁波</p>
              <p className="text-gray-500 text-sm">2023年7月 - 2023年8月</p>
              <p className="text-gray-600">从0到1进行用户调研、产品定义、MVP开发</p>
              <p className="text-gray-600">可穿戴设备用于监测跑步姿态数据，以确保安全和科学</p>
            </div>

            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm space-y-2">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <h3 className="text-xl font-medium text-gray-800">影子老师</h3>
              </div>
              <p className="text-gray-600">上海利文顿美国学校 | 上海</p>
              <p className="text-gray-500 text-sm">2022年11月 - 2023年6月</p>
              <p className="text-gray-600">
                协助学生的教育和社会发展，协助实施个性化教育计划并监控进展，
                支持学生充分参与活动，与其他专业人士合作，支持有情绪或行为问题的学生，并帮助他们发展适当的社交技能。
              </p>
            </div>

            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm space-y-2">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <h3 className="text-xl font-medium text-gray-800">音乐治疗师（实习）</h3>
              </div>
              <p className="text-gray-600">同济大学附属第十人民医院 | 上海</p>
              <p className="text-gray-500 text-sm">2022年9月 - 2022年10月</p>
              <p className="text-gray-600">音乐治疗和心理健康咨询</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
