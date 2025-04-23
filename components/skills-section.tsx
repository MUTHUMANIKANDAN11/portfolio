import { Code, Database, Globe, Layout, Server, Terminal, Smartphone, Figma } from "lucide-react"

export default function SkillsSection() {
  const frontendSkills = [
    { name: "HTML/CSS", icon: <Layout className="h-6 w-6" /> },
    { name: "JavaScript", icon: <Code className="h-6 w-6" /> },
    { name: "React", icon: <Globe className="h-6 w-6" /> },
    { name: "Next.js", icon: <Terminal className="h-6 w-6" /> },
    { name: "TypeScript", icon: <Code className="h-6 w-6" /> },
    { name: "Tailwind CSS", icon: <Layout className="h-6 w-6" /> },
    { name: "Responsive Design", icon: <Smartphone className="h-6 w-6" /> },
    { name: "UI/UX Design", icon: <Figma className="h-6 w-6" /> },
  ]

  const backendSkills = [
    { name: "Node.js", icon: <Server className="h-6 w-6" /> },
    { name: "Express", icon: <Server className="h-6 w-6" /> },
    { name: "MongoDB", icon: <Database className="h-6 w-6" /> },
    { name: "PostgreSQL", icon: <Database className="h-6 w-6" /> },
    { name: "RESTful APIs", icon: <Globe className="h-6 w-6" /> },
    { name: "GraphQL", icon: <Code className="h-6 w-6" /> },
    { name: "Firebase", icon: <Database className="h-6 w-6" /> },
    { name: "AWS", icon: <Server className="h-6 w-6" /> },
  ]

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world. Here are my main areas of
            expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Frontend Development</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {frontendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <div className="p-2 rounded-full bg-primary/10 text-primary">{skill.icon}</div>
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Backend Development</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {backendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <div className="p-2 rounded-full bg-primary/10 text-primary">{skill.icon}</div>
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
