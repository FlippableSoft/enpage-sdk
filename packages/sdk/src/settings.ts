import { type TemplateSettings } from "@enpage/types/template-settings";

const defaultTemplateSettings: TemplateSettings = {
  editorOutlineColor: "#8f93d8",
};

export function defineSettings(settings: TemplateSettings) {
  return {
    ...defaultTemplateSettings,
    ...settings,
  };
}
