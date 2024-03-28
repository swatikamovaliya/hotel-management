/* eslint-disable react-hooks/exhaustive-deps */
import AdminNav from "@/components/AdminNav";
import { Room } from "@/types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { storage } from "../../firebase/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  rating: z.any(),
  charges: z.any(),
  description: z.string().min(10).max(1000),
  city: z.string().min(2).max(50),
  country: z.string().min(2).max(50),
  phone: z.string().min(10).max(15),
});

const EditHotel = () => {
  const [room, setRoom] = useState<Room | null>(null);
  const [preview, setPreview] = useState("");
  const [uploadLoading, setUploadLoading] = useState(false);

  const { hotelId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData(
      url = `${import.meta.env.VITE_BACKEND_URL}/hotel/${hotelId}`
    ) {
      const response = await fetch(url, {});
      return response.json();
    }
    fetchData().then((data) => {
      console.log(data.data);
      setRoom(data.data);
      setPreview(data.data.img);
      form.reset({
        name: data.data.name || "",
        description: data.data.description || "",
        city: data.data.city || "",
        rating: data.data.rating || "",
        charges: data.data.charges || "",
        country: data.data.country || "",
        phone: data.data.phone || "",
      });
    });
  }, [hotelId]);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: room?.name || "",
      description: room?.description || "",
      city: room?.city || "",
      rating: room?.rating || "",
      charges: room?.charges || "",
      country: room?.country || "",
      phone: room?.phone || "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/hotel/${hotelId}/edit`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, img: preview }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data.data);
      navigate(`/admin`);
    } else {
      console.log(response);
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
    <div className="my-4">
      <div className="my-5 h-72">
        <AdminNav />
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="grid w-96 gap-4 py-4">
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
              <Button type="submit">Update</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditHotel;
