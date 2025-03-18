import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Database, Globe, LineChart } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "Java", "SQL", "JavaScript", "TypeScript"],
    },
    {
      title: "Data Analysis & Visualization",
      icon: LineChart,
      skills: ["Tableau", "Power BI", "Excel", "BigQuery", "Hadoop"],
    },
    {
      title: "GIS & Spatial Analysis",
      icon: Globe,
      skills: ["ArcGIS Enterprise", "QGIS", "Spatial Analysis", "Mapping"],
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      skills: ["AWS", "Azure", "SQL Server", "SAP", "Salesforce"],
    },
  ]

  return (
    <section id="skills" className="py-20 green-gradient-bg">
      <div className="container px-4">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-emerald-800">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="section-animation green-gradient-border shadow-lg border-emerald-200">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-2 bg-emerald-100 rounded-full">
                    <Icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-800">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-1 bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

