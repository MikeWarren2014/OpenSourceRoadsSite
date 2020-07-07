import { ImagePrimaryKeys, ImageSecondaryKeys } from '../enums/image';
import { Image } from '../models/image/image';

export const ImagesMap = Object.freeze({
  [ImagePrimaryKeys.PEOPLE] : {
    [ImageSecondaryKeys.TEAM]: [
      new Image(1,
        "/src/images/people/MikeAndChrisAtWork.jpg",
        "Mike and Chris at work on a pothole on 52nd street"),
      new Image(2,
        "/src/images/people/TeamPhotoWithPaul.jpg",
        "Our team with Paul, filling a pothole that was brought to our attention as a political talking point"),
    ],
    [ImageSecondaryKeys.MIKE]: [],
    [ImageSecondaryKeys.CHRIS]: [],

  },
  [ImagePrimaryKeys.WORK_WEVE_DONE] : {
    // NOTE: The keys here are dynamic
  },
});
