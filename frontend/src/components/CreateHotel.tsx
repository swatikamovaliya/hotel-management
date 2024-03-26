/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { storage } from "../../firebase/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  rating: z.string().min(1).max(5),
  charges: z.string().min(0),
  description: z.string().min(10).max(1000),
  city: z.string().min(2).max(50),
  country: z.string().min(2).max(50),
  phone: z.string().min(10).max(15),
});

const CreateHotel = () => {
  const [preview, setPreview] = useState("");
  const [uploadLoading, setUploadLoading] = useState(false);
  const navigate = useNavigate();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      city: "",
      country: "",
      phone: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const response = await fetch(`${process.env.BACKEND_URL}/hotel/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values, img: preview }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data.data);
      navigate(`/book/${data.data._id}`);
    } else {
      throw new Error("Failed to fetch data");
    }
  }

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadLoading(true);
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const storageRef = ref(storage, `files/${selectedFile.name}`);
      try {
        const task = uploadBytesResumable(storageRef, selectedFile);
        await task;
        const downloadURL = await getDownloadURL(storageRef);
        console.log("Download URL:", downloadURL);
        setPreview(downloadURL);
        setUploadLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="p-4 m-4">
      <DialogHeader>
        <DialogTitle>create hotel</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>hotel name</FormLabel>
                  <FormControl>
                    <Input placeholder="name" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rating</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>Rating of the hotel</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="charges"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Charges</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>Charges of the hotel</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>Description of the hotel</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>City of the hotel</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>Country of the hotel</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>Phone of the hotel</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Input onChange={onChange} type="file" accept="image/*" />

            {uploadLoading && <p>Uploading...</p>}
            {preview && <img src={`${preview}`} alt="preview" />}
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateHotel;
