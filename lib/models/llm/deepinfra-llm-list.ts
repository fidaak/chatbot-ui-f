import { LLM } from "@/types"

const DEEPINFRA_PLATORM_LINK = "https://deepinfra.com/models"

// DeepInfra Models -----------------------------

// GPT-4 Turbo (UPDATED 12/18/23)
const Dolphin26mixtral8x7b: LLM = {
  modelId: "cognitivecomputations/dolphin-2.6-mixtral-8x7b",
  modelName: "dolphin-2.6-mixtral-8x7b",
  provider: "deepinfra",
  hostedId: "dolphin-2.6-mixtral-8x7b",
  platformLink: DEEPINFRA_PLATORM_LINK,
  imageInput: false
}

export const DEEPINFRA_LLM_LIST: LLM[] = [Dolphin26mixtral8x7b]
