"use client";

import { Button } from "@/components/ui/button";
import { Download, Save } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resumeSchema } from "@/app/lib/schema";
import useFetch from "@/hooks/useFetch";
import { saveResume } from "@/actions/resume";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EntryForm } from "./EntryForm";

export const ResumeBuilder = ({ initialContent }) => {
  const [activeTab, setActiveTab] = useState("edit");

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resumeSchema),
    defaultValues: {
      contactInfo: {},
      summary: "",
      skills: "",
      experience: [],
      education: [],
      projects: [],
    },
  });

  const {
    loading: isSaving,
    fn: saveResumeFn,
    data: saveResult,
    error: saveError,
  } = useFetch(saveResume);

  const formValues = watch();

  useEffect(() => {
    if (initialContent) setActiveTab("preview");
  }, [initialContent]);

  const onSubmit = async (data) => {
    alert("Form submit successfully!");
  };

  return (
    <div className="space-y-4">
      {/* heading for page  */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-2">
        <h1 className="font-bold gradient-title text-5xl md:text-6xl">
          Resume Builder
        </h1>
        <div className="space-x-2">
          <Button variant={"destructive"} className={"cursor-pointer"}>
            <Save className="h-4 w-4" />
            Save
          </Button>
          <Button className={"cursor-pointer"}>
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* tabs component  */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className={"space-x-4"}>
          <TabsTrigger value="edit" className={"cursor-pointer"}>
            Form
          </TabsTrigger>
          <TabsTrigger value="preview" className={"cursor-pointer"}>
            Markdown
          </TabsTrigger>
        </TabsList>
        <TabsContent value="edit">
          <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Contact Information</h3>

              {/* contact info inputs  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg bg-muted/50">
                <div className="space-y-2">
                  <Label className={"text-sm font-medium"}>Email</Label>
                  <Input
                    {...register("contactInfo.email")}
                    type="email"
                    placeholder="your@email.com"
                    error={errors.contactInfo?.email}
                  />
                  {errors.contactInfo?.email && (
                    <p className="text-sm text-red-500">
                      {errors.contactInfo.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className={"text-sm font-medium"}>Mobil Number</Label>
                  <Input
                    {...register("contactInfo.mobile")}
                    type="tel"
                    placeholder="+1 234 567 8900"
                  />
                  {errors.contactInfo?.mobile && (
                    <p className="text-sm text-red-500">
                      {errors.contactInfo?.mobile.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className={"text-sm font-medium"}>LinkedIn URL</Label>
                  <Input
                    {...register("contactInfo.linkedin")}
                    type="url"
                    placeholder="https://linkedin.com/in/your-profile"
                  />
                  {errors.contactInfo?.linkedin && (
                    <p className="text-sm text-red-500">
                      {errors.contactInfo.linkedin.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className={"text-sm font-medium"}>
                    Twitter/X Profile
                  </Label>
                  <Input
                    {...register("contactInfo.twitter")}
                    type="url"
                    placeholder="https://twitter.com/your-handle"
                    error={errors.contactInfo?.email}
                  />
                  {errors.contactInfo?.twitter && (
                    <p className="text-sm text-red-500">
                      {errors.contactInfo.twitter.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* professional summary  */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium">Professional Summary</h2>
              <Controller
                name="summary"
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    className={"h-32"}
                    placeholder="Write a compelling professional summary..."
                    error={errors.summary}
                  />
                )}
              />
              {errors.summary && (
                <p className="text-sm text-red-500">{errors.summary.message}</p>
              )}
            </div>

            {/* skills  */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium">Skills</h2>
              <Controller
                name="skills"
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    className={"h-32"}
                    placeholder="List your key skills..."
                    error={errors.skills}
                  />
                )}
              />
              {errors.skills && (
                <p className="text-sm text-red-500">{errors.skills.message}</p>
              )}
            </div>

            {/* work experience  */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium">Work Experience</h2>
              <Controller
                name="experience"
                control={control}
                render={({ field }) => (
                    <EntryForm type="Experience" entries={field.value} onChange={field.onChange}/>
                )}
              />
              {errors.experience && (
                <p className="text-sm text-red-500">{errors.experience.message}</p>
              )}
            </div>

            {/* education  */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium">Education</h2>
              <Controller
                name="education"
                control={control}
                render={({ field }) => (
                    <EntryForm type="Education" entries={field.value} onChange={field.onChange}/>
                )}
              />
              {errors.education && (
                <p className="text-sm text-red-500">{errors.education.message}</p>
              )}
            </div>

            {/* projects  */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium">Projects</h2>
              <Controller
                name="projects"
                control={control}
                render={({ field }) => (
                    <EntryForm type="Project" entries={field.value} onChange={field.onChange}/>
                )}
              />
              {errors.projects && (
                <p className="text-sm text-red-500">{errors.projects.message}</p>
              )}
            </div>

          </form>
        </TabsContent>
        <TabsContent value="preview">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};
