import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { InstructorContext } from '@/context/instructor-context'
import { Input } from '@/components/ui/input'
import React, { useContext } from 'react'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { courseCurriculumInitialFormData } from '@/config'
function CourseCurriculum() {

  const { courseCurriculumFormData, setCourseCurriculumFormData } = useContext(InstructorContext)
  function handleNewLecture() {
    setCourseCurriculumFormData([
      ...courseCurriculumFormData,
      {
        ...courseCurriculumInitialFormData[0],
      },
    ])
  }
  console.log(courseCurriculumFormData)
  return (
    <div>
      
      <Card>
        <CardHeader>
          <CardTitle>create course curriculum</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={handleNewLecture}>Add Lecture</Button>
          <div>
            {courseCurriculumFormData.map((curriculumItem, index) => (
              <div className="border p-5 rounded-md my-4">
                <div className='flex gap-5'>
                  <h3 className='font-semibold'>Lecture {index + 1}</h3>
                  <Input
                    name="title"
                    placeholder="enter lecture title"
                    className="max-w-96" />
                  <div className="flex items-center space-x-2">
                  <Switch
                    // onCheckedChange={(value) =>
                    //   handleFreePreviewChange(value, index)
                    // }
                      // checked={courseCurriculumFormData[index]?.freePreview}
                      checked={true}
                    id={`freePreview-${index + 1}`}
                  />
                  <Label htmlFor={`freePreview-${index + 1}`}>
                    Free Preview
                  </Label>
                </div>
                </div>
                <div className='mt-6'><Input type = "file" accept = "video/*" className="mb-4"/></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CourseCurriculum
