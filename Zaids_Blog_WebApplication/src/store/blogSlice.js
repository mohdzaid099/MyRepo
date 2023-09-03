import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [
    {
      id: "1",
      title: "IBM sells The Weather Company assets to Francisco Partners",
      category: "Technical about Startups",
      description: "Francisco Partners, the private equity firm, has signed a definitive agreement to acquire The Weather Company assets from IBM, the two companies announced today. The terms of the deal weren’t disclosed, save that it’s expected to close by the end of Q1 2024 — subject to regulatory approvals and customary closing conditions, of course. As a part of the acquisition, Francisco Partners will get The Weather Company’s consumer-facing apps including The Weather Channel mobile, Weather.com, Weather Underground and Storm Radar, plus The Weather Company’s enterprise offerings for broadcast, media, aviation, ad tech and “data solutions.” In addition, The Weather Company will bring its forecasting science services to Francisco Partners, IBM says, as well as its tech platform.",
    },
    {
      id: "2",
      title: "Michael’s Potato Salad",
      category: "Cooking Blogs",
      description: " This potato salad, my friends, is what I came up with after Michael asked for potato salad for his birthday celebration that, as he puts it “he could eat.” Michael, you see, is a picky eater. He picks out onions, celery, peppers, tomatoes, mushrooms….well, you get the drift. I grumbled a bit about leaving out what surely contribute the most delicious, flavorful, and textural elements of just about any potato salad, but, being a dedicated partner, I set out to tackle my challenge.",
    },
    {
      id: "3",
      title: "Nagarro Jalsa '23",
      category: "Nagarro Jalsa",
      description: "The Jalsa evening was an exciting experience. It is a fascinating adventure. It was such a lovely experience meeting with such Great minds, Meeting Manas Fuloria and many more there.",
    },
    {
      id: "4",
      title: "Exploring the Next Level: Introducing the iPhone 15",
      category: "Technical Blogs",
      description: ' The evolution of smartphones has been a fascinating journey, with each new release pushing the boundaries of innovation. In this context, Apples iPhone series has consistently stood out as a trailblazer, and the iPhone 15 is no exception. Building upon the foundation of its predecessors, the iPhone 15 brings forth a host of features that redefine what a smartphone can be. In conclusion, the iPhone 15 represents a leap forward in the evolution of smartphones. With its stunning display, enhanced performance, advanced camera capabilities, and commitment to privacy, it offers a comprehensive package that caters to the needs of modern users. As technology continues to shape our lives, the iPhone 15 stands as a testament to Apples dedication to innovation and excellence.',
    },
  ],
};

const blogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
      console.log(state.blogs);
    },
    updateBlog: (state, action) => {
      const { id, title, category, description } = action.payload;
      const blogIndex = state.blogs.findIndex((blog) => blog.id === (id));
      console.log("===========blogIndex=========");
      console.log(blogIndex);
      state.blogs[blogIndex].title = title;
      state.blogs[blogIndex].category = category;
      state.blogs[blogIndex].description = description;
      console.log("===========blogTitle=========");
      console.log(state.blogs[blogIndex].title);
    },
    deleteBlog: (state, action) => {
      const id = action.payload;
      state.blogs = state.blogs.filter((blog) => blog.id !== id);
    },
    toggleLike: (state, action) => {
      const id = action.payload;
      const blogIndex = state.blogs.findIndex((blog) => blog.id === id);
      state.blogs[blogIndex].isLiked = !state.blogs[blogIndex].isLiked;
    },
  },
});

export const selectBlogById = (state, blogID) => {
  console.log("=======Blog ID :=========");
  console.log(blogID);
  console.log("===========Blogs Content=========");
  console.log(state.blogs.blogs);
  console.log("===========blogID typeof=========");
  console.log(typeof Number(blogID));
  const number = blogID;
  console.log("=========TypeOf blog.title =============");
  console.log(typeof String(state.blogs.blogs.title));
  const test = state.blogs.blogs.find((blog) => blog.id === number);
  console.log(test);
  return state.blogs.blogs.find((blog) => blog.id === (blogID));
};

export const { addBlog, updateBlog, deleteBlog, toggleLike } =
  blogSlice.actions;
export default blogSlice.reducer;
