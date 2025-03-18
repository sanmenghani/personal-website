import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Technical Analyst",
      company: "Esri",
      location: "Redlands, CA",
      period: "August 2024 - Current",
      responsibilities: [
        "Resolved 30+ cases using ArcGIS Enterprise monthly with a 95% customer satisfaction rate",
        "Enhanced resolution time by 20% through improved documentation and diagnostics through Salesforce",
        "Leveraged SQL, Python, and cloud services (AWS, Azure) to troubleshoot network, performance, and data integration issues",
      ],
    },
    {
      title: "Student Assistant",
      company: "Esri",
      location: "Redlands, CA",
      period: "April 2024",
      responsibilities: [
        "Provided comprehensive administrative support for Esri Development Summit 2024",
        "Collaborated effectively with team members to analyze execution of event logistics",
        "Participated in networking events to gather knowledge on upcoming GIS",
      ],
    },
    {
      title: "Data Analyst Intern",
      company: "Accounting Room",
      location: "Los Angeles, CA",
      period: "June 2021 - Sept 2022",
      responsibilities: [
        "Performed analysis on sales order data using Excel and verified accuracy using SAP",
        "Collaborated with teams to evaluate financial statements and developed charts using Tableau",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 green-gradient-bg">
      <div className="container px-4">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-emerald-800">Work Experience</h2>
        <div className="grid gap-6">
          {experiences.map((experience, index) => (
            <Card key={index} className="section-animation green-gradient-border shadow-lg border-emerald-200">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 bg-emerald-100 rounded-full">
                  <Briefcase className="h-8 w-8 text-emerald-600" />
                </div>
                <div>
                  <CardTitle className="text-emerald-800">{experience.title}</CardTitle>
                  <p className="text-sm text-emerald-600">
                    {experience.company} • {experience.location}
                  </p>
                  <p className="text-sm text-emerald-600">{experience.period}</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-emerald-700">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
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

