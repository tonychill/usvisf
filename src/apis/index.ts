import mock_data from "@/mock/data.json";
import { createClient } from "contentful";

// console.log("access token", process.env.CONTENTFUL_ACCESS_TOKEN);
// const { NEXT_PUBLIC_CONTENTFUL_SPACE_ID, NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN } =
//   process.env;

if (
  !process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ||
  !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
) {
  console.log(
    "keys",
    process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  );
  throw new Error("Contentful keys are missing");
}

let client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

// const getClient = (preview) => (preview ? previewClient : contentful);
const getClient = (preview: any) => client;

export interface getContentParams {
  skip?: number;
  limit?: number;
  contentType?: string;
  all?: boolean;
  id?: string;
}
export async function getContent(params: getContentParams) {
  try {
    let { limit, skip } = params;

    if (params.id) {
      let resp = await client.getEntry(params.id);
      return {
        data: resp,
      };
    }
    // if (type) {
    const content = await getClient(false).getEntries({
      content_type: params.contentType,
      limit,
      skip,

      // "fields.rate[lt]": `${rate}`,
      // select: fields,
    });
    return {
      data: content.items,
    };
    // }
  } catch (error) {
    console.log(error);
    return {
      error: error,
    };
  }
}

export async function getContentById(id: string) {
  try {
    let resp = await client.getEntry(id);
    return {
      data: resp,
    };
    // }
  } catch (error) {
    console.log(error);
    return {
      error: error,
    };
  }
}
export async function getAllExperiences() {
  try {
    return await client.getEntries({
      content_type: "experience",
      // "fields.rate[lt]": `${rate}`,
      // select: fields,
    });
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getContentByType(params: getContentParams) {
  // const { limit, ...others } = params; //TODO: This is for a future implementation.
  if (!params.contentType) {
    params.contentType = "all";
  }
  try {
    return await getClient(false).getEntries({
      content_type: params.contentType,
      // "fields.rate[lt]": `${rate}`,
      // select: fields,
    });
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getRelatedContent(params: getContentParams) {
  if (!params.id) {
    throw new Error("No id provided to getRelatedContent");
  }
  const content = await getContentById(params.id);
  //parse the props from content and get the params to pass to getContentByType
  return getContentByType(params);
}

// export async function _getExperiences(params: getContentParams) {
//   let related, entry;
//   const fields =
//     type === "cars"
//       ? ["sys.id", "fields.rate", "fields.passengers", "fields.media"]
//       : [
//           "sys.id",
//           "fields.name",
//           "fields.rate",
//           "fields.cabins",
//           "fields.heads",
//           "fields.passengers",
//           "fields.media",
//         ];
//   try {
//     entry = await getClient(false).getEntry(xid);
//     related = await getClient(false).getEntries({
//       content_type: "bookable",
//       "fields.rate[lt]": `${entry.fields.rate}`,
//       select: fields,
//     });
//     related = related.items.slice(0, 6);
//     const experiences = { entry, related };
//     return experiences;
//   } catch (error) {
//     console.log(error);
//   }
// }

/**getExperiences(type:string, filters: object, id)
 * get all the experiences the match the passed type and filters. if an id is passed then the first params will be ignored and only the id will be used to retrieve the experience.  */

// export async function getEntriesOfType(type, filter) {
//   try {
//     const entries = await getClient(false).getEntries({
//       content_type: type,
//       order: "-sys.createdAt",
//     });
//     return entries.items;
//   } catch (error) {
//     console.log(error);
//   }
// }
// export async function getExperiencesOfType(type, filter, id, skip, limit) {
//   try {
//     const entries = await getClient(false).getEntries({
//       skip,
//       limit,
//       content_type: type,
//       order: "-sys.createdAt",
//     });
//     return entries.items;
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function getExperienceById(id) {
//   try {
//     const experience = await getClient(false).getEntry(id);
//     return experience;
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function getRelatedExperiences(type, params) {
//   let { rate } = params;

//   //TODO: Use this function body as a model for get related content.
//   //rate should be passed into this function as a property of params.

//   //if Array.isArray(params.types) === true for (type of params.types) => getContentByType
//   const fields =
//     type === "cars"
//       ? "sys.id,fields.rate,fields.passengers,fields.media"
//       : "sys.id,fields.name,fields.rate,fields.cabins,fields.heads,fields.passengers,fields.media";

//   try {
//     const experiences = await getClient(false).getEntries({
//       content_type: type,
//       "fields.rate[lt]": `${rate}`,
//       select: fields,
//     });
//     return experiences;
//   } catch (error) {
//     console.log(error);
//   }
// }

export function mockGetStory(id: string) {
  return mock_data.stories.filter((s) => {
    if (s.id == id) {
      return s;
    }
  })[0];
}
