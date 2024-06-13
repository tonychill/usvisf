import Section from "@/components/section";

const sampleImageUrl =
  "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80";
const staff = [
  {
    name: "Michelle Smith",
    position: "Head Coach",
    imageUrl: sampleImageUrl,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Miguel Rivera",
    position: "Coach",
    imageUrl: sampleImageUrl,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Saul Rivera",
    position: "Coach",
    imageUrl: sampleImageUrl,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Dr. Jerry Smith",
    position: "Team Doctor",
    imageUrl: sampleImageUrl,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Moone Francis",
    position: "Equipment Manager",
    imageUrl: sampleImageUrl,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Michael Francis",
    position: "Equipment Manager",
    imageUrl: sampleImageUrl,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];
const players = [
  {
    name: "Some Player",
    position: "Pitcher | First Base",
    imageUrl: sampleImageUrl,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Some Player",
    position: "Pitcher | First Base",
    imageUrl: "/sherry.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Some Player",
    position: "Pitcher | First Base",
    imageUrl: sampleImageUrl,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Some Player",
    position: "Pitcher | First Base",
    imageUrl: "/bobby.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Some Player",
    position: "Pitcher | First Base",
    imageUrl: "/emerito.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Some Player",
    position: "Pitcher | First Base",
    imageUrl: "/erainee.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Some Player",
    position: "Pitcher | First Base",
    imageUrl: "/sherry.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Some Player",
    position: "Pitcher | First Base",
    imageUrl: "/sherry.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Some Player",
    position: "Pitcher | First Base",
    imageUrl: "/sherry.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Some Player",
    position: "Pitcher | First Base",
    imageUrl: "/sherry.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Some Player",
    position: "Pitcher | First Base",
    imageUrl: "/sherry.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Some Player",
    position: "Pitcher | First Base",
    imageUrl: "/sherry.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Some Player",
    position: "Pitcher | First Base",
    imageUrl: "/sherry.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Some Player",
    position: "Pitcher | First Base",
    imageUrl: "/sherry.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Some Player",
    position: "Pitcher | First Base",
    imageUrl: "/sherry.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Some Player",
    position: "Pitcher | First Base",
    imageUrl: "/sherry.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  // More playerss...
];

export default function Roster() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Coaches */}
        <Section title="Staff">
          <ul
            role="list"
            className="mx-auto grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {staff.map((coach) => (
              <li key={coach.name}>
                <img
                  className="mx-auto h-24 w-24 rounded-full"
                  src={coach.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                  {coach.name}
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  {coach.position}
                </p>
              </li>
            ))}
          </ul>
        </Section>
        {/* Players */}
        <Section title="Players">
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {players.map((player) => (
              <li key={player.name}>
                <img
                  className="mx-auto h-24 w-24 rounded-full"
                  src={player.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                  {player.name}
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  {player.position}
                </p>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}
