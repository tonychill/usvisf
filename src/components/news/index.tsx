import Image from "next/image";
import mock_data from "@/mock/data.json";
const stories = mock_data.stories;
export default function Example() {
  return (
    <div className="bg-white mb-24 my-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto _max-w-2xl _lg:max-w-4xl">
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {stories.map((story) => (
              <article
                key={story.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <Image
                    src={story.mainImageUrl}
                    alt=""
                    height="600"
                    width="600"
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={story.datetime} className="text-gray-500">
                      {story.date}
                    </time>
                    <a
                      href={`stories/${story.id}`}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {story.category.title}
                    </a>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={`stories/${story.id}`}>
                        <span className="absolute inset-0" />
                        {story.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      {story.description}
                    </p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                      <Image
                        src={story.author.avatar}
                        alt=""
                        height="600"
                        width="600"
                        className="h-10 w-10 rounded-full bg-gray-50"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a href={story.author.href}>
                            <span className="absolute inset-0" />
                            {story.author.avatar}
                          </a>
                        </p>
                        {/* TODO: will need to handle roles */}
                        <p className="text-gray-600">{story.author.roles[0]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
