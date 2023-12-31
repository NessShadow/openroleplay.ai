import {
  Button,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Tooltip,
} from "@repo/ui/src/components";
import { AspectRatio } from "@repo/ui/src/components/aspect-ratio";
import { MessagesSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { nFormatter } from "../../app/lib/utils";
import ModelBadge from "../characters/model-badge";
import DraftBadge from "../characters/draft-badge";

const CharacterCard = (props: {
  id: string;
  name: any;
  description: any;
  numChats?: number;
  cardImageUrl?: string;
  onEdit?: any;
  model?: any;
  isDraft?: boolean;
}) => {
  return (
    <AspectRatio
      ratio={1 / 1.75}
      className="group w-full h-full hover:-translate-y-1 duration-200 shadow hover:shadow-lg place-content-center rounded-lg"
    >
      <Link href={`/character/${props?.id}`}>
        <Card className="rounded-lg p-2 w-full h-full flex items-end">
          {props.onEdit && (
            <Button
              className="absolute z-[4] right-4 top-4 h-6 rounded-full text-xs"
              variant="outline"
              onClick={(e) => {
                e.preventDefault();
                props.onEdit();
              }}
            >
              Edit
            </Button>
          )}
          <div className="absolute z-[3] top-4">
            <ModelBadge modelName={props.model as string} />
          </div>
          <CardHeader className="relative w-full p-4 z-[2]">
            {props.cardImageUrl && (
              <div className="bg-gradient-to-b from-transparent via-black/60 to-black absolute -left-2 -bottom-2 w-[calc(100%+16px)] h-[calc(100%+2rem)] rounded-b-lg" />
            )}
            <CardTitle
              className={`${
                props.cardImageUrl ? "text-white" : "text-foreground"
              } text-lg line-clamp-1 select-none group-hover:opacity-80 duration-200 z-[3] flex justify-between`}
            >
              <div className="w-[80%] truncate">{props.name}</div>
              {(props?.numChats as number) > 0 && (
                <Tooltip content={`Number of chats with ${props.name}`}>
                  <div className="text-white text-xs rounded-full group-hover:opacity-80 duration-200 z-[3] flex gap-0.5 items-center">
                    <MessagesSquare className="w-5 h-5 p-1 aspect-square" />
                    {nFormatter(props?.numChats as number)}
                  </div>
                </Tooltip>
              )}
              {props.isDraft && <DraftBadge />}
            </CardTitle>
            <CardDescription
              className={`${
                props.cardImageUrl ? "text-white" : "text-foreground"
              } select-none text-xs line-clamp-3 group-hover:opacity-80 duration-200 z-[3]`}
            >
              {props.description}
            </CardDescription>
          </CardHeader>
          {props.cardImageUrl && (
            <Image
              src={props.cardImageUrl}
              alt={""}
              width={300}
              height={525}
              quality={70}
              className="object-cover absolute w-full h-full rounded-lg left-0 top-0 pointer-events-none z-[1]"
            />
          )}
        </Card>
      </Link>
    </AspectRatio>
  );
};

export default CharacterCard;
