import Imagine from "@models/image";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  const {imageUrl} = await request.json();

  try {
      await connectToDB();
      const newImg = new Imagine({imageUrl:imageUrl });

      await newImg.save();
      return new Response(JSON.stringify(newImg), { status: 201 })
  } catch (error) {
      return new Response("Failed to create a new prompt", { status: 500 });
  }
}