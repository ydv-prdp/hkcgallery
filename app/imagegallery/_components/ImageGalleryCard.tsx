import Image from "next/image";
import Link from "next/link";
import { BookOpen } from "lucide-react";

interface ImageGalleryCardProps{
    id:string;
    title:string;
    imageUrl:string;
}
const ImageGalleryCard = ({id, title, imageUrl}:ImageGalleryCardProps) => {
  return (
    <>
        {/* <div className="group hover:shadow-sm  transition overflow-hidden border rounded-lg p-3 h-full">
            <div className="relative w-full aspect-video rounded-md overflow-hidden">
                <Image
                   fill
                   className="object-cover"
                   alt={title}
                   src={imageUrl} 
                />
                
            </div>
          
        </div> */}
        <div  className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
          <Image
          alt="Next.js Conf photo"
          className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
          style={{ transform: "translate3d(0, 0, 0)" }}
          src={imageUrl}
          width={500}
          height={400}
          sizes="(max-width: 640px) 100vw,
            (max-width: 1280px) 50vw,
            (max-width: 1536px) 33vw,
            25vw"
        />
        </div>
        </>
  )
}

export default ImageGalleryCard