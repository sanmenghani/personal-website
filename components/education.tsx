import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-emerald-800">Education & Certifications</h2>
        <div className="grid gap-6">
          <Card className="section-animation green-gradient-border shadow-lg border-emerald-200">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 bg-emerald-100 rounded-full">
                <GraduationCap className="h-8 w-8 text-emerald-600" />
              </div>
              <div>
                <CardTitle className="text-emerald-800">University of California, Riverside</CardTitle>
                <p className="text-sm text-emerald-600">Graduation: June 2024</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-emerald-800">Bachelor of Science in Computational Mathematics</p>
              <p className="text-emerald-600">Minor in Data Science</p>
            </CardContent>
          </Card>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="section-animation green-gradient-border shadow-lg border-emerald-200">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 bg-emerald-100 rounded-full">
                  <Award className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-emerald-800">QuickBooks ProAdvisor Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-600">2022</p>
              </CardContent>
            </Card>
            <Card className="section-animation green-gradient-border shadow-lg border-emerald-200">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 bg-emerald-100 rounded-full">
                  <Award className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-emerald-800">Google Data Analytics Professional Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-600">2022</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

