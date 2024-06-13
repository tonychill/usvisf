import { StaticGenerationAsyncStorageWrapper } from "next/dist/server/async-storage/static-generation-async-storage-wrapper";

export interface Story {
  id: string;
  title: string;
  isMain: boolean;
  description: string;
  mainImageUrl: string;
  date: string;
  author: Member;
  category: { title: string; href: string };
}

export interface Event {
  id: string;
  name: string;
  date: number;
  location: string;
  mainImageUrl: string;
}

export interface Member {
  id: string;
  roles: string[];
  firstName: string;
  lastName: string;
  avatar: string;
  bio: string;
}

export enum Role {
  BOARD_MEMBER = "Board Member",
  PESIDENT = "President",
  VICE_PRESIDENT = "Vice President",
  PLAYER = "Player",
  COACH = "Coach",
  MANAGER = "Manager",
  FAN = "Fan",
}

export interface Team {
  id: string;
  name: string;
  description: string;
  image: string;
  members: Member[];
  events: Event[];
  players: Member[];
  coaches: Member[];
  headCoach: Member;
}
