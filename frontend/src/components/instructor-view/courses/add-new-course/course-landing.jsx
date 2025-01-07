import React, { useContext, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { InstructorContext } from '@/context/instructor-context'
import FormControls from '@/components/common-form/form-controls'
import { courseLandingPageFormControls } from '@/config'
function CourseLanding() {
    const {courseLandingFormData, setCourseLandingFormData} = useContext(InstructorContext)
  return (
    <div>
      <Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
                  <FormControls
                      formControls={courseLandingPageFormControls}
                      formData={courseLandingFormData}
                  setFormData={setCourseLandingFormData}/>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

    </div>
  )
}

export default CourseLanding
