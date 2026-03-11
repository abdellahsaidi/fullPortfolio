import { useEffect, useRef, useState } from "react";
import profileCartoon from "../assets/images/logo.png";
import { data } from "../config"; 

export default function Details() {
  const [expCount, setExpCount] = useState(0);
  const [eduYear, setEduYear] = useState(2000);
  const [animated, setAnimated] = useState(false);
  const containerRef = useRef(null);

  const targetExperience = data.experienceYears || 3;
  const targetEducationYear = data.educationEndYear || 2025;

  useEffect(() => {
    if (animated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimated(true);
            animateNumber(setExpCount, 0, targetExperience, 1500);
            animateNumber(setEduYear, 2000, targetEducationYear, 3000);
          }
        });
      },
      { threshold: 0.35 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [animated, targetExperience, targetEducationYear]);

  const animateNumber = (setState, start, end, duration) => {
    const startTime = performance.now();
    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(start + (end - start) * progress);
      setState(value);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  return (
    <section
      id="details"
      ref={containerRef}
      className="py-20 px-6 max-w-6xl mx-auto text-gray-300"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative inline-block rounded-2xl ring-2 ring-blue-400 shadow-lg hover:shadow-blue-500/40 transition duration-300 animate-pulse">
            <img
              src={profileCartoon}
              alt={`Cartoon illustration of ${data.name}`}
              className="w-64 h-65 object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Text + Boxes */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-blue-400">Some Details</h2>

          {/* Utilisation de dangerouslySetInnerHTML pour interpréter le <br/> si tu le mets dans ton config.js, ou simplement l'afficher tel quel */}
          <p className="text-gray-400 leading-relaxed">
            I'm <span className="text-blue-300 font-medium">{data.name}</span>, a
            Computer Science student at Saad Dahlab University, Blida, and a passionate Full-Stack Web Developer. 
            <br />
            Currently, I'm expanding my skills in AI and Data Science (Machine Learning & NLP), combining my expertise in web development with intelligent, data-driven solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div className="bg-black/40 border border-blue-700 rounded-lg p-6 shadow-md hover:shadow-blue-500/20 transition">
              <h3 className="text-lg font-semibold text-blue-300">
                🎓 Education
              </h3>
              <p className="text-gray-400">{eduYear}</p>
            </div>

            <div className="bg-black/40 border border-blue-700 rounded-lg p-6 shadow-md hover:shadow-blue-500/20 transition">
              <h3 className="text-lg font-semibold text-blue-300">
                💼 Experience
              </h3>
              <p className="text-gray-400">{expCount}+ Years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}