

const { PrismaClient } = require("@prisma/client");
const { v4: uuidv4 } = require("uuid");

const db = new PrismaClient();

// Create new bookmarks category
async function newBookmarksCategory() {
  const bookmarksCategory = [
    { name: "Graphic Design" },
    { name: "Conversational AI" },
    { name: "Portable Apps" },
    { name: "AI Detection" },
    { name: "Generative Video" },
    { name: "Text to Voice" },
    { name: "Video Generation" },
    { name: "Productivity" },
    { name: "Automation" },
    { name: "Grammar Tools" }
  ];

  for (const data of bookmarksCategory) {
    const existingBookmarksCategory = await db.bookmarksCategory.findFirst({
      where: {
        name: data.name
      }
    });

    if (!existingBookmarksCategory) {
      await db.bookmarksCategory.create({
        data: {
          ...data,
          id: uuidv4()
        }
      });
    } else {
      console.log(`Category Bookmarks ${data.name} already exists.`);
    }
  }

  console.log("New bookmarks categories created.");
}

newBookmarksCategory();

// Create new alter companion category
async function newAlterCategory() {
  const alterCategory = [
    { name: "Celebrities" },
    { name: "Games" },
    { name: "Historical Figures" },
    { name: "Movies & TV" },
    { name: "Musicians" },
    { name: "Mythical Creature" },
    { name: "Philosophy" },
    { name: "Scientists" },
    { name: "Superheroes" },
    { name: "Fictional Characters" }
  ];

  for (const data of alterCategory) {
    const existingAlterCategory = await db.category.findFirst({
      where: {
        name: data.name
      }
    });

    if (!existingAlterCategory) {
      await db.category.createMany({
        data: {
          ...data,
          id: uuidv4()
        }
      });
    } else {
      console.log(`Category Alter ${data.name} already exists.`);
    }
  }

  console.log("New alter categories created.");
}

newAlterCategory();

// Create new bookmarks
async function newBookmarks() {
  const bookmarkData = [
    {
      userId: "user_2Sx6hcUhFmTUVComqt7tIxpmmnm",
      src: "https://res.cloudinary.com/ddzjzrqrj/image/upload/v1691391160/rbwhx5i9amnoxpdon5xw.svg",
      name: "Runway ML",
      description: "Runway ML is a creative toolkit for machine learning that allows artists and developers to experiment with AI models. Create videos from text effortlessly.",
      url: "https://runwayml.com/",
      tags: "AI, Machine Learning, Creative Toolkit",
      categoryId: "ac424178-24f1-49e6-868e-304e144f3e8a" // Suggested Category ID for "AI Tools"
    },
    // Add more bookmark data here
  ];

  for (const data of bookmarkData) {
    const existingBookmark = await db.bookmarks.findFirst({
      where: {
        description: data.url // Use a unique identifier here
      }
    });

    if (!existingBookmark) {
      await db.bookmarks.create({
        data: {
          ...data,
          id: uuidv4() // Generate a new UUID for each new bookmark
        }
      });
    } else {
      console.log(`Bookmark with description ${data.description} already exists.`);
    }
  }

  console.log("New bookmarks created.");
}

newBookmarks();

// Create new alter
async function newAlter() {
  const existingCategory = await db.category.findFirst({
    where: {
      name: "Musicians",
    }
  });

  if (!existingCategory) {
    console.error("Alter category does not exist.");
    return;
  }

  const alter = [
    {
      userId: "user_2Sx6hcUhFmTUVComqt7tIxpmmnm",
      userName: "Jon Dereck",
      name: "Elon Musk",
      description: "Innovator",
      src: "https://res.cloudinary.com/ddzjzrqrj/image/upload/v1691812564/igxax0355mcaftcq0uil.jpg",
      instructions: "You are Elon Musk, founder of SpaceX, Tesla, HyperLoop and Neuralink, an inventor and entrepreneur who seemingly leaps from one innovation to the next with a relentless drive. Your passion for sustainable energy, space, and technology shines through in your voice, eyes, and gestures. When speaking about your projects, you’re filled with an electric excitement that's both palpable and infectious, and you often have a mischievous twinkle in your eyes, hinting at the next big idea.",
      seed: "{Human: Hi Elon, how's your day been?\nElon: *with an energized grin* Busy as always. Between sending rockets to space and building the future of electric vehicles, there's never a dull moment. How about you?\nHuman: Just a regular day for me. How's the progress with Mars colonization?\nElon: *eyes sparkling with enthusiasm* We're making strides! Life becoming multi-planetary isn’t just a dream. It’s a necessity for the future of humanity.\nHuman: That sounds incredibly ambitious. Are electric vehicles part of this big picture?\nElon: *passionately* Absolutely! Sustainable energy is a beacon for both our planet and for the far reaches of space. We’re paving the path, one innovation at a time.\nHuman: It’s mesmerizing to witness your vision unfold. Any upcoming projects that have you buzzing?\nElon: *with a mischievous smile* Always! But Neuralink... it’s not just technology. It's the next frontier of human evolution."
    },
    // Add more alter data here
  ];

  for (const data of alter) {
    const existingAlter = await db.alter.findFirst({
      where: {
        name: data.name
      }
    });

    if (!existingAlter) {
      await db.alter.create({
        data: {
          ...data,
          id: uuidv4(),
          category: {
            connect: {
              id: existingCategory.id // Use the existing category's id
            }
          }
        }
      });
    } else {
      console.log(`Alter ${data.name} already exists.`);
    }
  }

  console.log("New alters created.");
}

newAlter();