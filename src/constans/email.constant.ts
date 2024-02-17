import { EEmailAction } from "../enums/email.action.enum";

export const templates = {
  [EEmailAction.WHEATHER]: {
    templateName: "wheather",
    subject: "Wheather on your city today",
  },
  [EEmailAction.ALLERT]: {
    templateName: "wheather.alert",
    subject: "Wheather allert!!!",
  },
};
