import { FC } from "react";
import { Event as EventData } from "@/apis/types";
import { epochToDateStr } from "@/utils";

export interface EventProps {
  event: EventData;
}
const Event: FC<EventProps> = ({
  event: { name, date, location, mainImageUrl },
}) => {
  return (
    <div>
      <img
        className="hidden h-12 w-12 flex-none rounded-full bg-gray-50"
        src={mainImageUrl}
        alt=""
      />
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-gray-900">{name}</p>
        <div>
          <span className="mt-1 truncate text-xs leading-5 text-gray-500">
            {`${epochToDateStr(date)} @ ${location}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Event;
