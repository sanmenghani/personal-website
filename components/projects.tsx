import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FolderGit2 } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Wildfire Data Analysis Project",
      period: "Jan 2024 – Mar 2024",
      description: "Big data processing and spatial analysis project focused on wildfire patterns.",
      details: [
        "Translated high-level requirements into a big-data processing pipeline using Hadoop",
        "Executed spatial analysis using QGIS to draw data into a choropleth map",
        "Executed temporal analysis using Beast and ran multiple queries for data visualization",
      ],
    },
    {
      title: "Amazon Store System Project",
      period: "Jan 2024 – Mar 2024",
      description: "Interactive console-based shopping system implementation.",
      details: [
        "Created an interactive console for quality user experience",
        "Model and built an online shopping system using Java to implement all functionality",
      ],
    },
    {
      title: "Data Analysis for SERS Research",
      period: "Dec 2022 – June 2023",
      description: "Research project analyzing COVID-19 patient data using spectroscopy.",
      details: [
        "Conducted Surface-enhanced Raman spectroscopy research on covid patients",
        "Executed diagnostic analysis between unfiltered data of regular versus COVID patients",
        "Organized incoming data using BigQuery for optimized results",
      ],
    },
    {
      title: "WonderLust",
      period: "June 2021 – Sept 2022",
      description: "Interior design visualization application developed for TieCon.",
      details: [
        "Led cross-functional team of 6 members",
        "Managed app development from concept to deployment",
        "Built an interior designing assist program for virtual space visualization",
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-emerald-800">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="section-animation green-gradient-border shadow-lg border-emerald-200">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 bg-emerald-100 rounded-full">
                  <FolderGit2 className="h-8 w-8 text-emerald-600" />
                </div>
                <div>
                  <CardTitle className="text-emerald-800">{project.title}</CardTitle>
                  <CardDescription className="text-emerald-600">{project.period}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-emerald-700">{project.description}</p>
                <ul className="list-disc list-inside space-y-2 text-emerald-700">
                  {project.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

