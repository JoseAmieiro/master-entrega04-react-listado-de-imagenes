import { PictureInfoMock } from "@/core/mocks";
import { PictureInfo } from "./list-cats.vm";


export const mapCatsToVM = (data: PictureInfoMock[]): PictureInfo[] => data.map(mapCatToVM);

const mapCatToVM = (data: PictureInfoMock): PictureInfo => ({
    id: data.id,
    picUrl: data.picUrl,
    title: data.title,
    selected: false,
})