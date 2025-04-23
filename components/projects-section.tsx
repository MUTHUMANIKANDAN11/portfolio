import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online store with cart, checkout, and payment integration.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity tool for organizing tasks with drag-and-drop functionality.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Next.js", "TypeScript", "Tailwind"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["React", "Framer Motion", "CSS"],
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather information with location-based forecasts.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["JavaScript", "API", "Chart.js"],
    },
    {
      id: 5,
      title: "Social Media App",
      description: "A platform for connecting users with messaging and post sharing.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["React", "Firebase", "Redux"],
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "An application to track workouts and monitor fitness progress.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["React Native", "GraphQL", "MongoDB"],
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new
            technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View More
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
