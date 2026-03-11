import { Code2, ServerCog, Database, Palette, Brain } from "lucide-react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 max-w-6xl mx-auto text-gray-300"
    >
      <h2 className="text-3xl font-bold text-blue-400 mb-12 text-center">
        Technical Skills
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-[#0a0a2e] border border-blue-700 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition">
          <Code2 className="w-10 h-10 text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-3">Languages</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Html & Css</li>
            <li>JavaScript / ReactJS</li>
            <li>Python</li>
            <li>Java</li>
            <li>C</li>
          </ul>
        </div>

        <div className="bg-[#0a0a2e] border border-blue-700 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition">
          <ServerCog className="w-10 h-10 text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-3">Backend</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Django</li>
            <li>REST API</li>
          </ul>
        </div>

        <div className="bg-[#0a0a2e] border border-blue-700 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition">
          <Database className="w-10 h-10 text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-3">Databases</h3>
          <ul className="space-y-2 text-gray-400">
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>SQLite</li>
          </ul>
        </div>

        <div className="bg-[#0a0a2e] border border-blue-700 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition">
          <Palette className="w-10 h-10 text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-3">Design</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Canva</li>
            <li>Figma</li>
          </ul>
        </div>

        <div className="bg-[#0a0a2e] border border-blue-700 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition">
          <Brain className="w-10 h-10 text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-3">AI & Data Science</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Machine Learning</li>
            <li>NLP</li>
            <li>Data Analysis</li>
          </ul>
        </div>
      </div>
    </section>
  );
}