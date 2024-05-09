"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction, useState, useTransition } from "react";
import { ArrowBigLeft, ArrowLeft } from "lucide-react";
import { createUser } from "@/actions/users/createUser";
import { toast } from "@/components/ui/use-toast";
import { redirect } from "next/navigation";

const formSchema = z.object({
  fullname: z.string().nonempty(),
  profilePicture: z.string().optional(),
  branch: z.string(),
  usn: z.string(),
  semister: z.string(),
});

export function CreateAccounutForm() {
  const [pending, startMutation] = useTransition();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      profilePicture: "",
      branch: "",
      usn: "",
      semister: "",
    },
  });

  const [userType, setUserType] = useState<"Student" | "Faculty" | undefined>(
    undefined
  );

  function onSubmit(values: z.infer<typeof formSchema>) {
    startMutation(async () => {
      try {
        await createUser({
          user: {
            userType: userType!,
            fullName: values.fullname,
            branch: values.branch,
            profilePicture: null,
            semister: values.semister,
            usn: values.usn,
          },
        });
        return redirect("/dashboard");
      } catch (e) {
        toast({
          description: "An error occured while creating the account",
        });
      }
    });
  }

  return (
    <div className="max-w-3xl w-full border-2 p-5 border-dashed  rounded-lg">
      {userType === undefined ? (
        <SelectUserType userType={userType} setUserType={setUserType} />
      ) : (
        <Form {...form}>
          <div
            onClick={() => setUserType(undefined)}
            className="flex gap-2 items-center mb-3 cursor-pointer hover:underline"
          >
            <ArrowLeft className="size-3" />
            Back
          </div>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="branch"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Branch</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value?.toString()}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a Value..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {["CSE", "ISE", "ECE", "ME", "CV", "AE", "EEE"].map(
                        (option) => (
                          <SelectItem
                            className="font-mono"
                            key={option}
                            value={option}
                          >
                            {option}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {userType === "Student" && (
              <>
                <FormField
                  control={form.control}
                  name="usn"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>USN</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your USN" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="semister"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Semister</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your semister" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            <div className="flex justify-center items-center mt-5">
              <Button disabled={pending} className="w-32" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
}

function SelectUserType({
  userType,
  setUserType,
}: {
  userType: "Student" | "Faculty" | undefined;
  setUserType: Dispatch<SetStateAction<"Student" | "Faculty" | undefined>>;
}) {
  return (
    <div className="flex justify-center items-center space-x-5">
      <div
        onClick={() => setUserType("Student")}
        className={`flex flex-col items-center cursor-pointer w-40 h-40 border justify-center rounded-lg
        ${
          userType === "Student"
            ? "border-primary text-primary"
            : "border-gray-400"
        }`}
      >
        <div className="text-2xl">Student</div>
      </div>
      <div
        onClick={() => setUserType("Faculty")}
        className={`flex flex-col items-center cursor-pointer w-40 h-40 border justify-center rounded-lg
            ${
              userType === "Faculty"
                ? "border-primary text-primary"
                : "border-gray-400"
            }`}
      >
        <div className="text-2xl">Faculty</div>
      </div>
    </div>
  );
}
