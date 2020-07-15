import { ImagePrimaryKeys, ImageSecondaryKeys } from "../enums/image";
import { Image } from "../models/image/image";

export const ImagesMap = Object.freeze({
  [ImagePrimaryKeys.PEOPLE]: {
    [ImageSecondaryKeys.TEAM]: [
      new Image(
        1,
        "assets/images/people/MikeAndChrisAtWork.jpg",
        "Mike and Chris at work on a pothole on 52nd street"
      ),
      new Image(
        2,
        "assets/images/people/TeamPhotoWithPaul.jpg",
        "Our team with Paul, filling a pothole that was brought to our attention as a political talking point"
      ),
    ],
    [ImageSecondaryKeys.MIKE]: [
      new Image(
        3,
        "assets/images/people/OurFirstSupplies.png",
        "Mike Warren with our organization's very first supplies"
      ),
    ],
    [ImageSecondaryKeys.CHRIS]: [],
  },
  [ImagePrimaryKeys.WORK_WEVE_DONE]: {
    // NOTE: The keys here are the years
    "2017": [
      new Image(
        4,
        "assets/images/work/FirstPotholeFilled.jpg",
        "The first actual pothole that Open Source Roads has ever filled"
      ),
      new Image(
        5,
        "assets/images/work/FirstCluster.jpg",
        "The first cluster of potholes that Open Source Roads has ever filled"
      ),
    ],
    "2018": [
      new Image(
        6,
        "assets/images/work/WorkInNeighborhood.jpg",
        "Working in the neighborhood"
      ),
      new Image(
        7,
        "assets/images/work/SealcoatingColdPatch.jpg",
        "A freshly tamped patch being seal coated to increase the lifespan of the patch"
      ),
      new Image(
        8,
        "assets/images/work/IndianaShapedPothole.jpg",
        "A pothole that was cut with a concrete saw. Coincidentally, it's shaped like Indiana!"
      ),
    ],
    "2019": [
      new Image(
        9,
        "assets/images/work/FillingACrater.jpg",
        "A crater that got filled with limestone base, followed by cold patch"
      ),
    ],
  },
});
